import { useCallback, useEffect, useMemo, useState } from 'react';
import { GAME_CONFIG, type DifficultyKey } from '../config/gameConfig';
import type { CardData, GamePhase } from '../types/game.types';

const shuffle = <T,>(arr: T[]): T[] => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

export const useMemoryGame = (difficulty: DifficultyKey) => {
    const config = GAME_CONFIG.difficulties[difficulty];

    const [cards, setCards] = useState<CardData[]>([]);
    const [selected, setSelected] = useState<number[]>([]);
    const [phase, setPhase] = useState<GamePhase>(
        config.memorizeTime > 0 ? 'memorize' : 'playing'
    );
    const [locked, setLocked] = useState(false);

    // Criar cartas embaralhadas
    useEffect(() => {
        const symbols = GAME_CONFIG.cardSymbols.slice(0, config.pairs);
        const deck: CardData[] = shuffle(
            [...symbols, ...symbols].map((symbol, i) => ({
                id: i,
                symbol,
                isFlipped: config.memorizeTime > 0, // reveladas se houver tempo de memorização
                isMatched: false,
            }))
        );
        setCards(deck);
        setPhase(config.memorizeTime > 0 ? 'memorize' : 'playing');
    }, [difficulty, config.pairs, config.memorizeTime]);

    // Ao final da memorização, esconder cartas
    const startPlaying = useCallback(() => {
        setCards((prev) => prev.map((c) => ({ ...c, isFlipped: false })));
        setPhase('playing');
    }, []);

    const flipCard = useCallback(
        (id: number) => {
            if (locked || phase !== 'playing') return;
            setCards((prev) => {
                const card = prev.find((c) => c.id === id);
                if (!card || card.isFlipped || card.isMatched) return prev;
                return prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c));
            });
            setSelected((prev) => [...prev, id]);
        },
        [locked, phase]
    );

    // Verifica pares
    useEffect(() => {
        if (selected.length !== 2) return;
        setLocked(true);
        const [a, b] = selected;
        const cardA = cards.find((c) => c.id === a);
        const cardB = cards.find((c) => c.id === b);

        if (cardA && cardB && cardA.symbol === cardB.symbol) {
            setTimeout(() => {
                setCards((prev) =>
                    prev.map((c) =>
                        c.id === a || c.id === b ? { ...c, isMatched: true } : c
                    )
                );
                setSelected([]);
                setLocked(false);
            }, 500);
        } else {
            setTimeout(() => {
                setCards((prev) =>
                    prev.map((c) =>
                        c.id === a || c.id === b ? { ...c, isFlipped: false } : c
                    )
                );
                setSelected([]);
                setLocked(false);
            }, GAME_CONFIG.animations.mismatchDelay);
        }
    }, [selected, cards]);

    const pairsFound = useMemo(
        () => cards.filter((c) => c.isMatched).length / 2,
        [cards]
    );

    const isComplete = pairsFound === config.pairs && cards.length > 0;

    return {
        cards,
        phase,
        pairsFound,
        totalPairs: config.pairs,
        gridCols: config.gridCols,
        isComplete,
        flipCard,
        startPlaying,
        setPhase,
    };
};
