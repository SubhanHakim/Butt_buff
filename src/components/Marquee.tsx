import React from 'react';

const Marquee: React.FC = () => {
    const content = "DONT INHALE. JUST HOLD. NO UTILITY. JUST PUFF. ★ ";
    // Repeat content enough times to fill screen + scroll
    const repeatedContent = Array(10).fill(content).join("");

    return (
        <div className="w-full border-y-2 border-white bg-black overflow-hidden relative py-4">
            {/* Container for the sliding text */}
            <div className="whitespace-nowrap inline-block animate-marquee">
                <span className="text-4xl md:text-6xl font-display uppercase tracking-wider mx-4">
                    {repeatedContent}
                </span>
            </div>

            {/* Duplicate for seamless loop */}
            <div className="whitespace-nowrap inline-block animate-marquee absolute top-4 left-0">
                <span className="text-4xl md:text-6xl font-display uppercase tracking-wider mx-4">
                    {repeatedContent}
                </span>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default Marquee;
