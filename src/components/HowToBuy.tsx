import React from 'react';

const Step = ({ number, text }: { number: string; text: string }) => (
    <div className="flex-1 flex flex-col items-center gap-4 group">
        <div className="text-8xl md:text-[10rem] font-display leading-none text-transparent group-hover:text-white transition-all duration-300" style={{ WebkitTextStroke: '2px white' }}>
            {number}
        </div>
        <div className="text-2xl md:text-3xl font-bold uppercase tracking-widest bg-white text-black px-4 py-1">
            {text}
        </div>
    </div>
);

const HowToBuy: React.FC = () => {
    return (
        <section className="py-32 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-4 text-center">
                <Step number="01" text="Wallet" />
                <Step number="02" text="Swap" />
                <Step number="03" text="Done" />
            </div>
        </section>
    );
};

export default HowToBuy;
