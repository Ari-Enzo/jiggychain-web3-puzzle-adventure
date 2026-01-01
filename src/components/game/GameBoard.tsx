import React, { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { GameCard } from './GameCard';
import confetti from 'canvas-confetti';
export function GameBoard() {
  const tiles = useAppStore(s => s.tiles);
  const flipTile = useAppStore(s => s.flipTile);
  const gameState = useAppStore(s => s.gameState);
  const initGame = useAppStore(s => s.initGame);
  useEffect(() => {
    if (tiles.length === 0) {
      initGame();
    }
  }, [tiles.length, initGame]);
  useEffect(() => {
    if (gameState === 'won') {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FF69B4', '#4169E1']
      });
    }
  }, [gameState]);
  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto w-full p-4">
      {tiles.map((tile) => (
        <GameCard
          key={tile.id}
          symbol={tile.symbol}
          isFlipped={tile.isFlipped}
          isMatched={tile.isMatched}
          onClick={() => flipTile(tile.id)}
        />
      ))}
    </div>
  );
}