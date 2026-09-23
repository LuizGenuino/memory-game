// ============================================
// 🎨 CONFIGURAÇÃO CENTRAL DO JOGO
// Edite este arquivo para personalizar cores,
// textos, imagens, tempos e dificuldades.
// ============================================

import LogoImg from '../assets/seeg/logo.webp'

import Img1 from '../assets/seeg/img-1.webp'
import Img2 from '../assets/seeg/img-2.webp'
import Img3 from '../assets/seeg/img-3.webp'
import Img4 from '../assets/seeg/img-4.webp'
import Img5 from '../assets/seeg/img-5.webp'
import Img6 from '../assets/seeg/img-6.webp'
import Img7 from '../assets/seeg/img-7.webp'
import Img8 from '../assets/seeg/img-8.webp'
import Img9 from '../assets/seeg/img-9.webp'
import Img10 from '../assets/seeg/img-10.webp'
import type { GameConfig } from '../types/game.types'


export const SEEG_CONFIG: GameConfig = {
    // 🎯 Título e textos gerais
    slug: 'seeg',
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
        bgGradient: 'from-slate-200 via-gray-300 to-blue-200',
        cardBack: 'from-slate-200 via-slate-300 to-blue-200',
        cardFront: 'from-white to-slate-50',
        primary: 'from-blue-900 to-slate-900',
        secondary: 'from-yellow-400 to-amber-500',
        warning: 'from-orange-400 to-orange-500',
        danger: 'from-red-500 to-rose-600',
        textPrimary: 'text-slate-800',
        textSecondary: 'text-slate-600',
    },
    cardSymbols: [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10],

    // ⏱️ Configurações de dificuldade
    difficulties: {
        easy: {
            label: 'Fácil',
            pairs: 10,           // 6 pares = 12 cartas
            gridCols: 4,        // 4 colunas
            memorizeTime: 10,   // segundos para memorizar
            playTime: 60,       // segundos para jogar
            color: 'from-emerald-500 to-teal-600',
            icon: '✅',
        },
        medium: {
            label: 'Médio',
            pairs: 10,           // 8 pares = 16 cartas
            gridCols: 4,
            memorizeTime: 5,
            playTime: 45,
            color: 'from-amber-500 to-orange-600',
            icon: '‼️',
        },
        hard: {
            label: 'Difícil',
            pairs: 10,          // 10 pares = 20 cartas
            gridCols: 4,
            memorizeTime: 0,    // sem tempo de memorização
            playTime: 45,
            color: 'from-red-500 to-rose-600',
            icon: '🔥',
        },
    },

    // ⚡ Configurações de animação
    animations: {
        flipDuration: 600,      // ms — duração do flip
        mismatchDelay: 800,    // ms — tempo antes de virar cartas erradas
    },
} as const;
