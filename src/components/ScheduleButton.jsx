import React from "react";

const ScheduleButton = ({ onClick }) => {
  return (
    <button
      className="builder-07e216fcf7fc4d61ae442787364057bc px-6 py-3 font-extrabold whitespace-nowrap bg-violet-500 rounded-full border-2 border-solid transition-all cursor-pointer border-stone-800 duration-[0.2s] text-[white]"
      onClick={onClick}
    >
      Schedule New Event
    </button>
  );
};

export default ScheduleButton;
