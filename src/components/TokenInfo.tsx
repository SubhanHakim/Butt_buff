import React from 'react';
import { Reveal } from './Reveal';

const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-white py-8 hover:bg-white/5 transition-colors px-4">
        <span className="text-xl md:text-3xl font-bold opacity-50 uppercase tracking-widest">{label}</span>
        <span className="text-4xl md:text-6xl font-display uppercase">{value}</span>
    </div>
);

const TokenInfo: React.FC = () => {
    return (
        <section className="py-32 bg-zinc-950 border-y-2 border-white">
            <Reveal width="100%">
                <div className="max-w-5xl mx-auto">
                    <InfoRow label="Name" value="Butt Puff" />
                    <InfoRow label="Ticker" value="$BUTTPUFF" />
                    <InfoRow label="Chain" value="Solana" />
                    <InfoRow label="Supply" value="1,000,000,000" />
                </div>
            </Reveal>
        </section>
    );
};

export default TokenInfo;
