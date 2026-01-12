import React from 'react';
import { Reveal } from './Reveal';

// Dynamically import all PNG images from the gallery folder
const galleryImages = import.meta.glob('../assets/gallery/*.png', { eager: true, import: 'default' });
const images = Object.values(galleryImages) as string[];

const GalleryItem = ({ src, label }: { src?: string; label?: string }) => (
    <div className="group relative aspect-square border-2 border-white/20 hover:border-white transition-colors duration-300 overflow-hidden bg-zinc-900">
        {src ? (
            <img
                src={src}
                alt={label}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
        ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                <span className="text-6xl font-display text-white/10 group-hover:text-white/30">?</span>
            </div>
        )}

        {label && (
            <div className="absolute bottom-4 left-4 bg-black px-2 py-1 border border-white">
                <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
            </div>
        )}
    </div>
);

const Gallery: React.FC = () => {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <Reveal width="100%">
                <h2 className="text-4xl md:text-8xl mb-12 text-center uppercase tracking-tighter">Archive</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {images.length > 0 ? (
                        images.map((imgSrc, index) => (
                            <GalleryItem
                                key={index}
                                src={imgSrc}
                                label={`Specimen 0${index + 1}`}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 opacity-50">
                            No specimens found in archive.
                        </div>
                    )}
                </div>
            </Reveal>
        </section>
    );
};

export default Gallery;
