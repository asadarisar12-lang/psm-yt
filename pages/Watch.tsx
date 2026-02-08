
import React from 'react';
import { Video } from '../types';
import VideoCard from '../components/VideoCard';

interface WatchProps {
  video: Video;
  relatedVideos: Video[];
  onVideoClick: (id: string) => void;
}

const Watch: React.FC<WatchProps> = ({ video, relatedVideos, onVideoClick }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:px-24 xl:px-40 py-6">
      <div className="flex-1 flex flex-col gap-4">
        {/* Player Placeholder */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center relative group shadow-2xl">
          <img 
            src={video.thumbnail} 
            className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm scale-110"
          />
          <div className="z-10 text-center px-4">
            <button className="bg-red-600 hover:bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-transform hover:scale-110 shadow-lg">
              <i className="fa-solid fa-play text-2xl text-white ml-1"></i>
            </button>
            <p className="text-white font-medium">Playback is a mockup for demonstration</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-center px-4 gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <i className="fa-solid fa-play text-sm"></i>
            <i className="fa-solid fa-forward-step text-sm"></i>
            <i className="fa-solid fa-volume-high text-sm"></i>
            <div className="flex-1 h-1 bg-white/30 rounded-full relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-red-600"></div>
            </div>
            <span className="text-xs">0:45 / {video.duration}</span>
            <i className="fa-solid fa-gear text-sm"></i>
            <i className="fa-solid fa-expand text-sm"></i>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold leading-tight mt-2">{video.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
            <div className="flex items-center gap-3">
              <img src={video.channelAvatar} className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <span className="font-bold text-base flex items-center gap-1">
                  {video.channelName}
                  <i className="fa-solid fa-circle-check text-[10px] text-gray-400"></i>
                </span>
                <span className="text-gray-400 text-xs">1.2M subscribers</span>
              </div>
              <button className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-full font-medium ml-4 transition-colors">
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <div className="flex items-center bg-[#272727] rounded-full overflow-hidden">
                <button className="px-4 py-2 hover:bg-[#3f3f3f] flex items-center gap-2 border-r border-white/10 transition-colors">
                  <i className="fa-regular fa-thumbs-up"></i>
                  <span>Liked</span>
                </button>
                <button className="px-4 py-2 hover:bg-[#3f3f3f] transition-colors">
                  <i className="fa-regular fa-thumbs-down"></i>
                </button>
              </div>
              <button className="bg-[#272727] hover:bg-[#3f3f3f] px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
                <i className="fa-solid fa-share"></i>
                <span>Share</span>
              </button>
              <button className="bg-[#272727] hover:bg-[#3f3f3f] px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
                <i className="fa-solid fa-download"></i>
                <span>Download</span>
              </button>
              <button className="bg-[#272727] hover:bg-[#3f3f3f] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>

          <div className="bg-[#272727] hover:bg-[#3f3f3f] rounded-xl p-3 mt-4 text-sm cursor-pointer transition-colors">
            <div className="font-bold flex gap-2">
              <span>{video.views}</span>
              <span>{video.postedAt}</span>
            </div>
            <p className="mt-1">
              {video.description || 'This is a description generated for this video. #PSMYT #React #WebDev'}
            </p>
            <span className="font-bold mt-2 block">Show more</span>
          </div>
        </div>

        {/* Comments Section Mock */}
        <div className="mt-6">
           <h3 className="text-xl font-bold mb-6">452 Comments</h3>
           <div className="flex gap-4 items-start">
             <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">P</div>
             <div className="flex-1">
               <input 
                type="text" 
                placeholder="Add a comment..." 
                className="w-full bg-transparent border-b border-white/10 py-1 outline-none focus:border-white transition-colors"
               />
             </div>
           </div>
           
           <div className="mt-8 flex flex-col gap-6">
             {[1, 2, 3].map(i => (
               <div key={i} className="flex gap-4">
                 <img src={`https://picsum.photos/seed/user${i}/40/40`} className="w-10 h-10 rounded-full" />
                 <div>
                   <div className="flex items-center gap-2 mb-1">
                     <span className="font-bold text-xs">User_{i}32</span>
                     <span className="text-gray-400 text-xs">{i} hours ago</span>
                   </div>
                   <p className="text-sm">This video is absolutely incredible! Love the way PSM YT handles UI/UX. Keep it up!</p>
                   <div className="flex items-center gap-4 mt-2">
                     <div className="flex items-center gap-1.5 text-xs">
                        <i className="fa-regular fa-thumbs-up"></i>
                        <span>{i*12}</span>
                     </div>
                     <i className="fa-regular fa-thumbs-down text-xs"></i>
                     <span className="text-xs font-bold">Reply</span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>

      <div className="lg:w-[350px] xl:w-[400px] flex flex-col gap-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-2">
          {['All', 'Related', 'Recently uploaded', 'Watched'].map((tab, idx) => (
            <button 
              key={tab} 
              className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap ${idx === 0 ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        {relatedVideos.map((rv) => (
          <div 
            key={rv.id} 
            className="flex gap-2 cursor-pointer group"
            onClick={() => onVideoClick(rv.id)}
          >
            <div className="relative w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-[#222]">
              <img src={rv.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute bottom-1 right-1 bg-black/80 text-[10px] px-1 py-0.5 rounded">{rv.duration}</div>
            </div>
            <div className="flex flex-col gap-1 overflow-hidden">
              <h4 className="text-sm font-bold line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">{rv.title}</h4>
              <p className="text-[#aaa] text-xs mt-1 flex items-center gap-1">{rv.channelName} <i className="fa-solid fa-circle-check text-[9px]"></i></p>
              <div className="text-[#aaa] text-[11px]">
                <span>{rv.views}</span>
                <span className="mx-1">•</span>
                <span>{rv.postedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch;
