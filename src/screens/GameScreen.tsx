import React, { useEffect } from 'react';
import { GAME_CONFIG, type DifficultyKey } from '../config/gameConfig';
import { useMemoryGame } from '../hooks/useMemoryGame';
import { useTimer } from '../hooks/useTimer';
import { Card } from '../components/Card';
import { Timer } from '../components/Timer';
import { type GameResult } from '../types/game.types';

interface Props {
    difficulty: DifficultyKey;
    onFinish: (result: GameResult) => void;
    onExit: () => void;
}

export const GameScreen: React.FC<Props> = ({ difficulty, onFinish, onExit }) => {
    const cfg = GAME_CONFIG.difficulties[difficulty];
    const {
        cards,
        phase,
        pairsFound,
        totalPairs,
        gridCols,
        isComplete,
        flipCard,
        startPlaying,
    } = useMemoryGame(difficulty);

    // Timer de memorização
    const memorizeTimer = useTimer({
        initialSeconds: cfg.memorizeTime,
        isRunning: phase === 'memorize',
        onComplete: startPlaying,
    });

    // Timer de jogo
    const playTimer = useTimer({
        initialSeconds: cfg.playTime,
        isRunning: phase === 'playing' && !isComplete,
        onComplete: () =>
            onFinish({
                won: false,
                pairsFound,
                totalPairs,
                timeSpent: cfg.playTime,
            }),
    });

    // Vitória
    useEffect(() => {
        if (isComplete && phase === 'playing') {
            const timeSpent = cfg.playTime - playTimer.seconds;
            setTimeout(() => {
                onFinish({
                    won: true,
                    pairsFound: totalPairs,
                    totalPairs,
                    timeSpent,
                });
            }, 800);
        }
    }, [isComplete, phase, playTimer.seconds, cfg.playTime, totalPairs, onFinish]);

    const gridColsClass: Record<number, string> = {
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
    };

    return (
        <div className="flex flex-col items-center gap-4 sm:gap-4 w-full max-w-4xl mx-auto px-3 sm:px-4 py-2 animate-fade-in">
            <img src={GAME_CONFIG.logo} alt="" className='w-[40vw] min-w-100' />
            {/* Header */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-3">
                <button
                    onClick={onExit}
                    className=" transition-colors text-sm underline underline-offset-4 order-2 sm:order-1"
                >
                    ← Sair
                </button>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 order-1 sm:order-2">
                    <span className=" font-bold text-sm sm:text-base">
                        {GAME_CONFIG.texts.pairsFound}: {pairsFound}/{totalPairs}
                    </span>
                </div>
            </div>

            {/* Status / Timer */}
            <div className="w-full flex flex-col items-center gap-2">
                {phase === 'memorize' ? (
                    <>
                        <div className="text-lg sm:text-2xl font-bold text-amber-300 animate-pulse">
                            👁️ {GAME_CONFIG.texts.memorize}
                        </div>
                        <Timer
                            seconds={memorizeTimer.seconds}
                            total={cfg.memorizeTime}
                            variant="memorize"
                            label="Memorização"
                        />
                    </>
                ) : (
                    <>
                        <div className="text-lg sm:text-2xl font-bold ">
                            🎯 {GAME_CONFIG.texts.playing}
                        </div>
                        <Timer seconds={playTimer.seconds} total={cfg.playTime} variant="play" />
                    </>
                )}
            </div>

            {/* Grid de cartas */}
            <div
                className={`
          grid ${gridColsClass[gridCols] ?? 'grid-cols-4'}
          gap-2 sm:gap-3 md:gap-4
          w-full max-w-2xl
          animate-slide-up
        `}
            >
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        onClick={flipCard}
                        disabled={phase !== 'playing'}
                    />
                ))}
            </div>
        </div>
    );
};
