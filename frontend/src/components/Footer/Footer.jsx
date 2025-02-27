import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1e1e2e] py-3 text-center">
            <p className="text-[#a6e3a1]">
                © {currentYear} Unlok Chat. Follow us on{" "}
                <a target='_blank' rel='noopener noreferrer' href="https://x.com/xsh_shahab" className="text-[#ff7a93] hover:underline">Twitter</a> and{" "}
                <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/mdshahabuddin82/" className="text-[#ff7a93] hover:underline">LinkedIn</a>.
            </p>
        </footer>
    );
};

export default Footer;
