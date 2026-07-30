import React from 'react';
import { GAME_CONFIG, type DifficultyKey } from '../config/gameConfig';

interface Props {
    onSelect: (difficulty: DifficultyKey) => void;
    onBack: () => void;
}

export const DifficultyScreen: React.FC<Props> = ({ onSelect, onBack }) => {
    const difficulties = Object.entries(GAME_CONFIG.difficulties) as [
        DifficultyKey,
        typeof GAME_CONFIG.difficulties.easy
    ][];

    return (
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-10 w-full max-w-4xl animate-fade-in px-4">
            <img src={GAME_CONFIG.logo} alt="" className='w-[50vw] min-w-100' />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center drop-shadow-lg">
                {GAME_CONFIG.texts.difficultyTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
                {difficulties.map(([key, cfg], i) => (
                    <button
                        key={key}
                        onClick={() => onSelect(key)}
                        style={{ animationDelay: `${i * 0.1}s` }}
                        className={`
                            group relative overflow-hidden
                            bg-gradient-to-br ${cfg.color}
                            rounded-3xl p-6 sm:p-8
                            shadow-xl shadow-black/30
                            border-2 border-white/20
                            transition-all duration-300
                            hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                            active:scale-95
                            animate-slide-up
                        `}
                    >
                        <div className="absolute -top-6 -right-6 text-8xl opacity-20 group-hover:opacity-40 group-hover:rotate-12 transition-all duration-500">
                            {cfg.icon}
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
                            <div className="text-5xl sm:text-6xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                                {cfg.icon}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black drop-shadow-md">
                                {cfg.label}
                            </h3>
                            <div className=" text-xs sm:text-sm space-y-1 text-center">
                                <div>🎴 {cfg.pairs * 2} cartas</div>
                                {cfg.memorizeTime > 0 && <div>👁️ {cfg.memorizeTime}s memorização</div>}
                                <div>⏱️ {cfg.playTime}s de jogo</div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            <button
                onClick={onBack}
                className=" transition-colors text-sm sm:text-base underline underline-offset-4"
            >
                ← Voltar
            </button>
        </div>
    );
};
