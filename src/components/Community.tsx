import React from 'react';
import { Reveal } from './Reveal';

const Community: React.FC = () => {
    return (
        <section className="py-32 px-4 border-t-2 border-white/10 flex flex-col items-center bg-zinc-950 relative overflow-hidden">
            <Reveal width="100%">
                <div className="flex flex-col items-center">
                    <h2 className="text-6xl md:text-9xl font-display uppercase tracking-tighter mb-12 text-center relative z-10">
                        Join the<br /><span className="text-outline-white text-transparent" style={{ WebkitTextStroke: '2px white' }}>Puff</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8 z-10 w-full max-w-lg px-4 justify-center">
                        {/* X */}
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex-1 group bg-black text-white p-8 border-4 border-white hover:bg-white hover:text-black transition-all duration-300 flex flex-col items-center gap-4 cursor-pointer">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 group-hover:scale-110 transition-transform">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            <span className="text-xl font-bold uppercase tracking-widest">X</span>
                        </a>
                    </div>

                    <p className="mt-12 text-white/40 uppercase tracking-widest text-sm text-center max-w-lg">
                        We make noise. We make memes. We ignore the charts.
                    </p>
                </div>
            </Reveal>
        </section>
    );
};

export default Community;
