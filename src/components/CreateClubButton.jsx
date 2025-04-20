import React from 'react';

function CreateClubButton({ onClick }) {
  return (
    <button
      className="builder-d1bb61ca2a2e41fc867d9a58b2e13c3a px-6 py-3 font-extrabold whitespace-nowrap bg-violet-500 rounded-full border-2 border-solid transition-all cursor-pointer border-stone-800 duration-[0.2s] text-[white]"
      onClick={onClick}
    >
      Create New Club
    </button>
  );
}

export default CreateClubButton;