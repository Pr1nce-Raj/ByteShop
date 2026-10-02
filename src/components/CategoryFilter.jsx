import React from 'react';

const CATEGORIES = ["All", "Electronics", "Books", "Accessories", "Audio"];

export default function CategoryFilter({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              isActive
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
