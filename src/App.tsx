import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatInterface from './components/ChatInterface';
import LandingPage from './components/LandingPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chat" element={<ChatInterface onBack={() => window.history.back()} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;