"use client";
import React from "react";

export const ActivitiesList = ({ activities }) => {
  return (
    <section className="p-8 rounded-xl border border-solid bg-white bg-opacity-10 border-stone-500">
      <h2 className="mb-5 text-2xl font-medium">My Activities</h2>
      {activities.length === 0 ? (
        <p className="text-sm text-black">
          No activities yet. Join some clubs to see your activities here.
        </p>
      ) : (
        <div className="flex flex-col gap-2.5">
          {activities.map((activity, index) => (
            <article
              className="p-4 rounded-lg bg-white bg-opacity-10"
              key={index}
            >
              {activity}
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
