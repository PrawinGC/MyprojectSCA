import React from 'react';
import ClubCard from './ClubCard';

function ClubList({ clubs, currentUser, onJoin, onDelete }) {
  return (
    <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-sm:grid-cols-[1fr]">
      {clubs.map((club) => (
        <ClubCard
          key={club.id}
          club={club}
          currentUser={currentUser}
          onJoin={onJoin}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ClubList;