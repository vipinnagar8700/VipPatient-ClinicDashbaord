import React, { useState, useCallback, useEffect } from "react";
import Video from "twilio-video";
import { HeaderContainer } from '@components/Messenger/Header/style';
import DuoRoundedIcon from '@mui/icons-material/DuoRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import ShapeButton from '@ui/ShapeButton';
import Url from '../../../url/Allurl'
import Pat from '@assets/avatars/doc4.jpg';
import { Avatar, Stack, Box, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallEndIcon from '@mui/icons-material/CallEnd';
// import Avdio from '@assets/AudioVipin.mp3'
import Lobby from "./Lobby";
import VidocallMain from "./App";

const VideoChat = ({ user }) => {
    console.log(user, "LLLL")
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [showpa, setshowpa] = useState(false)

    let audio = null;
    let timeoutId = null;
    const handleOpen = () => {
        setshowpa(true);

        // audio = new Audio(Avdio); // Replace with the path to your audio file

        // // Play the audio
        // audio.play();

        // // Stop the audio after 30 seconds
        // timeoutId = setTimeout(() => {
        //     handleCloses();
        // }, 30000); // 30,000 milliseconds = 30 seconds
    };
    const handleCloses = () => {

        // Pause and reset the audio
        // if (audio) {
        //     clearTimeout(timeoutId);
        //     audio.pause();
        //     audio.currentTime = 0;
        //     audio = null;
        // }


        setshowpa(false);
        // setCount(count + 1)
    };

    // useEffect(() => {
    //     // When showpa becomes false (e.g., clicking the close button), stop the audio
    //     if (!showpa) {
    //         handleCloses();
    //     }
    // }, [showpa, count]);

    const [opena, setOpena] = useState(false);

    const [showpaa, setshowpaa] = useState(false)

    const handleOpena = () => {
        setshowpaa(true);
    };
    const handleClosesa = () => {
        setshowpaa(false);
    };


    return (
        <>
            {
                showpa &&
                <Box
                    sx={{
                        zIndex: "9999999",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        minHeight: "100%",
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "center", // Horizontally center the content
                        alignItems: "center", // Vertically center the content
                        bgcolor: "rgba(0, 0, 0, 0.4)"
                    }}
                >
                    <Box
                        sx={{
                            minWidth: "100%",
                            maxWidth: "100%",
                            p: 2,
                            bgcolor: "#f3f3f3",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center", // Horizontally center the content
                            textAlign: "center" // Center the text horizontally
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center", // Horizontally center the content
                                justifyContent: "flex-end", // Align content to the bottom of the container
                                height: "100%", // Make the container take up the entire height
                            }}
                        >
                            <Avatar mt={80} sx={{ width: 200, height: 200, marginTop: 10 }} src={`${Url}/public/uploads/images/${user?.img}`} />
                            <Typography variant="h6">{user?.name} {user?.lname}</Typography>
                            <Typography> Video Call Connecting ...</Typography>
                            <Stack direction="row" gap={2} sx={{ textAlign: "center", marginTop: 47, marginBottom: 3 }}>
                                <Avatar>
                                    <VolumeUpIcon />
                                </Avatar>
                                <Avatar>
                                    <MicOffIcon />
                                </Avatar>
                                <Avatar>
                                    <VideocamIcon />
                                </Avatar>
                                <Avatar
                                    sx={{ backgroundColor: "red" }}
                                    onClick={handleCloses}
                                >
                                    <CallEndIcon />
                                </Avatar>
                            </Stack>
                        </Box>
                    </Box>
                </Box>


            }
            {
                showpaa &&
                <Box
                    sx={{
                        zIndex: "9999999",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        minHeight: "100%",
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "center", // Horizontally center the content
                        alignItems: "center", // Vertically center the content
                        bgcolor: "rgba(0, 0, 0, 0.4)"
                    }}
                >
                    <Box
                        sx={{
                            minWidth: "100%",
                            maxWidth: "100%",
                            p: 2,
                            bgcolor: "#f3f3f3",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center", // Horizontally center the content
                            textAlign: "center" // Center the text horizontally
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center", // Horizontally center the content
                                justifyContent: "flex-end", // Align content to the bottom of the container
                                height: "100%", // Make the container take up the entire height
                            }}
                        >
                            <Avatar mt={80} sx={{ width: 200, height: 200, marginTop: 10 }} src={`${Url}/public/uploads/images/${user?.img}`} />
                            <Typography variant="h6">{user?.name}{user?.lname}</Typography>
                            <Typography> Voice Call Connecting ...</Typography>
                            <Stack direction="row" gap={2} sx={{ textAlign: "center", marginTop: 47, marginBottom: 3 }}>
                                <Avatar>
                                    <VolumeUpIcon />
                                </Avatar>
                                <Avatar>
                                    <MicOffIcon />
                                </Avatar>
                                <Avatar
                                    sx={{ backgroundColor: "red" }}
                                    onClick={handleClosesa}
                                >
                                    <CallEndIcon />
                                </Avatar>
                            </Stack>
                        </Box>
                    </Box>
                </Box>


            }
            <HeaderContainer>
                <div className="main">
                    <Avatar src={`${Url}/public/uploads/images/${user?.img}`} />
                    <h3 className="title">{user?.name}{user?.lname}</h3>
                </div>
                <div className="actions">
                    <Stack direction='row' sx={{ alignItems: "center" }} gap={2}>
                        <ShapeButton shape="round" icon="phone" label="Call"
                            // onClick={() => { setshowpa(true) }}
                            onClick={handleOpena}
                        />
                        <DuoRoundedIcon
                            shape="round"
                            label="Call"
                            // onClick={() => { setshowpa(true) }}
                            onClick={handleOpen}
                        // onClick={handleIconClick}
                        />


                        <MoreVertRoundedIcon shape="round" label="Call" />
                    </Stack>
                </div>
            </HeaderContainer>
            < VidocallMain user={user} />

        </>
    );
};

VideoChat.propTypes = {
    user: PropTypes.object.isRequired,
    variant: PropTypes.oneOf(['doctor', 'patient']).isRequired,
};

export default VideoChat;
