import React from 'react';
import { GAME_CONFIG } from '../config/gameConfig';
import type { CardData } from '../types/game.types';

interface CardProps {
    card: CardData;
    onClick: (id: number) => void;
    disabled?: boolean;
}

export const Card: React.FC<CardProps> = ({ card, onClick, disabled }) => {
    const showFace = card.isFlipped || card.isMatched;

    return (
        <button
            onClick={() => !disabled && onClick(card.id)}
            disabled={disabled || card.isMatched}
            className={`
        relative aspect-square w-full
        [perspective:1000px]
        group
        transition-transform duration-200
        ${!disabled && !card.isMatched ? 'hover:scale-105 active:scale-95' : ''}
        ${card.isMatched ? 'cursor-default' : 'cursor-pointer'}
      `}
            aria-label={showFace ? `Carta ${card.symbol}` : 'Carta virada'}
        >
            <div
                className={`
          relative w-full h-full
          transition-transform duration-[600ms]
          [transform-style:preserve-3d]
          ${showFace ? '[transform:rotateY(180deg)]' : ''}
        `}
            >
                {/* Verso */}
                <div
                    className={`
            absolute inset-0 rounded-xl md:rounded-2xl
            bg-gradient-to-br ${GAME_CONFIG.colors.cardBack}
            shadow-lg
            [backface-visibility:hidden]
            flex items-center justify-center
            border-2 border-white/20
          `}
                >
                    <div className="text-white/40 text-2xl sm:text-3xl md:text-4xl font-bold animate-pulse">
                        ?
                    </div>
                </div>

                {/* Frente */}
                <div
                    className={`
            absolute inset-0 rounded-xl md:rounded-2xl
            bg-gradient-to-br ${GAME_CONFIG.colors.cardFront}
            shadow-lg
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
            flex items-center justify-center
            border-2
            ${card.isMatched ? 'border-emerald-400 ring-2 sm:ring-4 ring-emerald-300/50 animate-pulse-slow' : 'border-white/40'}
          `}
                >
                    <span
                        className={`
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              transition-transform duration-300
              ${card.isMatched ? 'scale-110' : ''}
            `}
                    >
                        {card.symbol}
                    </span>
                </div>
            </div>
        </button>
    );
};
