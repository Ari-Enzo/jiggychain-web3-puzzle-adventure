import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface Tile {
  id: string;
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
}
interface AppState {
  // Auth
  walletAddress: string | null;
  xHandle: string | null;
  isConnected: boolean;
  // Game
  tiles: Tile[];
  moves: number;
  matches: number;
  gameState: 'idle' | 'playing' | 'won';
  flippedIds: string[];
  // Actions
  connectWallet: () => void;
  loginX: () => void;
  logout: () => void;
  initGame: () => void;
  flipTile: (id: string) => void;
  resetGame: () => void;
}
const SYMBOLS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      walletAddress: null,
      xHandle: null,
      isConnected: false,
      tiles: [],
      moves: 0,
      matches: 0,
      gameState: 'idle',
      flippedIds: [],
      connectWallet: () => {
        set({ isConnected: true, walletAddress: '0x' + Math.random().toString(16).slice(2, 10) + '...' + Math.random().toString(16).slice(2, 6) });
      },
      loginX: () => {
        set({ isConnected: true, xHandle: '@JiggyGamer' + Math.floor(Math.random() * 100) });
      },
      logout: () => {
        set({ isConnected: false, walletAddress: null, xHandle: null });
      },
      initGame: () => {
        const doubledSymbols = [...SYMBOLS, ...SYMBOLS];
        const shuffled = doubledSymbols
          .sort(() => Math.random() - 0.5)
          .map((symbol, index) => ({
            id: index.toString(),
            symbol,
            isFlipped: false,
            isMatched: false,
          }));
        set({ 
          tiles: shuffled, 
          moves: 0, 
          matches: 0, 
          gameState: 'playing', 
          flippedIds: [] 
        });
      },
      flipTile: (id: string) => {
        const { tiles, flippedIds, moves, matches, gameState } = get();
        if (gameState !== 'playing' || flippedIds.length >= 2) return;
        const tile = tiles.find(t => t.id === id);
        if (!tile || tile.isFlipped || tile.isMatched) return;
        const newFlippedIds = [...flippedIds, id];
        const newTiles = tiles.map(t => t.id === id ? { ...t, isFlipped: true } : t);
        set({ tiles: newTiles, flippedIds: newFlippedIds });
        if (newFlippedIds.length === 2) {
          set({ moves: moves + 1 });
          const [id1, id2] = newFlippedIds;
          const tile1 = newTiles.find(t => t.id === id1);
          const tile2 = newTiles.find(t => t.id === id2);
          if (tile1?.symbol === tile2?.symbol) {
            setTimeout(() => {
              const matchedTiles = newTiles.map(t => 
                (t.id === id1 || t.id === id2) ? { ...t, isMatched: true } : t
              );
              const newMatchCount = matches + 1;
              set({ 
                tiles: matchedTiles, 
                flippedIds: [], 
                matches: newMatchCount,
                gameState: newMatchCount === SYMBOLS.length ? 'won' : 'playing'
              });
            }, 500);
          } else {
            setTimeout(() => {
              const unflippedTiles = get().tiles.map(t => 
                (t.id === id1 || t.id === id2) ? { ...t, isFlipped: false } : t
              );
              set({ tiles: unflippedTiles, flippedIds: [] });
            }, 1000);
          }
        }
      },
      resetGame: () => {
        get().initGame();
      }
    }),
    { name: 'jiggychain-storage' }
  )
);