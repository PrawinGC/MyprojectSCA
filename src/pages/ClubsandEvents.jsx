import React from 'react';
import { useNavigate } from 'react-router-dom';

function ClubsAndEvents() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const clubs = [
    {
      id: 1,
      name: 'Gardening Club',
      description: 'Share tips and grow together',
      image: "src/assets/Gardening.jpg",
      members: 0,
      maxMembers: 50,
    },
    {
      id: 2,
      name: 'Book Club',
      description: 'Monthly book discussions and readings',
      image: "src/assets/Bookclub.jpg",
      members: 0,
      maxMembers: 50, 
    },
    {
      id: 3,
      name: 'Walking Club',
      description: 'Stay active with group walks',
      image: "/src/assets/Walking.jpg",
      members: 0,
      maxMembers: 50,
    },
  ];

  const events = [
    {
      id: 1,
      name: 'Spring Picnic',
      description: 'Join us for a fun outdoor picnic with games and food.',
      image: "src/assets/Spring.jpg",
    },
    {
      id: 2,
      name: 'Tech Talk: AI Future',
      description: 'A discussion on the future of AI and its impact on various industries.',
      image: "src/assets/TechTalk.jpg",
    },
    {
      id: 3,
      name: 'Yoga Retreat',
      description: 'Relax and rejuvenate at our weekend yoga retreat.',
      image: "src/assets/Yoga.jpg",
    },
  ];

  // Function to handle "Join Club" button click
  const handleJoinClub = (clubId) => {
    navigate(`/club/${clubId}`); // Redirect to the club page with the clubId
  };

  // Function to handle "Join Event" button click
  const handleJoinEvent = (eventId) => {
    navigate(`/event/${eventId}`); // Redirect to the event page with the eventId
  };

  return (
    <div className="px-5 py-10 mx-auto max-w-[1200px] font-sans">
      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-semibold text-neutral-800">
          Welcome back, Prawin!
        </h2>
        <p className="text-base text-neutral-500">
          Explore our clubs and events, or connect with friends.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="mb-6 text-xl font-semibold text-neutral-800">Featured Clubs</h3>
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {clubs.map((club) => (
            <div key={club.id} className="rounded-xl shadow-md overflow-hidden bg-white">
              <div className="h-[200px] bg-gray-200">
                {club.image ? (
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500 text-lg">
                    300 × 200
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-base mb-1">{club.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{club.description}</p>
                <button 
                  onClick={() => handleJoinClub(club.id)} 
                  className="w-full px-4 py-2 text-sm bg-violet-500 text-white rounded-full"
                >
                  Join Club ({club.members}/{club.maxMembers ?? 'undefined'})
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-neutral-800">Upcoming Events</h3>
          <button className="px-6 py-2 bg-violet-500 text-white rounded-full text-sm font-medium hover:bg-violet-600">
            Create Event
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
          {events.map((event) => (
            <div key={event.id} className="rounded-xl shadow-md overflow-hidden bg-white">
              <div className="h-[200px] bg-gray-200">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500 text-lg">
                    300 × 200
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-base mb-1">{event.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                <button 
                  onClick={() => handleJoinEvent(event.id)} 
                  className="w-full px-4 py-2 text-sm bg-violet-500 text-white rounded-full"
                >
                  Join Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ClubsAndEvents;
