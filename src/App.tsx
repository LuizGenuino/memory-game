import React, { useState } from 'react';
import { GAME_CONFIG, type DifficultyKey } from './config/gameConfig';
import type { Screen, GameResult } from './types/game.types';
import { HomeScreen } from './screens/HomeScreen';
import { DifficultyScreen } from './screens/DifficultyScreen';
import { GameScreen } from './screens/GameScreen';
import { FeedbackScreen } from './screens/FeedbackScreen';

const App: React.FC = () => {
    const [screen, setScreen] = useState<Screen>('home');
    const [difficulty, setDifficulty] = useState<DifficultyKey>('easy');
    const [result, setResult] = useState<GameResult | null>(null);

    return (
        <div
            className={`
        min-h-screen w-full
        bg-gradient-to-br ${GAME_CONFIG.colors.bgGradient}
        relative overflow-hidden
        flex items-center justify-center
        p-4 sm:p-6 md:p-8
      `}
        >
            {/* Bolhas decorativas de fundo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-blob" />
                <div className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 w-full flex items-center justify-center">
                {screen === 'home' && <HomeScreen onStart={() => setScreen('difficulty')} />}
                {screen === 'difficulty' && (
                    <DifficultyScreen
                        onSelect={(d) => {
                            setDifficulty(d);
                            setScreen('game');
                        }}
                        onBack={() => setScreen('home')}
                    />
                )}
                {screen === 'game' && (
                    <GameScreen
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
                    <FeedbackScreen
                        result={result}
                        onPlayAgain={() => setScreen('difficulty')}
                        onExit={() => setScreen('home')}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
