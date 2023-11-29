import React, { useEffect, useState } from "react";
import Participant from "./Participant";
import CallEndIcon from '@mui/icons-material/CallEnd';
import { Avatar, Stack, Typography, Box } from "@mui/material";

const Room = ({ roomName, room, handleLogout }) => {
  const [participants, setParticipants] = useState([]);
  const [isRinging, setIsRinging] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
      if (!room.localParticipant) {
        // Assume incoming call if localParticipant doesn't exist
        setIsRinging(true);
        // Add ringtone logic here
      }
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


  const toggleMute = () => {
    const audioTracks = room.localParticipant.audioTracks;
    audioTracks.forEach((audioTrack) => {
      audioTrack.isEnabled = !isMuted;
    });
    setIsMuted(!isMuted);
  };

  // const handleCallEnd = () => {
  //   setIsRinging(false); // Stop the ringtone when call ends
  //   handleLogout();
  // };
  // console.log(room.localParticipant.audioTracks,"iiii");

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
      {/* <h3>Patient  Name:</h3> */}
      <div className="remote-participants">{remoteParticipants}</div>
      <Stack direction="row" gap={4} sx={{ justifyContent: 'center' }}>
        {/* <Typography>Dr Name: {roomName}</Typography> */}
        <Box>

        </Box>

        <Box>
          <Avatar
            sx={{ backgroundColor: "red", }}
            onClick={handleLogout}
          >
            <CallEndIcon />
          </Avatar>
        </Box>
        <Box>
          <Avatar
            sx={{ backgroundColor: isMuted ? "grey" : "green" }}
            onClick={toggleMute}
          >
            {isMuted ? "🔇" : "🔊"}
          </Avatar>
        </Box>
        <Box>

        </Box>
      </Stack>
    </div>
  );
};

export default Room;
