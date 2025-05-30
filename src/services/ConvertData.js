import React from 'react';
import User from '../Models/User'; // Adjust the path as necessary

const App = () => {
  const users = [
    new User(1, 'Alice', 'alice@example.com'),
    new User(2, 'Bob', 'bob@example.com'),
  ];

  const handleDownload = () => {
    // Convert the users array to JSON
    const json = JSON.stringify(users, null, 2); // Pretty print with 2 spaces

    // Create a Blob from the JSON string
    const blob = new Blob([json], { type: 'application/json' });

    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'users.json'; // Specify the file name

    // Append to the body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up and remove the link
    document.body.removeChild(link);
  };

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
      <button onClick={handleDownload}>Download JSON</button>
    </div>
  );
};

export default App;
