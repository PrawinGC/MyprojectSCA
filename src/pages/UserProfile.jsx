"use client";
import React, { useState } from "react";
import { ProfileSection } from "../components/ProfileSection";
import { VisionLevelControl } from "../components/VisionLevelControl";
import { ActivitiesList } from "../components/ActivitiesList";
import EventsList from "../components/EventList";

export const UserProfile = () => {
  const [user, setUser] = useState(() => ({
    name: "User",
    email: "gcprawin96@gmail.com",
    profileImage:
 "",
    visionLevel: 0,
    activities: [],
    upcomingEvents: [
      {
        name: "Dance Party",
        date: "May 6",
        time: "7PM",
      },
    ],
  }));

  const handleLogout = () => {
    window.location.href = "/login";
  };

  const updateVisionLevel = (level) => {
    setUser((prev) => ({ ...prev, visionLevel: level }));
    document.body.style.zoom = 1 + level * 0.25;
  };

  const updateProfileImage = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser((prev) => ({
          ...prev,
          profileImage: e.target?.result,
        }));
      };
      reader.onerror = () => {
        alert("Error uploading image. Please try again.");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="p-10 min-h-screen bg-white text-zinc-800">
      <div className="flex gap-10 mx-auto my-0 max-w-[1200px] max-md:flex-col">
        <div className="flex flex-col gap-4">
          <ProfileSection
            user={user}
            onImageUpdate={updateProfileImage}
            onLogout={handleLogout}
          />
          <VisionLevelControl
            visionLevel={user.visionLevel}
            onVisionLevelChange={updateVisionLevel}
          />
        </div>
        <div className="flex flex-col flex-1 gap-8 text-black">
          <ActivitiesList activities={user.activities} />
          <EventsList events={user.upcomingEvents} />
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
