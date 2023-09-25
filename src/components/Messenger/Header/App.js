import React from 'react';
import './App.css';
import VideoChat from './VideoChat';

const VidocallMain = ({user}) => {
  return (
    <div className="app">

      <main>
        <VideoChat user={user}/>
      </main>

    </div>
  );
};

export default VidocallMain;
