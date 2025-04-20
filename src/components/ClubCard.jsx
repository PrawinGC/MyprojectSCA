import React from 'react';

function ClubCard({ club, currentUser, onJoin, onDelete }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[white] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      <img
        loading="lazy"
        className="object-cover overflow-hidden w-full aspect-square h-[200px]"
        src={club.image}
        alt={`${club.name} club image`}
      />
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-semibold">{club.name}</h3>
        <p className="mb-6 text-stone-500">{club.description}</p>
        <div className="flex gap-2">
          <button
            className="builder-9f2086a4f24b48d7b109899e17fbfba2 p-3 w-full font-extrabold bg-violet-500 rounded-full border-2 border-solid transition-all cursor-pointer border-stone-800 duration-[0.2s] text-[white]"
            onClick={() => onJoin(club)}
          >
            Join Club
          </button>
          {club.createdBy === currentUser?.name && (
            <button
              className="px-4 py-2 font-semibold bg-red-500 rounded-full cursor-pointer border-[none] text-[white]"
              onClick={() => onDelete(club)}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClubCard;