import type { DifficultyKey } from '../config/gameConfig';

export type Screen = 'home' | 'difficulty' | 'game' | 'feedback';

export type GamePhase = 'memorize' | 'playing' | 'finished';

export interface CardData {
    id: number;
    symbol: string;
    isFlipped: boolean;
    isMatched: boolean;
}

export interface GameResult {
    won: boolean;
    pairsFound: number;
    totalPairs: number;
    timeSpent: number;
}

export type { DifficultyKey };
