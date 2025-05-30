import React, { useEffect, useState } from 'react';
import User from '../Models/User'; // Adjust the path as necessary

const FetchApp = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data.json'); // Adjust the path to your JSON file
        const data = await response.json();

        // Convert JSON data to User instances
        const userInstances = data.map(user => new User(user.id, user.name, user.email));
        setUsers(userInstances);
        console.log('Fetched users:', userInstances);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApp;
