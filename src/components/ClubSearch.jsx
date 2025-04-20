import React from 'react';

function ClubSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex-1 mr-6 max-sm:w-full">
      <label htmlFor="clubSearch" className="sr-only">Search clubs</label>
      <input
        id="clubSearch"
        className="builder-dd9d1f09ae3a45e7bca961a858f0fa6b px-5 py-3 w-full text-base rounded-full border-2 border-solid border-stone-800"
        type="search"
        placeholder="Search clubs..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </div>
  );
}

export default ClubSearch;