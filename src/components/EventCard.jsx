import React from 'react';

const EventCard = ({ event, currentUser, onJoin, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      <img
        loading="lazy"
        className="object-cover overflow-hidden w-full aspect-square h-[200px]"
        src={event.image}
        alt={`Event image for ${event.name}`}
      />
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-semibold">{event.name}</h3>
        <p className="mb-3 text-stone-500">{event.date}</p>
        <p className="mb-6 text-stone-500">{event.description}</p>
        <div className="flex gap-2">
          <button
            className="p-3 w-full font-extrabold bg-violet-500 rounded-full border-2 border-solid transition-all cursor-pointer border-stone-800 duration-200 text-white"
            onClick={onJoin}
          >
            Join Event
          </button>
          {event.createdBy === currentUser?.name && (
            <button
              className="px-4 py-2 font-semibold bg-red-500 rounded-full cursor-pointer border-none text-white"
              onClick={onDelete}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default EventCard;