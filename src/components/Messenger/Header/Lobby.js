import { InputLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const Lobby = ({ username, handleUsernameChange, roomName, handleRoomNameChange, handleSubmit, connecting, user }) => {
  console.log(user, "VIPIN SUCCESSFULLY REACH DATA!")



  const { id, name, lname, clinic_id } = user;
  console.log(id, name, lname, clinic_id)
  return (
    <form onSubmit={handleSubmit}>
      <Typography sx={{ fontSize: 18, fontWeight: 900 }}>Enter the following Details:-</Typography>
      <div>
        <InputLabel htmlFor="name">Patient Name:{name} {lname}</InputLabel>
        <TextField
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          readOnly={connecting}
          required
          size="small"
        />
      </div>

      <div>
        <InputLabel htmlFor="room">Enter your Name:</InputLabel>
        <TextField
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          readOnly={connecting}
          required
          size="small"
        />
      </div>

      <button style={{ padding: 9, backgroundColor: 'green', color: 'white', marginTop: 4 }} type="submit" disabled={connecting}>
        {connecting ? "Connecting" : "Join"}
      </button>
    </form>
  );
};

export default Lobby;
