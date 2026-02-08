
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Watch from './pages/Watch';
import { MOCK_VIDEOS } from './constants';
import { Video } from './types';
import { searchVideos } from './services/geminiService';

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'watch'>('home');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videos, setVideos] = useState<Video[]>(MOCK_VIDEOS);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  // Simple hash-based routing logic
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/watch/')) {
        const id = hash.replace('#/watch/', '');
        const video = videos.find(v => v.id === id);
        if (video) {
          setSelectedVideo(video);
          setCurrentView('watch');
          window.scrollTo(0, 0);
        } else {
          // If video not found in current list, just go home
          setCurrentView('home');
        }
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [videos]);

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setVideos(MOCK_VIDEOS);
      setCurrentView('home');
      window.location.hash = '#/';
      return;
    }

    setLoading(true);
    setCurrentView('home');
    window.location.hash = '#/';
    
    const results = await searchVideos(query);
    if (results.length > 0) {
      setVideos(results);
    } else {
      // Fallback to local filtering if Gemini fails
      const filtered = MOCK_VIDEOS.filter(v => 
        v.title.toLowerCase().includes(query.toLowerCase()) || 
        v.channelName.toLowerCase().includes(query.toLowerCase())
      );
      setVideos(filtered);
    }
    setLoading(false);
  }, []);

  const handleVideoClick = (id: string) => {
    window.location.hash = `#/watch/${id}`;
  };

  const handleMenuToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    if (id === 'all') {
      setVideos(MOCK_VIDEOS);
    } else {
      // Logic for filtering by category would go here
      // For now we just show a shuffle to simulate different content
      setVideos([...MOCK_VIDEOS].sort(() => Math.random() - 0.5));
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      <Header onSearch={handleSearch} onMenuToggle={handleMenuToggle} />
      
      <div className="flex-1 flex pt-14">
        {/* Only show sidebar on Home or if specifically requested on Watch */}
        <div className={`${currentView === 'home' ? 'block' : 'hidden md:block'}`}>
          <Sidebar isCollapsed={isSidebarCollapsed || currentView === 'watch'} />
        </div>

        <main className={`flex-1 transition-all duration-300 ${
          currentView === 'watch' 
            ? 'w-full' 
            : (isSidebarCollapsed ? 'ml-[72px]' : 'ml-0 md:ml-60')
        }`}>
          {currentView === 'home' ? (
            <Home 
              videos={videos} 
              selectedCategory={selectedCategory} 
              onCategorySelect={handleCategorySelect}
              onVideoClick={handleVideoClick}
              loading={loading}
            />
          ) : (
            selectedVideo && (
              <Watch 
                video={selectedVideo} 
                relatedVideos={videos.filter(v => v.id !== selectedVideo.id)}
                onVideoClick={handleVideoClick}
              />
            )
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
