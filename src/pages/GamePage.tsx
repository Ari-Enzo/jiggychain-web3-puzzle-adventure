import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { GameBoard } from '@/components/game/GameBoard';
import { useAppStore } from '@/store/useAppStore';
import { NeoButton } from '@/components/ui/neobrutalist-button';
import { RefreshCcw, ArrowLeft, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function GamePage() {
  const moves = useAppStore(s => s.moves);
  const matches = useAppStore(s => s.matches);
  const gameState = useAppStore(s => s.gameState);
  const resetGame = useAppStore(s => s.resetGame);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-10 max-w-2xl">
          <NeoButton variant="outline" size="sm" onClick={() => navigate('/')} className="px-3">
            <ArrowLeft className="w-5 h-5" />
          </NeoButton>
          <div className="flex gap-4">
            <div className="neo-container py-2 px-6 flex items-center gap-2">
              <span className="text-muted-foreground uppercase text-xs">Moves</span>
              <span className="text-2xl font-black">{moves}</span>
            </div>
            <div className="neo-container py-2 px-6 flex items-center gap-2 border-pop-yellow">
              <span className="text-muted-foreground uppercase text-xs">Matches</span>
              <span className="text-2xl font-black">{matches}</span>
            </div>
          </div>
          <NeoButton variant="accent" size="sm" onClick={resetGame} className="px-3">
            <RefreshCcw className="w-5 h-5" />
          </NeoButton>
        </div>
        {gameState === 'won' && (
          <div className="neo-container bg-pop-yellow mb-8 animate-bounce text-center max-w-2xl w-full">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Trophy className="w-8 h-8" />
              <h2 className="text-3xl font-black italic">YOU WON!</h2>
              <Trophy className="w-8 h-8" />
            </div>
            <p className="font-bold">Total Moves: {moves} | Reward: 50 JIGGY (MOCK)</p>
            <div className="mt-4 flex gap-4 justify-center">
              <NeoButton onClick={resetGame} size="md">PLAY AGAIN</NeoButton>
              <NeoButton variant="secondary" onClick={() => alert("Mock Minting Transaction Sent!")} size="md">MINT NFT</NeoButton>
            </div>
          </div>
        )}
        <GameBoard />
      </main>
      <footer className="py-6 text-center text-sm font-bold text-muted-foreground uppercase tracking-widest">
        Playing on JiggyChain Testnet
      </footer>
    </div>
  );
}