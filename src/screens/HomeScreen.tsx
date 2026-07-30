import React from 'react';
import { GAME_CONFIG } from '../config/gameConfig';
import { Button } from '../components/Button';

interface Props {
    onStart: () => void;
}

export const HomeScreen: React.FC<Props> = ({ onStart }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 animate-fade-in">
            {/* Logo animado */}
            <div className="relative">
                <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 animate-pulse-slow" />
                <div className="relative flex gap-2 sm:gap-4 mb-4 sm:mb-8 justify-center flex-wrap">
                    {['🎴', '🧠', '⚡'].map((emoji, i) => (
                        <div
                            key={i}
                            className="text-5xl sm:text-6xl md:text-7xl animate-bounce-slow"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        >
                            {emoji}
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center space-y-3 sm:space-y-4 px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl tracking-tight">
                    {GAME_CONFIG.texts.gameTitle}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-md mx-auto">
                    {GAME_CONFIG.texts.gameSubtitle}
                </p>
            </div>

            <Button
                onClick={onStart}
                gradient={GAME_CONFIG.colors.primary}
                size="lg"
                icon="🎮"
            >
                {GAME_CONFIG.texts.startButton}
            </Button>
        </div>
    );
};
