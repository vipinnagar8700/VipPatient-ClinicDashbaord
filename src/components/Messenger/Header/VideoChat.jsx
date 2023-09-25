import React, { useState, useCallback, useEffect, useRef } from "react";
import Video from "twilio-video";

const VideoChata = () => {
    const [username, setUsername] = useState("");
    const [roomName, setRoomName] = useState("");
    const [room, setRoom] = useState(null);
    const [connecting, setConnecting] = useState(false);
    const [participants, setParticipants] = useState([]);
    const [videoTracks, setVideoTracks] = useState([]);
    const [audioTracks, setAudioTracks] = useState([]);

    const videoRef = useRef();
    const audioRef = useRef();

    const handleUsernameChange = useCallback((event) => {
        setUsername(event.target.value);
    }, []);

    const handleRoomNameChange = useCallback((event) => {
        setRoomName(event.target.value);
    }, []);

    // const handleSubmit = useCallback(
    //     async (event) => {
    //         event.preventDefault();
    //         setConnecting(true);
    //         const data = await fetch("/video/token", {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 identity: username,
    //                 room: roomName,
    //             }),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         }).then((res) => res.json());
    //         Video.connect(data.token, {
    //             name: roomName,
    //         })
    //             .then((room) => {
    //                 setConnecting(false);
    //                 setRoom(room);

    //                 // Set up event listeners for participant connections and disconnections
    //                 room.on("participantConnected", (participant) => {
    //                     setParticipants((prevParticipants) => [...prevParticipants, participant]);
    //                 });

    //                 room.on("participantDisconnected", (participant) => {
    //                     setParticipants((prevParticipants) =>
    //                         prevParticipants.filter((p) => p !== participant)
    //                     );
    //                 });

    //                 // Track subscriptions and unsubscriptions for video and audio tracks
    //                 const trackSubscribed = (track) => {
    //                     if (track.kind === "video") {
    //                         setVideoTracks((prevTracks) => [...prevTracks, track]);
    //                     } else if (track.kind === "audio") {
    //                         setAudioTracks((prevTracks) => [...prevTracks, track]);
    //                     }
    //                 };

    //                 const trackUnsubscribed = (track) => {
    //                     if (track.kind === "video") {
    //                         setVideoTracks((prevTracks) => prevTracks.filter((t) => t !== track));
    //                     } else if (track.kind === "audio") {
    //                         setAudioTracks((prevTracks) => prevTracks.filter((t) => t !== track));
    //                     }
    //                 };

    //                 room.localParticipant.tracks.forEach((publication) => {
    //                     if (publication.isSubscribed) {
    //                         trackSubscribed(publication.track);
    //                     }
    //                 });

    //                 room.on("trackSubscribed", trackSubscribed);
    //                 room.on("trackUnsubscribed", trackUnsubscribed);
    //             })
    //             .catch((err) => {
    //                 console.error(err);
    //                 setConnecting(false);
    //             });
    //     },
    //     [roomName, username]
    // );

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        setConnecting(true);

        // Replace 'YOUR_STATIC_TOKEN' with the actual static token you want to use
        const staticToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2NmYTM4MjI1YTAyNjcwNDc0OGI2NDExYjUyNWQ5ZjJjLTE2OTM3MjIxMTIiLCJncmFudHMiOnsidmlkZW8iOnt9fSwiaWF0IjoxNjkzNzIyMTEyLCJleHAiOjE2OTM3MjU3MTIsImlzcyI6IlNLY2ZhMzgyMjVhMDI2NzA0NzQ4YjY0MTFiNTI1ZDlmMmMiLCJzdWIiOiJBQzAyYzY3Mjc3M2YxZWJlMDY1MmQ2NzExMjZjMTg5ZjhlIn0.P7qfKmbh1j_WELHRE5_Fw6iYbtz_pVIcEdgDS03Mw9c';

        Video.connect(staticToken, {
            name: roomName,
        })
            .then((room) => {
                setConnecting(false);
                setRoom(room);

                // Rest of your code for event listeners and track handling...
            })
            .catch((err) => {
                console.error(err);
                setConnecting(false);
            });
    }, [roomName]);


    const handleLogout = useCallback(() => {
        if (room) {
            room.localParticipant.tracks.forEach((trackPub) => {
                trackPub.track.stop();
            });
            room.disconnect();
            setRoom(null);
            setParticipants([]);
            setVideoTracks([]);
            setAudioTracks([]);
        }
    }, [room]);

    useEffect(() => {
        if (room) {
            const tidyUp = (event) => {
                if (event.persisted) {
                    return;
                }
                handleLogout();
            };

            window.addEventListener("pagehide", tidyUp);
            window.addEventListener("beforeunload", tidyUp);

            return () => {
                window.removeEventListener("pagehide", tidyUp);
                window.removeEventListener("beforeunload", tidyUp);
            };
        }
    }, [room, handleLogout]);

    useEffect(() => {
        if (videoTracks.length > 0) {
            videoTracks[0].attach(videoRef.current);
            return () => {
                videoTracks[0].detach();
            };
        }
    }, [videoTracks]);

    useEffect(() => {
        if (audioTracks.length > 0) {
            audioTracks[0].attach(audioRef.current);
            return () => {
                audioTracks[0].detach();
            };
        }
    }, [audioTracks]);

    let render;
    if (room) {
        render = (
            <div className="room">
                <h2>Room: {roomName}</h2>
                <button onClick={handleLogout}>Log out</button>
                <div className="local-participant">
                    {room ? (
                        <div className="participant">
                            <h3>{room.localParticipant.identity}</h3>
                            <video ref={videoRef} autoPlay={true} />
                            <audio ref={audioRef} autoPlay={true} muted={true} />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <h3>Remote Participants</h3>
                <div className="remote-participants">
                    {participants.map((participant) => (
                        <div className="participant" key={participant.sid}>
                            <h3>{participant.identity}</h3>
                            <video autoPlay={true} />
                            <audio autoPlay={true} muted={true} />
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        render = (
            <form onSubmit={handleSubmit}>
                <h2>Enter a room</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="field"
                        value={username}
                        onChange={handleUsernameChange}
                        readOnly={connecting}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="room">Room name:</label>
                    <input
                        type="text"
                        id="room"
                        value={roomName}
                        onChange={handleRoomNameChange}
                        readOnly={connecting}
                        required
                    />
                </div>

                <button type="submit" disabled={connecting}>
                    {connecting ? "Connecting" : "Join"}
                </button>
            </form>
        );
    }

    return (
        <div className="app">
            <header>
                <h1>Video Chat with Hooks</h1>
            </header>
            <main>
                {render}
            </main>
            <footer>
                <p>
                    Made with{' '}
                    <span role="img" aria-label="React">
                        ⚛️
                    </span>{' '}
                    by <a href="https://twitter.com/philnash">philnash</a>
                </p>
            </footer>
        </div>
    );
};

export default VideoChata;
