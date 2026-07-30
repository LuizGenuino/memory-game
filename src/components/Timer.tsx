import React from 'react';
import { GAME_CONFIG } from '../config/gameConfig';

interface TimerProps {
    seconds: number;
    total: number;
    label?: string;
    variant?: 'memorize' | 'play';
}

export const Timer: React.FC<TimerProps> = ({ seconds, total, label, variant = 'play' }) => {
    const percent = Math.max(0, Math.min(100, (seconds / total) * 100));
    const isLow = seconds <= 10 && variant === 'play';

    const gradient =
        variant === 'memorize'
            ? 'from-amber-400 to-orange-500'
            : isLow
                ? 'from-red-500 to-rose-600'
                : 'from-emerald-400 to-teal-500';

    return (
        <div className="w-full max-w-md">
            <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-sm sm:text-base font-medium">
                    {label ?? GAME_CONFIG.texts.timeLeft}
                </span>
                <span
                    className={`
            font-bold tabular-nums text-lg sm:text-2xl
            ${isLow ? 'text-red-400 animate-pulse' : 'text-white'}
          `}
                >
                    {seconds}s
                </span>
            </div>
            <div className="h-2 sm:h-3 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
                <div
                    className={`h-full bg-gradient-to-r ${gradient} transition-all duration-1000 ease-linear rounded-full shadow-lg`}
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
};
