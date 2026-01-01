import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface GameCardProps {
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}
export function GameCard({ symbol, isFlipped, isMatched, onClick }: GameCardProps) {
  return (
    <div 
      className="perspective-1000 relative aspect-square w-full cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        className="relative h-full w-full preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped || isMatched ? 180 : 0 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Back of card */}
        <div className={cn(
          "absolute inset-0 backface-hidden flex items-center justify-center rounded-xl border-4 border-black bg-pop-pink shadow-hard-sm",
          isMatched && "opacity-0"
        )}>
          <span className="text-4xl text-white font-black">?</span>
        </div>
        {/* Front of card */}
        <div className={cn(
          "absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center rounded-xl border-4 border-black bg-white shadow-hard-sm",
          isMatched && "bg-pop-yellow"
        )}>
          <span className="text-5xl">{symbol}</span>
        </div>
      </motion.div>
    </div>
  );
}