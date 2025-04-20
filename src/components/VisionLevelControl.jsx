"use client";
import React from "react";

export const VisionLevelControl = ({ visionLevel, onVisionLevelChange }) => {
  return (
    <div className="p-4 rounded-lg border border-solid bg-neutral-100 border-neutral-200">
      <h3 className="mb-2.5 text-sm font-medium text-zinc-800">Vision Level</h3>
      <select
        className='px-3.5 py-2.5 w-full text-sm bg-no-repeat rounded-lg border border-violet-400 border-solid transition-all appearance-none cursor-pointer bg-[10px_auto] bg-[right_12px_top_50%] bg-[url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23AC7EF4%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E")] bg-[white] duration-[0.2s] ease-[ease] text-zinc-800'
        value={visionLevel}
        onChange={(e) => onVisionLevelChange(parseFloat(e.target.value))}
      >
        {[-2,-1.75,-1.50,-1.25,-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1,1.25, 1.50, 1.75, 2].map((level) => (
          <option
            className="p-2 bg-[white] text-zinc-800"
            key={level}
            value={level}
          >
            {level > 0 ? "+" : ""}
            {level}
          </option>
        ))}
      </select>
    </div>
  );
};
