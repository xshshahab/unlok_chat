import React from 'react'

const RightSidePattern = ({ title, subtitle }) => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
            <div className="max-w-md text-center">
                <div className="grid grid-cols-3 gap-3 mb-8">
                    {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className={`aspect-square rounded-2xl bg-[#17051c] ${i % 2 === 0 ? "animate-pulse" : ""
                                }`}
                        />
                    ))}
                </div>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-zinc-500 max-w-[30vw] font-semibold text-sm">{subtitle}</p>
            </div>
        </div>
    )
}

export default RightSidePattern