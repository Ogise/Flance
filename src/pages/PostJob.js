// src/pages/PostJob.js

import React, { useState } from 'react';
import '../App.css';

const jobCategories = [
  { id: 'design', name: 'Graphic Design' },
  { id: 'development', name: 'Web Development' },
  { id: 'writing', name: 'Content Writing' },
  { id: 'marketing', name: 'Digital Marketing' },
  { id: 'video', name: 'Video Production' },
  { id: 'photography', name: 'Photography' },
  { id: 'uiux', name: 'UI/UX Design' },
  { id: 'virtual', name: 'Virtual Assistance' },
  { id: 'translation', name: 'Translation' },
  { id: 'mobile', name: 'Mobile App Development' },
  { id: 'voiceover', name: 'Voiceover Services' },
  { id: 'consulting', name: 'Consulting' },
  { id: 'dataentry', name: 'Data Entry' },
  { id: 'ecommerce', name: 'E-commerce Services' },
  { id: 'legal', name: 'Legal Services' },
  { id: 'tutoring', name: 'Tutoring' },
  { id: 'gamingvr', name: 'Gaming and VR' },
  { id: 'fitness', name: 'Fitness and Wellness' },
  { id: 'architecture', name: 'Architecture and Interior Design' },
  { id: 'event', name: 'Event Planning' }
];

const PostJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [amount, setAmount] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform job posting logic here (e.g., API call)
    console.log({ title, description, category, paymentMode, amount });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Post a Job</h2>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <div className="form-group">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Select category...</option>
            {jobCategories.map((job) => (
              <option key={job.id} value={job.id}>
                {job.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder="Payment Mode"
          value={paymentMode}
          onChange={(e) => setPaymentMode(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
