"use client";
import React from "react";

const EventsList = ({ events }) => {
  return (
    <section className="p-8 rounded-xl border border-solid bg-white bg-opacity-10 border-neutral-400">
      <h2 className="mb-5 text-2xl font-medium text-black">Upcoming Events</h2>

      {events.length === 0 ? (
        <p className="text-white text-opacity-70">No events scheduled.</p>
      ) : (
        events.map((event) => (
          <article
            key={event.id}
            className="flex items-center justify-between gap-6 p-4 mb-4 rounded-lg bg-black bg-opacity-10"
          >
            <div className="flex items-center gap-4">
              {event.image && (
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-16 h-16 rounded object-cover"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {event.name}
                </h3>
                <p className="text-sm text-white text-opacity-70">
                  {event.date || "Date TBD"}, {event.time || "Time TBD"}
                </p>
                <p className="text-sm text-white text-opacity-50">
                  Attendees: {event.attendeeCount || 0} / {event.maxMembers || "200"}
                </p>
              </div>
            </div>
          </article>
        ))
      )}
    </section>
  );
};

export default EventsList;
