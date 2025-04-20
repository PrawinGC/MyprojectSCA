"use client";
import React from "react";

export const ProfileSection = ({ user, onImageUpdate, onLogout }) => {
  return (
    <section className="flex flex-col gap-5 items-center p-8 rounded-xl border border-solid bg-white bg-opacity-10 border-stone-400 flex-[0_0_300px]">
      <div className="relative h-[120px] w-[120px]">
        <img
          alt="Profile"
          className="object-cover overflow-hidden rounded-full aspect-square size-full"
          src={user.profileImage}
        />
        <label className="absolute right-0 bottom-0 p-2 bg-violet-400 rounded-full cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onImageUpdate}
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
          </svg>
        </label>
      </div>
      <div className="text-center">
        <h1 className="text-xl font-medium">{user.name}</h1>
        <p className="text-sm text-white text-opacity-60">{user.email}</p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <button
          className="p-2.5 w-full text-sm font-medium text-violet-400 bg-transparent rounded-lg border border-violet-400 border-solid transition-all cursor-pointer duration-[0.3s]"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </section>
  );
};
