
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


export type GameTexts = {
    gameTitle: string
    gameSubtitle: string
    startButton: string
    difficultyTitle: string
    easy: string
    medium: string
    hard: string
    memorize: string
    playing: string
    victory: string
    defeat: string
    victoryMessage: string
    defeatMessage: string
    playAgain: string
    exit: string
    timeLeft: string
    pairsFound: string
}

export type GameColors = {
    bgGradient: string
    cardBack: string
    cardFront: string
    primary: string
    secondary: string
    warning: string
    danger: string
    textPrimary: string
    textSecondary: string
}

export type GameDifficulty = {
    label: string
    pairs: number
    gridCols: number
    memorizeTime: number
    playTime: number
    color: string
    icon: string
}

export type GameDifficulties = {
    easy: GameDifficulty
    medium: GameDifficulty
    hard: GameDifficulty
}

export type GameAnimations = {
    flipDuration: number
    mismatchDelay: number
}

export type GameConfig = {
    slug: string
    logo: string // ou o tipo correto da sua imagem
    texts: GameTexts
    colors: GameColors
    cardSymbols: string[] // ou o tipo correto das imagens
    difficulties: GameDifficulties
    animations: GameAnimations
}