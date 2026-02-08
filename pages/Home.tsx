
import React from 'react';
import VideoCard from '../components/VideoCard';
import CategoryChips from '../components/CategoryChips';
import { Video } from '../types';

interface HomeProps {
  videos: Video[];
  selectedCategory: string;
  onCategorySelect: (id: string) => void;
  onVideoClick: (id: string) => void;
  loading: boolean;
}

const Home: React.FC<HomeProps> = ({ videos, selectedCategory, onCategorySelect, onVideoClick, loading }) => {
  return (
    <div className="flex flex-col w-full h-full pb-10">
      <CategoryChips selectedId={selectedCategory} onSelect={onCategorySelect} />
      
      {loading ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 py-20">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          <p className="text-gray-400 font-medium">Generating magic results with Gemini...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 p-4">
          {videos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onClick={onVideoClick} 
            />
          ))}
          {videos.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-500">
              No videos found. Try a different search!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
