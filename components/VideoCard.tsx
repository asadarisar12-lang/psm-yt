
import React from 'react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onClick: (id: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div 
      className="flex flex-col gap-3 cursor-pointer group"
      onClick={() => onClick(video.id)}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-[#222]">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[12px] font-medium px-1.5 py-0.5 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="flex gap-3 px-1">
        <div className="mt-1 flex-shrink-0">
          <img 
            src={video.channelAvatar} 
            alt={video.channelName} 
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[16px] font-bold leading-tight line-clamp-2 group-hover:text-blue-400 transition-colors">
            {video.title}
          </h3>
          <p className="text-[#aaa] text-sm mt-1 flex items-center gap-1 hover:text-white transition-colors">
            {video.channelName}
            <i className="fa-solid fa-circle-check text-[10px] text-gray-400"></i>
          </p>
          <div className="text-[#aaa] text-sm flex items-center">
            <span>{video.views}</span>
            <span className="mx-1">•</span>
            <span>{video.postedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
