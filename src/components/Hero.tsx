import React from 'react';
import blobLogo from '../assets/blob-logo.png';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
            {/* Absolute chaos elements? No, request said composed. */}

            <div className="flex flex-col items-center gap-8 z-10">
                {/* Logo */}
                <div className="w-64 h-64 md:w-96 md:h-96 relative hover:scale-105 transition-transform duration-300 ease-out cursor-pointer animate-float">
                    <img
                        src={blobLogo}
                        alt="Butt Puff Logo"
                        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    />
                </div>

                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }
                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }
                `}</style>

                {/* Text Content */}
                <div className="text-center space-y-4">
                    <h1 className="text-6xl md:text-9xl tracking-tighter uppercase leading-none select-none">
                        Butt Puff
                    </h1>
                    <p className="text-2xl md:text-4xl lowercase opacity-80 tracking-widest font-bold">
                        it exists
                    </p>

                    <div className="text-base md:text-xl font-bold opacity-70 max-w-2xl mx-auto mt-6 leading-relaxed space-y-1">
                        <p>Born from absolutely nothing.</p>
                        <p>No depths. No rulers. No destiny.</p>
                        <p className="text-white pt-2">BUTT PUFF isn’t a movement.</p>
                        <p>It isn’t a revolution.</p>
                        <p>It’s a small, unnecessary puff that somehow stayed.</p>
                    </div>
                </div>

                {/* Button */}
                <a
                    href="https://pump.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-12 py-6 bg-white text-black text-2xl md:text-3xl font-display uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 border-4 border-white mt-8 hover:scale-105 active:scale-95"
                >
                    <span className="relative z-10">Buy $BUTTPUFF</span>
                    <div className="absolute inset-0 border-2 border-dashed border-black m-1 group-hover:border-white transition-colors"></div>
                </a>
            </div>

            {/* Decorative vertical line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/10 -z-0 hidden md:block" />
        </section>
    );
};

export default Hero;
