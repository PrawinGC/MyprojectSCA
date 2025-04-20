"use client";
import React, { useState, useEffect } from 'react';
import ClubSearch from '../components/ClubSearch';
import CreateClubButton from '../components/CreateClubButton';
import ClubList from '../components/Clublist';
import ClubFormModal from '../components/ClubFormModal'; 
import ChatPortal from "../components/ChatPortal";
import AgeConfirmationModal from "../components/AgeConfirmationModal";

function ClubPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [clubs, setClubs] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showChatPortal, setShowChatPortal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userCreatedItems, setUserCreatedItems] = useState([]);
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [pendingJoinClub, setPendingJoinClub] = useState(null);

  useEffect(() => {
    setClubs([
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
      {
        id: 2,
        name: 'Hiking Club',
        description: 'For nature enthusiasts',
        image: "/src/assets/Hike.jpg",
        memberCount: 15,
        maxMembers: 30,
        createdBy: 'Jane'
      },
    ]);

    setCurrentUser({ name: 'John' });
  }, []);

  const filterItems = (items) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleCreateClub = () => {
    setShowScheduleForm(true);
  };

  const handleJoinClub = (club) => {
    if (club.memberCount >= club.maxMembers) {
      alert("This club has reached its maximum capacity");
      return;
    }

    setPendingJoinClub(club); // Save club for post-confirmation use
    setShowAgeModal(true);    // Open age confirmation modal
  };

  const handleDeleteClub = (club) => {
    setClubs(clubs.filter(c => c.id !== club.id));
    setUserCreatedItems(userCreatedItems.filter(item =>
      item.name !== club.name || item.type !== 'Club'
    ));
  };

  const handleAddNewClub = (newClub) => {
    const clubWithId = { ...newClub, id: Date.now(), memberCount: 0 };
    setClubs((prev) => [...prev, clubWithId]);
    if (currentUser) {
      setUserCreatedItems((prev) => [...prev, { ...clubWithId, type: "Club" }]);
    }
    setShowScheduleForm(false);
  };

  const handleAgeConfirm = (age) => {
    if (Number(age) < 40) {
      alert("You must be at least 40 years old to join this club.");
      setShowAgeModal(false);
      setPendingJoinClub(null);
      return;
    }

    const updatedClub = {
      ...pendingJoinClub,
      memberCount: (pendingJoinClub.memberCount || 0) + 1
    };

    setClubs(clubs.map(c => c.id === updatedClub.id ? updatedClub : c));
    setSelectedItem(updatedClub);
    setShowChatPortal(true);
    setShowAgeModal(false);
    setPendingJoinClub(null);
  };

  return (
    <div className="mx-auto my-0 max-w-[1200px]">
      <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-4">
        <ClubSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CreateClubButton onClick={handleCreateClub} />
      </div>

      <h2 className="mb-8 text-3xl font-bold">Available Clubs</h2>

      <ClubList
        clubs={filterItems(clubs)}
        currentUser={currentUser}
        onJoin={handleJoinClub}
        onDelete={handleDeleteClub}
      />

      {showAgeModal && (
        <AgeConfirmationModal
          onClose={() => setShowAgeModal(false)}
          onConfirm={handleAgeConfirm}
        />
      )}

      {showChatPortal && selectedItem && (
        <ChatPortal
          item={selectedItem}
          onClose={() => setShowChatPortal(false)}
          currentUser={currentUser}
        />
      )}

      {showScheduleForm && (
        <ClubFormModal
          onClose={() => setShowScheduleForm(false)}
          onCreate={handleAddNewClub}
        />
      )}
    </div>
  );
}

export default ClubPage;
