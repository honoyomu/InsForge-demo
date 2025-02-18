import React from 'react';
import { BarChart3, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Link to="/chat" className="inline-block">
          <h1 className="text-5xl font-bold text-white mb-6 hover:text-blue-400 transition-colors">
            StockSage AI
          </h1>
        </Link>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Your intelligent companion for stock market analysis and insights
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Bot className="w-8 h-8 text-blue-400" />}
          title="AI-Powered Analysis"
          description="Get real-time insights and analysis from our advanced AI model"
        />
        <FeatureCard 
          icon={<BarChart3 className="w-8 h-8 text-blue-400" />}
          title="Market Trends"
          description="Stay updated with the latest market trends and patterns"
        />
        <FeatureCard 
          icon={<ArrowRight className="w-8 h-8 text-blue-400" />}
          title="Actionable Insights"
          description="Receive clear, actionable recommendations for your investment decisions"
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default LandingPage;