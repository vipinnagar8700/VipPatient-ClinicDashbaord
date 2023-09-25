import React, { useEffect, useState } from "react";
import Participant from "./Participant";
import CallEndIcon from '@mui/icons-material/CallEnd';
import { Avatar, Stack, Typography } from "@mui/material";

const Room = ({ roomName, room, handleLogout }) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div className="room">

      <h2></h2>
      {/* <button >End Call</button> */}

      <div className="local-participant">
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ""
        )}
      </div>
      <h3>Patient  Name:</h3>
      <div className="remote-participants">{remoteParticipants}</div>
      <Stack direction="row" gap={4}>
        <Typography>Dr Name: {roomName}</Typography>
        <Avatar
          sx={{ backgroundColor: "red" }}
          onClick={handleLogout}
        >
          <CallEndIcon />
        </Avatar>
      </Stack>
    </div>
  );
};

export default Room;
