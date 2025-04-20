"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ScheduleButton from "../components/ScheduleButton";
import EventList from "../components/EventList";
import EventFormModal from "../components/EventFormModal"; 

function EventPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showChatPortal, setShowChatPortal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userCreatedItems, setUserCreatedItems] = useState([]);

  useEffect(() => {
  
    setEvents([
      {
        id: 1,
        name: "Senior Walk",
        description: "A fun walk around the park",
        image: "https://example.com/senior-walk.jpg",
        attendeeCount: 5,
        maxMembers: 10,
        createdBy: "John",
      },
      {
        id: 2,
        name: "Tea and Talk",
        description: "Casual discussion over tea",
        image: "/src/assets/TechTalk.jpg",
        attendeeCount: 3,
        maxMembers: 8,
        createdBy: "Jane",
      },
    ]);

    // Mock current user
    setCurrentUser({ name: "John" });
  }, []);

  const filterItems = (items) => {
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleScheduleNewEvent = () => {
    setShowScheduleForm(true);
  };

  const handleJoinEvent = (event) => {
    if (event.attendeeCount >= event.maxMembers) {
      alert("This event has reached its maximum capacity");
      return;
    }
    const updatedEvent = {
      ...event,
      attendeeCount: (event.attendeeCount || 0) + 1,
    };
    setEvents(events.map((e) => (e.id === event.id ? updatedEvent : e)));
    setSelectedItem(updatedEvent);
    setShowChatPortal(true);
  };

  const handleDeleteEvent = (eventToDelete) => {
    setEvents(events.filter((e) => e.id !== eventToDelete.id));
    setUserCreatedItems(
      userCreatedItems.filter(
        (item) => item.name !== eventToDelete.name || item.type !== "Event"
      )
    );
  };

  const handleCreateEvent = (newEvent) => {
    const eventWithId = { ...newEvent, id: Date.now(), attendeeCount: 0 };
    setEvents((prev) => [...prev, eventWithId]);
    if (currentUser) {
      setUserCreatedItems((prev) => [...prev, { ...eventWithId, type: "Event" }]);
    }
    setShowScheduleForm(false);
  };

  return (
    <div className="mx-auto my-0 max-w-[1200px]">
      <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ScheduleButton onClick={handleScheduleNewEvent} />
      </div>

      <h2 className="mb-8 text-3xl font-bold">Upcoming Events</h2>

      <EventList
        events={filterItems(events)}
        currentUser={currentUser}
        onJoinEvent={handleJoinEvent}
        onDeleteEvent={handleDeleteEvent}
      />
      {showChatPortal && selectedItem && (
    <ChatPortal
      item={selectedItem}
      onClose={() => setShowChatPortal(false)}
      currentUser={currentUser}
    />
  )}


      {/* ✅ Show Event Form Modal */}
      {showScheduleForm && (
        <EventFormModal
          onClose={() => setShowScheduleForm(false)}
          onCreate={handleCreateEvent}
        />
      )}
    </div>
  );
}

export default EventPage;