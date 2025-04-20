import React, { useState } from 'react';

function AgeConfirmationModal({ onClose, onConfirm }) {
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(age);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Age Confirmation</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium">Enter your age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-4"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-white rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
      </div>
  );
}

export default AgeConfirmationModal;
