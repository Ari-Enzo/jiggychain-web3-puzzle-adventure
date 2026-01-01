import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import { NeoButton } from '@/components/ui/neobrutalist-button';
import { Wallet, Twitter, LogOut, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Navbar() {
  const isConnected = useAppStore(s => s.isConnected);
  const walletAddress = useAppStore(s => s.walletAddress);
  const xHandle = useAppStore(s => s.xHandle);
  const connectWallet = useAppStore(s => s.connectWallet);
  const loginX = useAppStore(s => s.loginX);
  const logout = useAppStore(s => s.logout);
  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-black bg-white px-4 py-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-pop-yellow border-4 border-black p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter">JIGGY<span className="text-pop-pink">CHAIN</span></span>
        </Link>
        <div className="flex items-center gap-3">
          {!isConnected ? (
            <>
              <NeoButton onClick={connectWallet} variant="primary" size="sm" className="hidden sm:flex gap-2">
                <Wallet className="w-4 h-4" /> Connect
              </NeoButton>
              <NeoButton onClick={loginX} variant="outline" size="sm" className="flex gap-2">
                <Twitter className="w-4 h-4" /> Login
              </NeoButton>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-xs text-muted-foreground">Logged in as</span>
                <span className="text-sm font-bold">{xHandle || walletAddress}</span>
              </div>
              <NeoButton onClick={logout} variant="outline" size="sm" className="p-2">
                <LogOut className="w-4 h-4" />
              </NeoButton>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}