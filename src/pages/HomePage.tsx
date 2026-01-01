import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { NeoButton } from '@/components/ui/neobrutalist-button';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Zap, Trophy, ShieldCheck } from 'lucide-react';
export function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-block bg-pop-yellow border-4 border-black rounded-full px-6 py-2 rotate-2 mb-4">
            <span className="text-black font-black flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> 100% WEB3 REWARDS
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            FLIP, MATCH, <br />
            <span className="text-pop-pink underline decoration-black decoration-8 underline-offset-8">WIN BIG!</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground font-bold">
            The world's first neobrutalist memory match adventure. Collect mascots, climb leaderboards, and mint your wins.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <NeoButton variant="primary" size="lg" onClick={() => navigate('/play')} className="w-full sm:w-auto">
              PLAY NOW!
            </NeoButton>
            <NeoButton variant="outline" size="lg" className="w-full sm:w-auto">
              HOW TO PLAY
            </NeoButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
            <div className="neo-container rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-pop-pink border-4 border-black w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-2">QUICK GAMEPLAY</h3>
              <p className="text-muted-foreground">Fast sessions designed for pro gamers and crypto enthusiasts alike.</p>
            </div>
            <div className="neo-container -rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-pop-yellow border-4 border-black w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="text-black" />
              </div>
              <h3 className="text-xl font-black mb-2">DAILY PRIZES</h3>
              <p className="text-muted-foreground">Top matchers get exclusive NFT drops and Jiggy Tokens (mock).</p>
            </div>
            <div className="neo-container rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-pop-blue border-4 border-black w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-2">SECURE LOGINS</h3>
              <p className="text-muted-foreground">Integrated with your favorite wallets and social platforms.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}