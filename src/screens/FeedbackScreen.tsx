import React, { useEffect, useState } from 'react';
import { GAME_CONFIG } from '../config/gameConfig';
import { type GameResult } from '../types/game.types';
import { Button } from '../components/Button';

interface Props {
    result: GameResult;
    onPlayAgain: () => void;
    onExit: () => void;
}

export const FeedbackScreen: React.FC<Props> = ({ result, onPlayAgain, onExit }) => {
    const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; emoji: string }>>([]);

    useEffect(() => {
        if (result.won) {
            const emojis = ['🎉', '⭐', '✨', '🎊', '💫'];
            setConfetti(
                Array.from({ length: 30 }, (_, i) => ({
                    id: i,
                    left: Math.random() * 100,
                    delay: Math.random() * 2,
                    emoji: emojis[Math.floor(Math.random() * emojis.length)],
                }))
            );
        }
    }, [result.won]);

    return (
        <div className="relative flex flex-col items-center justify-center gap-6 sm:gap-10 w-full max-w-2xl animate-fade-in px-4">
            {/* Confetti */}
            {result.won &&
                confetti.map((c) => (
                    <div
                        key={c.id}
                        className="absolute top-0 text-3xl sm:text-4xl pointer-events-none animate-confetti"
                        style={{
                            left: `${c.left}%`,
                            animationDelay: `${c.delay}s`,
                        }}
                    >
                        {c.emoji}
                    </div>
                ))}

            <div className="relative">
                <div
                    className={`
            absolute inset-0 blur-3xl opacity-40 animate-pulse-slow
            ${result.won ? 'bg-emerald-400' : 'bg-rose-500'}
          `}
                />
                <div className="relative text-7xl sm:text-8xl md:text-9xl animate-bounce-slow">
                    {result.won ? '🏆' : '💔'}
                </div>
            </div>

            <div className="text-center space-y-2 sm:space-y-3">
                <h2
                    className={`
            text-4xl sm:text-5xl md:text-6xl font-black drop-shadow-2xl
            ${result.won ? 'text-emerald-300' : 'text-rose-300'}
          `}
                >
                    {result.won ? GAME_CONFIG.texts.victory : GAME_CONFIG.texts.defeat}
                </h2>
                <p className="text-white/80 text-base sm:text-lg md:text-xl">
                    {result.won ? GAME_CONFIG.texts.victoryMessage : GAME_CONFIG.texts.defeatMessage}
                </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 w-full max-w-sm">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                    <div>
                        <div className="text-white/60 text-xs sm:text-sm">Pares</div>
                        <div className="text-white text-xl sm:text-2xl font-bold">
                            {result.pairsFound}/{result.totalPairs}
                        </div>
                    </div>
                    <div>
                        <div className="text-white/60 text-xs sm:text-sm">Tempo</div>
                        <div className="text-white text-xl sm:text-2xl font-bold">
                            {result.timeSpent}s
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
                <Button
                    onClick={onPlayAgain}
                    gradient={GAME_CONFIG.colors.primary}
                    size="md"
                    icon="🔄"
                    fullWidth
                >
                    {GAME_CONFIG.texts.playAgain}
                </Button>
                <Button
                    onClick={onExit}
                    gradient={GAME_CONFIG.colors.danger}
                    size="md"
                    icon="🚪"
                    fullWidth
                >
                    {GAME_CONFIG.texts.exit}
                </Button>
            </div>
        </div>
    );
};
