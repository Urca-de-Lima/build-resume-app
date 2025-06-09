import React from 'react';

const HomePage = () => {
  return (
    <div>
      <p>
        Welcome to your personal resume editor.
        How would you like to get started?
      </p>
      <ul>
        <li>Have the sidebar slide over main content</li>
        <li>Dock the sidebar next to the content</li>
        <li>Touch enabled: swipe to open and close the sidebar</li>
      </ul>
      <p>
        <b>Current rendered sidebar properties:</b>
      </p>
    </div>
  );
}

export default HomePage;
