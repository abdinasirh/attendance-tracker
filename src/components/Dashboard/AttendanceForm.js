import React, { useState } from 'react';

const AttendanceForm = ({ token }) => {
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ date, status }),
      });
      if (response.ok) {
        alert('Attendance marked successfully');
      } else {
        alert('Failed to mark attendance');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">Select Status</option>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
      </select>
      <button type="submit">Mark Attendance</button>
    </form>
  );
};

export default AttendanceForm;
