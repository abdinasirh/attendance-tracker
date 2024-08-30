import React, { useState, useEffect } from 'react';
import AttendanceTable from './AttendanceTable';
import AttendanceForm from './AttendanceForm';

const Dashboard = ({ token }) => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch('/api/attendance', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setAttendanceData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAttendance();
  }, [token]);

  return (
    <div>
      <h1>Attendance Dashboard</h1>
      <AttendanceForm token={token} />
      <AttendanceTable data={attendanceData} />
    </div>
  );
};

export default Dashboard;
