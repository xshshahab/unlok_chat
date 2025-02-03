import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const handleError = (error, defaultMessage) => {
  const message = error?.response?.data?.message || defaultMessage;
  toast.error(message);
  console.error(message, error);
};

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],

  // Check if the user is authenticated
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.error("ERROR in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      handleError(error, "Failed to sign up.");
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
    } catch (error) {
      handleError(error, "Failed to log in.");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null, isCheckingAuth: false });
      toast.success("Logged out successfully");
    } catch (error) {
      handleError(error, "Failed to log out.");
    }
  },

  updateProfile: async (data, onSuccess = null, onError = null) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set((state) => ({
        authUser: { ...state.authUser, ...res.data },
      }));
      toast.success("Profile updated successfully");
      onSuccess?.(res.data);
    } catch (error) {
      handleError(error, "Failed to update profile.");
      onError?.(error);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
