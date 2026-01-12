import React from 'react';
import blobLogo from '../assets/blob-logo.png';

const Navbar: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/90 backdrop-blur-sm border-b border-white/10">
            {/* Logo */}
            <div
                className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => scrollToSection('hero')}
            >
                <div className="w-10 h-10 overflow-hidden rounded-full border border-white/20">
                    <img src={blobLogo} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-display text-xl uppercase tracking-wider hidden sm:block">Butt Puff</span>
            </div>

            {/* Center Links */}
            <div className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                <button
                    onClick={() => scrollToSection('hero')}
                    className="font-bold uppercase tracking-widest text-sm hover:text-white/60 transition-colors"
                >
                    Home
                </button>
                <button
                    onClick={() => scrollToSection('gallery')}
                    className="font-bold uppercase tracking-widest text-sm hover:text-white/60 transition-colors"
                >
                    Gallery
                </button>
            </div>

            {/* Right X Icon */}
            <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all rounded-full"
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
        </nav>
    );
};

export default Navbar;
