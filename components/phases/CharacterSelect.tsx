
import React from 'react';
import { Character } from '../../types';
import { audioManager } from '../../utils/audio';
import { ArrowLeft } from 'lucide-react';

interface Props {
    characters: Character[];
    onSelect: (char: Character) => void;
    onBack: () => void;
}

export const CharacterSelect: React.FC<Props> = ({ characters, onSelect, onBack }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 stage-stray animate-in select-none">
            {/* Back Button */}
            <button 
                onClick={onBack}
                className="absolute top-4 left-4 z-50 bg-white border-2 border-black px-3 py-1.5 font-black text-xs hover:bg-stone-100 flex items-center gap-2 shadow-[2px_2px_0px_0px_black] active:translate-y-0.5 transition-all uppercase"
            >
                <ArrowLeft size={14} strokeWidth={3} /> 返回标题
            </button>

            <h1 className="text-3xl md:text-5xl font-black mb-8 uppercase italic text-white drop-shadow-[4px_4px_0px_black] relative z-10">
                谁在书写传奇?
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full relative z-10">
                {characters.map(char => (
                    <button 
                        key={char.id} 
                        disabled={char.locked} 
                        onClick={() => { audioManager.playClick(); onSelect(char); }} 
                        className={`bg-white border-[6px] border-black p-6 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left active:translate-y-0.5 group ${char.locked ? 'opacity-60 grayscale cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-black mb-4 group-hover:rotate-6 transition-transform">
                            <img src={char.avatar} className="w-full h-full object-cover" alt={char.name} />
                        </div>
                        <h3 className="text-2xl font-black">{char.name}</h3>
                        <p className="font-bold text-stone-500 mt-2 text-sm leading-snug">{char.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};
