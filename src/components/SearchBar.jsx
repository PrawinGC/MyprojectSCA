import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex-1 mr-6 max-sm:w-full">
      <label htmlFor="search-events" className="sr-only">
        Search events
      </label>
      <input
        id="search-events"
        className="builder-6970f558bd9944ceb8e83e6becfadefc px-5 py-3 w-full text-base rounded-full border-2 border-solid border-stone-800"
        type="search"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
