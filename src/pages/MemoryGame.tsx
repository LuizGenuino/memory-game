import React, { useState } from 'react';
import type { Screen, GameResult } from '../types/game.types';
import { HomeScreen } from '../screens/HomeScreen';
import { DifficultyScreen } from '../screens/DifficultyScreen';
import { GameScreen } from '../screens/GameScreen';
import { FeedbackScreen } from '../screens/FeedbackScreen';
import { useParams } from 'react-router';
import { getGameBySlug } from '../games';
import { Footer } from '../components/Footer';
import NotFound from './NotFoundPage';


const MemoryGame: React.FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const GAME_CONFIG = getGameBySlug(slug)

    if (!GAME_CONFIG) {
        return <NotFound />
    }


    type DifficultyKey = keyof typeof GAME_CONFIG.difficulties;


    const [screen, setScreen] = useState<Screen>('home');
    const [difficulty, setDifficulty] = useState<DifficultyKey>('easy');
    const [result, setResult] = useState<GameResult | null>(null);


    return (
        <div
            className={`
                h-full
                min-h-screen
                w-full
                bg-linear-to-br ${GAME_CONFIG.colors.bgGradient}
                relative 
                flex flex-col items-center justify-between
                p-4 sm:p-6
            `}
        >
            <div></div>
            {/* Bolhas decorativas de fundo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/60 rounded-full blur-3xl opacity-20 animate-blob" />
                <div className="absolute top-1/3 -right-40 w-96 h-96 bg-red-500/60 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-500/60 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />
            </div>

            <img src={GAME_CONFIG.logo} alt="" className='h-[70vw] max-h-75' />
            <div className="relative z-10 w-full flex items-center justify-center">

                {screen === 'home' && <HomeScreen GAME_CONFIG={GAME_CONFIG} onStart={() => setScreen('difficulty')} />}
                {screen === 'difficulty' && (
                    <DifficultyScreen GAME_CONFIG={GAME_CONFIG} difficulty={difficulty}
                        onSelect={(d) => {
                            setDifficulty(d);
                            setScreen('game');
                        }}
                        onBack={() => setScreen('home')}
                    />
                )}
                {screen === 'game' && (
                    <GameScreen GAME_CONFIG={GAME_CONFIG}
                        key={difficulty + Date.now()} // reinicia estado
                        difficulty={difficulty}
                        onFinish={(r) => {
                            setResult(r);
                            setScreen('feedback');
                        }}
                        onExit={() => setScreen('home')}
                    />
                )}
                {screen === 'feedback' && result && (
                    <FeedbackScreen GAME_CONFIG={GAME_CONFIG}
                        result={result}
                        onPlayAgain={() => setScreen('difficulty')}
                        onExit={() => setScreen('home')}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MemoryGame;
