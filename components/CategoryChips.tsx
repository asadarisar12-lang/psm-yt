
import React from 'react';
import { CATEGORIES } from '../constants';

interface CategoryChipsProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

const CategoryChips: React.FC<CategoryChipsProps> = ({ selectedId, onSelect }) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto py-3 px-4 no-scrollbar sticky top-14 bg-[#0f0f0f] z-30">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
            ${selectedId === cat.id 
              ? 'bg-white text-black' 
              : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'}`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;
