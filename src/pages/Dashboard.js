// src/pages/Dashboard.js

import React, { useState, useEffect } from 'react';
import '../App.css';

function Dashboard() {
  // State variables for dynamic data
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [recentActivities, setRecentActivities] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [comments, setComments] = useState([]);

  // Function to generate tasks
  const generateTasks = () => {
    const newTasks = [];
    for (let i = 1; i <= 10; i++) {
      newTasks.push({
        id: i,
        title: `Task ${i}`,
        type: i % 2 === 0 ? 'Technical' : 'Admin',
        category: i % 2 === 0 ? 'Bug Fix' : 'Account Management',
      });
    }
    return newTasks;
  };

  // Function to generate comments
  const generateComments = () => {
    const newComments = [];
    for (let i = 1; i <= 5; i++) {
      newComments.push({
        id: i,
        user: `User ${i}`,
        comment: `Comment ${i}`,
        timestamp: new Date().toLocaleString(),
      });
    }
    return newComments;
  };

  // Simulated or fetched data initialization
  useEffect(() => {
    // Simulated data (replace with actual data fetching logic)
    setTotalUsers(1000);
    setTotalOrders(500);
    setTotalRevenue(10000);
    setRecentActivities([
      { id: 1, activity: 'User registration', timestamp: '2024-07-09 10:00 AM' },
      { id: 2, activity: 'Order placed', timestamp: '2024-07-09 11:30 AM' },
      { id: 3, activity: 'Payment received', timestamp: '2024-07-09 12:45 PM' },
    ]);
    setTasks(generateTasks());
    setComments(generateComments());

    // Interval to update recent activities every 5 minutes (300000 milliseconds)
    const interval = setInterval(() => {
      // Generate new activity
      const newActivity = {
        id: recentActivities.length + 1,
        activity: `New activity ${recentActivities.length + 1}`,
        timestamp: new Date().toLocaleString(),
      };

      // Limit recent activities to show only 5 items
      if (recentActivities.length >= 5) {
        setRecentActivities((prevActivities) => [...prevActivities.slice(1), newActivity]);
      } else {
        setRecentActivities((prevActivities) => [...prevActivities, newActivity]);
      }
    }, 300000); // 5 minutes interval

    return () => clearInterval(interval);
  }, [recentActivities.length]); // Depend on recentActivities.length to prevent unnecessary updates

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="dashboard-section">
        <h2>Overview</h2>
        <div className="overview-content">
          <div className="overview-item">
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          </div>
          <div className="overview-item">
            <h3>Total Orders</h3>
            <p>{totalOrders}</p>
          </div>
          <div className="overview-item">
            <h3>Revenue</h3>
            <p>${totalRevenue}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Recent Activities</h2>
        <div className="activities-content">
          <ul>
            {recentActivities.map((activity) => (
              <li key={activity.id}>
                <strong>{activity.activity}</strong> - {activity.timestamp}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Tasks</h2>
        <div className="tasks-content">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.type}</td>
                  <td>{task.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Comments</h2>
        <div className="comments-content">
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.user}</strong> - {comment.comment} - {comment.timestamp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
