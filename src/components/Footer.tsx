import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const ca = "0x000000000000000000000000000000000000dead"; // Placeholder

    const copyToClipboard = () => {
        navigator.clipboard.writeText(ca);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="py-20 px-4 border-t border-white/20 flex flex-col items-center gap-12 bg-black">

            {/* Socials */}
            <div className="flex gap-8">
                <a href="https://x.com/buttpuff_?s=11&t=RhEbVKiipjrmWTbsvZD5ZA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    {/* X Icon */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
            </div>

            {/* Contract Address */}
            <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 group cursor-pointer"
            >
                <span className="font-mono text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                    CA: {ca.slice(0, 6)}...{ca.slice(-4)}
                </span>
                <div className="px-2 py-0.5 border border-white/30 text-xs rounded uppercase group-hover:bg-white group-hover:text-black transition-all">
                    {copied ? "Copied" : "Copy"}
                </div>
            </button>

            {/* Footer Text */}
            <p className="text-white/30 lowercase text-sm font-bold tracking-widest">
                nothing promised.
            </p>
        </footer>
    );
};

export default Footer;
