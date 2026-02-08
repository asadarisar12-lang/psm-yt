
import React from 'react';

interface SidebarItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active }) => (
  <button className={`w-full flex items-center gap-6 px-3 py-2.5 rounded-xl transition-colors ${active ? 'bg-[#272727]' : 'hover:bg-[#272727]'}`}>
    <i className={`fa-solid ${icon} w-6 text-xl`}></i>
    <span className={`text-sm ${active ? 'font-medium' : 'font-normal'}`}>{label}</span>
  </button>
);

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  if (isCollapsed) {
    return (
      <aside className="fixed left-0 top-14 bottom-0 w-[72px] bg-[#0f0f0f] py-4 flex flex-col items-center gap-4 z-40">
        <div className="flex flex-col items-center justify-center gap-1 w-full py-3 hover:bg-[#272727] rounded-xl cursor-pointer">
          <i className="fa-solid fa-house text-lg"></i>
          <span className="text-[10px]">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 w-full py-3 hover:bg-[#272727] rounded-xl cursor-pointer">
          <i className="fa-solid fa-bolt text-lg"></i>
          <span className="text-[10px]">Shorts</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 w-full py-3 hover:bg-[#272727] rounded-xl cursor-pointer">
          <i className="fa-solid fa-clapperboard text-lg"></i>
          <span className="text-[10px]">Subs</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 w-full py-3 hover:bg-[#272727] rounded-xl cursor-pointer">
          <i className="fa-solid fa-folder text-lg"></i>
          <span className="text-[10px]">You</span>
        </div>
      </aside>
    );
  }

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-60 bg-[#0f0f0f] px-3 overflow-y-auto z-40 scrollbar-hide">
      <div className="py-3 flex flex-col gap-1 border-b border-[#303030]">
        <SidebarItem icon="fa-house" label="Home" active />
        <SidebarItem icon="fa-bolt" label="Shorts" />
        <SidebarItem icon="fa-clapperboard" label="Subscriptions" />
      </div>

      <div className="py-3 flex flex-col gap-1 border-b border-[#303030]">
        <div className="flex items-center gap-2 px-3 pb-2 font-bold text-base">
          You <i className="fa-solid fa-chevron-right text-xs mt-1"></i>
        </div>
        <SidebarItem icon="fa-user" label="Your channel" />
        <SidebarItem icon="fa-clock-rotate-left" label="History" />
        <SidebarItem icon="fa-play" label="Your videos" />
        <SidebarItem icon="fa-clock" label="Watch later" />
        <SidebarItem icon="fa-thumbs-up" label="Liked videos" />
      </div>

      <div className="py-3 flex flex-col gap-1 border-b border-[#303030]">
        <div className="px-3 pb-2 font-bold text-base">Subscriptions</div>
        <div className="flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-xl cursor-pointer">
          <img src="https://picsum.photos/seed/sub1/32/32" className="w-6 h-6 rounded-full" />
          <span className="text-sm">Google AI</span>
        </div>
        <div className="flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-xl cursor-pointer">
          <img src="https://picsum.photos/seed/sub2/32/32" className="w-6 h-6 rounded-full" />
          <span className="text-sm">MrBeast Clone</span>
        </div>
        <SidebarItem icon="fa-plus" label="Browse channels" />
      </div>

      <div className="py-3 flex flex-col gap-1">
        <div className="px-3 pb-2 font-bold text-base">Explore</div>
        <SidebarItem icon="fa-fire" label="Trending" />
        <SidebarItem icon="fa-bag-shopping" label="Shopping" />
        <SidebarItem icon="fa-music" label="Music" />
        <SidebarItem icon="fa-gamepad" label="Gaming" />
        <SidebarItem icon="fa-trophy" label="Sports" />
      </div>
    </aside>
  );
};

export default Sidebar;
