const Club = require('../models/clubs'); // Importing the Club model
const mongoose = require('mongoose');

// Get all clubs
const getAllClubs = async (req, res) => {
    try {
        const clubs = await Club.find();
        res.status(200).json(clubs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching clubs', error });
    }
};

// Get a single club by ID
const getClubById = async (req, res) => {
    const { id } = req.params;
    try {
        const club = await Club.findById(id);
        if (!club) {
            return res.status(404).json({ message: 'Club not found' });
        }
        res.status(200).json(club);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching club', error });
    }
};

// Create a new club
const createClub = async (req, res) => {
    const { name, description, members } = req.body;
    try {
        const newClub = new Club({ name, description, members });
        await newClub.save();
        res.status(201).json(newClub);
    } catch (error) {
        res.status(500).json({ message: 'Error creating club', error });
    }
};

// Update a club by ID
const updateClub = async (req, res) => {
    const { id } = req.params;
    const { name, description, members } = req.body;
    try {
        const updatedClub = await Club.findByIdAndUpdate(
            id,
            { name, description, members },
            { new: true }
        );
        if (!updatedClub) {
            return res.status(404).json({ message: 'Club not found' });
        }
        res.status(200).json(updatedClub);
    } catch (error) {
        res.status(500).json({ message: 'Error updating club', error });
    }
};

// Delete a club by ID
const deleteClub = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedClub = await Club.findByIdAndDelete(id);
        if (!deletedClub) {
            return res.status(404).json({ message: 'Club not found' });
        }
        res.status(200).json({ message: 'Club deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting club', error });
    }
};

module.exports = {
    getAllClubs,
    getClubById,
    createClub,
    updateClub,
    deleteClub,
};