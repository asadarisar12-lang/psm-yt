
import React, { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onMenuToggle }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-[#0f0f0f] flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuToggle}
          className="p-2 hover:bg-[#272727] rounded-full transition-colors text-xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <a href="#/" className="flex items-center gap-1 group">
          <div className="bg-red-600 text-white px-1.5 py-0.5 rounded-lg flex items-center justify-center font-bold text-lg">
             <i className="fa-solid fa-play text-xs mr-0.5"></i>
          </div>
          <span className="font-bold text-xl tracking-tighter">PSM YT</span>
        </a>
      </div>

      <div className="flex-1 max-w-[720px] ml-10 flex items-center gap-4">
        <form onSubmit={handleSubmit} className="flex-1 flex items-center group">
          <div className="flex-1 flex items-center bg-[#121212] border border-[#303030] rounded-l-full px-4 py-1.5 focus-within:border-blue-500 transition-colors ml-4">
            <i className="fa-solid fa-search text-gray-400 mr-3 text-sm hidden group-focus-within:block"></i>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <button 
            type="submit"
            className="bg-[#222222] border border-[#303030] border-l-0 rounded-r-full px-5 py-1.5 hover:bg-[#303030] transition-colors"
          >
            <i className="fa-solid fa-search text-gray-300"></i>
          </button>
        </form>
        <button className="p-2.5 bg-[#181818] hover:bg-[#272727] rounded-full transition-colors hidden sm:block">
          <i className="fa-solid fa-microphone"></i>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-[#272727] rounded-full transition-colors text-xl hidden md:block">
          <i className="fa-solid fa-video"></i>
        </button>
        <button className="p-2 hover:bg-[#272727] rounded-full transition-colors text-xl hidden md:block">
          <i className="fa-solid fa-bell"></i>
        </button>
        <button className="w-8 h-8 rounded-full overflow-hidden ml-2 bg-gradient-to-tr from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm">
          P
        </button>
      </div>
    </header>
  );
};

export default Header;
