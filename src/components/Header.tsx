import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn } from 'lucide-react';

function Header() {
  const location = useLocation();
  const isChat = location.pathname === '/chat';

  return (
    <header className="bg-gray-800/50 backdrop-blur-sm py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          StockSage AI
        </Link>
        
        {!isChat && (
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200">
            <LogIn className="w-4 h-4" />
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;