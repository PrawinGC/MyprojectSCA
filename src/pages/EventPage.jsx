"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ScheduleButton from "../components/ScheduleButton";
import EventList from "../components/EventList";
import EventFormModal from "../components/EventFormModal";
import ChatPortal from "../components/ChatPortal";

function EventPage() {
  const { eventId } = useParams(); // Get the dynamic eventId from the URL
  const [searchQuery, setSearchQuery] = useState("");
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showChatPortal, setShowChatPortal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userCreatedItems, setUserCreatedItems] = useState([]);

  // Fetch events or a specific event if eventId is provided
  useEffect(() => {
<<<<<<< HEAD
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
=======
    async function fetchEvents() {
      try {
        if (eventId) {
          // Fetch a specific event
          const response = await fetch(`/api/events/${eventId}`);
          const data = await response.json();
          setEvents([data]); // Set the single event in the events array
        } else {
          // Fetch all events
          const response = await fetch("/api/events");
          const data = await response.json();
          setEvents(data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
>>>>>>> 4663541 (Second commit)
    }

    fetchEvents();
  }, [eventId]);

  // Handle creating a new event
  const handleAddNewEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setShowScheduleForm(false);
  };

  // Handle joining an event
  const handleJoinEvent = (event) => {
    console.log(`User joined event: ${event.name}`);
  };

  // Handle opening the chat portal
  const handleOpenChat = (event) => {
    setSelectedItem(event);
    setShowChatPortal(true);
  };

  return (
    <div className="event-page">
      <h1>Events</h1>

      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={(query) => setSearchQuery(query)}
        placeholder="Search events..."
      />

      {/* Schedule Button */}
      <ScheduleButton onClick={() => setShowScheduleForm(true)} />

      {/* Event List */}
      <EventList
        events={events.filter((event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        currentUser={currentUser}
        onJoin={handleJoinEvent}
        onChat={handleOpenChat}
      />

      {/* Event Form Modal */}
      {showScheduleForm && (
        <EventFormModal
          onClose={() => setShowScheduleForm(false)}
          onCreate={handleAddNewEvent}
        />
      )}

      {/* Chat Portal */}
      {showChatPortal && selectedItem && (
        <ChatPortal
          item={selectedItem}
          onClose={() => setShowChatPortal(false)}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}

export default EventPage;