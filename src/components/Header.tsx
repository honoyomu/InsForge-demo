import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, LogOut, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { redirectToAuth } from '../utils/auth';

function Header() {
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const isChat = location.pathname === '/chat';

  const handleAuth = async () => {
    setLoading(true);
    if (isLoggedIn) {
      await logout();
    } else {
      redirectToAuth();
    }
    setLoading(false);
  };

  return (
    <header className="bg-gray-800/50 backdrop-blur-sm py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          StockSage AI
        </Link>
        
        {!isChat && (
          <button 
            onClick={handleAuth}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : isLoggedIn ? (
              <>
                <LogOut className="w-4 h-4" />
                Sign Out
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                Sign In
              </>
            )}
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;