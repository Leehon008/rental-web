'use client';


import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { FaHamburger, FaListUl, FaSearch, FaTh } from 'react-icons/fa';
import PropertyGridView from '@/app/grid/page';
import PropertyListView from '@/app/listview/page';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // function handleSearch(term: string) {
  const handleSearch = useDebouncedCallback((term: any) => {
    const params = new URLSearchParams(searchParams!);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const [displayMode, setDisplayMode] = useState('list'); // State to track display mode

  const handleListClick = () => {
    setDisplayMode('list');
    // Implement logic for list display mode
    console.log('Switched to list view');
  };

  const handleGridClick = () => {
    setDisplayMode('grid');
    // Implement logic for grid display mode
    console.log('Switched to grid view');
  };

  return (
    <>
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder="Search..."
        // onChange={(e) => handleSearch(e.target.value)}
        // defaultValue={searchParams!.get('query')?.toString()}
        />
        <button
          onClick={displayMode === 'list' ? handleGridClick : handleListClick}
          className="absolute right-10 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
        >
          {displayMode === 'list' ? <FaTh /> : <FaListUl />}
        </button>
        <button
          onClick={() => {
            // Handle search icon click action
            console.log('Search icon clicked');
            // Add your logic here
          }}
          className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
        >
          <FaSearch />
        </button>
      </div>

      {/* Section that changes based on display mode */}
      <section className="mt-4">
        {displayMode === 'list' ? (
          <PropertyListView />
        ) : (
          <PropertyGridView />
        )}
      </section></>
  );
}