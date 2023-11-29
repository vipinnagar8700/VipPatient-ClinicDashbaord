import { Avatar, Grid, InputLabel, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Url from "../../../url/Allurl";

const Lobby = ({ username, handleUsernameChange, roomName, handleRoomNameChange, handleSubmit, connecting, user }) => {
  console.log(user, "VIPIN SUCCESSFULLY REACH DATA!")



  const { id, name, lname, clinic_id } = user;
  console.log(id, name, lname, clinic_id)


  const CancelFun = () => {
    window.location.reload();
  };



  return (
    <form onSubmit={handleSubmit} >
      <Typography sx={{ fontSize: 18, fontWeight: 900, display: 'none' }}>Enter the following Details:-</Typography>
      <div style={{ display: 'none' }}>
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

      <div style={{ display: 'none' }}>
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
      <Stack sx={{ alignItems: 'center' }} >
        <Avatar mt={80} sx={{ width: 200, height: 200, marginTop: 10 }} src={`${Url}/public/uploads/images/${user?.img}`} />
        <Typography variant="h6">{user?.name} {user?.lname}</Typography>
      </Stack>

      <Grid container gap={14} mt={40}>
        <Grid items={5}>
          <button style={{ padding: 9, backgroundColor: 'green', color: 'white', marginTop: 4, borderRadius: 10 }} type="submit" disabled={connecting}>
            {connecting ? "Connecting" : "Join"}
          </button>
        </Grid>
        <Grid items={4}>
          <button onClick={CancelFun} style={{ padding: 9, backgroundColor: 'red', color: 'white', marginTop: 4, borderRadius: 10 }}>
            <Link >Cancel</Link>
          </button>
        </Grid>
      </Grid>


    </form>
  );
};

export default Lobby;
