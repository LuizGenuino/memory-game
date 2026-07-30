// ============================================
// 🎨 CONFIGURAÇÃO CENTRAL DO JOGO
// Edite este arquivo para personalizar cores,
// textos, imagens, tempos e dificuldades.
// ============================================

import LogoImg from '../assets/logo.png'

export const GAME_CONFIG = {
    // 🎯 Título e textos gerais
    logo: LogoImg,
    texts: {
        gameTitle: 'Jogo da Memória',
        gameSubtitle: 'Teste sua memória e agilidade!',
        startButton: 'Iniciar Jogo',
        difficultyTitle: 'Escolha a Dificuldade',
        easy: 'Fácil',
        medium: 'Médio',
        hard: 'Difícil',
        memorize: 'Memorize as cartas!',
        playing: 'Encontre os pares!',
        victory: 'Vitória! 🎉',
        defeat: 'Que pena! 😢',
        victoryMessage: 'Você encontrou todos os pares!',
        defeatMessage: 'O tempo acabou. Tente novamente!',
        playAgain: 'Jogar Novamente',
        exit: 'Sair',
        timeLeft: 'Tempo',
        pairsFound: 'Pares',
    },

    // 🎨 Paleta de cores (Tailwind classes)
    colors: {
        bgGradient: 'from-slate-50 via-teal-50/40 to-emerald-50/60',
        cardBack: 'from-indigo-500 to-purple-600',
        cardFront: 'from-white to-slate-100',
        primary: 'from-emerald-500 to-teal-600',
        secondary: 'from-rose-500 to-pink-600',
        warning: 'from-amber-500 to-orange-600',
        danger: 'from-red-500 to-rose-600',
        textPrimary: 'text-black',
        textSecondary: 'text-slate-200',
    },

    // 🖼️ Símbolos/emojis das cartas (troque por URLs de imagens se preferir)
    cardSymbols: ['🐶', '🐱', '🦊', '🐼', '🦁', '🐨', '🐯', '🐸', '🦄', '🐵', '🐷', '🐻'],

    // ⏱️ Configurações de dificuldade
    difficulties: {
        easy: {
            label: 'Fácil',
            pairs: 5,           // 6 pares = 12 cartas
            gridCols: 4,        // 4 colunas
            memorizeTime: 10,   // segundos para memorizar
            playTime: 45,       // segundos para jogar
            color: 'from-emerald-500 to-teal-600',
            icon: '😊',
        },
        medium: {
            label: 'Médio',
            pairs: 5,           // 8 pares = 16 cartas
            gridCols: 4,
            memorizeTime: 5,
            playTime: 45,
            color: 'from-amber-500 to-orange-600',
            icon: '🤔',
        },
        hard: {
            label: 'Difícil',
            pairs: 5,          // 10 pares = 20 cartas
            gridCols: 5,
            memorizeTime: 0,    // sem tempo de memorização
            playTime: 45,
            color: 'from-red-500 to-rose-600',
            icon: '🔥',
        },
    },

    // ⚡ Configurações de animação
    animations: {
        flipDuration: 600,      // ms — duração do flip
        mismatchDelay: 1000,    // ms — tempo antes de virar cartas erradas
    },
} as const;

export type DifficultyKey = keyof typeof GAME_CONFIG.difficulties;
