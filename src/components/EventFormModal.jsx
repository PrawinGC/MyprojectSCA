import React, { useState } from "react";

export const EventFormModal = ({ onClose, onCreate }) => {
  const [form, setForm] = useState({ name: "", description: "", date: "", image: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setForm(prev => ({ ...prev, image: URL.createObjectURL(file) }));
    } else {
      alert("Please select a valid image");
    }
  };

  const handleSubmit = () => {
    if (!form.name || !form.description || !form.date) {
      alert("Please fill all fields");
      return;
    }
    onCreate(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold">Schedule New Event</h2>
        <input type="text" name="name" placeholder="Name" className="w-full border p-2 rounded" onChange={handleChange} />
        <textarea name="description" placeholder="Description" className="w-full border p-2 rounded" onChange={handleChange} />
        <input type="datetime-local" name="date" className="w-full border p-2 rounded" onChange={handleChange} />
        <div className="space-y-1">
          <label>Thumbnail Image</label>
          <input type="file" accept="image/*" onChange={handleImage} />
        </div>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border text-white rounded-full">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-violet-500 text-white rounded-full">Create</button>
        </div>
      </div>
    </div>
  );
};
export default EventFormModal;

