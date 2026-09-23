import React from 'react';
import { Button } from '../components/Button';
import type { GameConfig } from '../types/game.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';


interface Props {
    GAME_CONFIG: GameConfig
    onStart: () => void;
}

export const HomeScreen: React.FC<Props> = ({ GAME_CONFIG, onStart }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 animate-fade-in">
            {/* Logo animado */}
            <div className="relative">
                <div className="absolute inset-0 blur-3xl" />
                {/* <img src={GAME_CONFIG.logo} alt="" className='w-[50vw] min-w-100 mb-6' /> */}
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black drop-shadow-2xl tracking-tight">
                    {GAME_CONFIG.texts.gameTitle}
                </h1>
                <p className="text-base sm:text-lg md:text-xl max-w-md mx-auto">
                    {GAME_CONFIG.texts.gameSubtitle}
                </p>
            </div>

            <Button
                onClick={onStart}
                gradient={GAME_CONFIG.colors.primary}
                size="lg"
            >
                <FontAwesomeIcon icon={faGamepad} />
                {GAME_CONFIG.texts.startButton}
            </Button>
        </div>
    );
};
