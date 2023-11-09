import React from 'react';
import './App.css';
import VideoChat from './VideoChat';

const VidocallMain = ({ user, handleOpen }) => {
  return (
    <div className="app">

      <main>
        <VideoChat user={user} handleOpen={handleOpen} />
      </main>

    </div>
  );
};

export default VidocallMain;
