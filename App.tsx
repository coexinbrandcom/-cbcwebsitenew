
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const StrategyPage = lazy(() => import('./pages/StrategyPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const CreativePage = lazy(() => import('./pages/CreativePage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const FounderPage = lazy(() => import('./pages/FounderPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#050505] selection:bg-cyan-500 selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="h-screen w-full flex items-center justify-center bg-[#050505]">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-cyan-500 font-space tracking-widest text-xs uppercase animate-pulse">Initializing System...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/strategy" element={<StrategyPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/creative" element={<CreativePage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/founder" element={<FounderPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;