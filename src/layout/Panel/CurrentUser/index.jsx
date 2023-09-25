// styled components
import { Menu, UserWrapper } from '../style';
// components
import Avatar from '@ui/Avatar';

// utils
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState } from 'react';

// assets
import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';
import { LogoutProfile, ProfileApi } from '@components/Api/AllApi';
import { useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CurrentUser = () => {
    const navigate = useNavigate();
    const [ProfileData, setProfileData] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClickAway = () => setOpen(false);
    const handleClick = () => setOpen(!open);

    const src = {
        jpg: doc1jpg,
        webp: doc1webp
    }


    useEffect(() => {
        ProfileApi().then((res) => {
            setProfileData(res.results)
            console.log(res.results, "This Is profileData")
        })
    }, [])


    const Logout = async () => {
        const response = await LogoutProfile();
        console.log(response);

        if (response && response.message === "Successfully logged out") {
            alert("Successfully Logout!");

            // Remove the token from local storage
            // localStorage.removeItem("clinic");
            navigate('/');
        } else {
            alert("Logout failed. Please try again.");
        }
    };


    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <UserWrapper>
                <img src={`https://medical.studiomyraa.com/public/uploads/images/${ProfileData.img}`} style={{ height: '25px', width: '25px' }} alt="avatar" />
                <div className="info">
                    <span className="h3">{ProfileData.name} {ProfileData.lname}</span>
                    <span className="position">{ProfileData.address}</span>
                    <Menu className={open ? 'visible' : ''}>
                        <button>
                            <Link to="/settings"> <i className="icon icon-circle-user" /> Change user</Link>
                        </button>
                        <button>
                            <Link to="/settings/ChangePassword"> <i className="icon icon-circle-user" /> Change Password</Link>
                        </button>
                        
                        <button>
                            <i className="icon icon-logout" onClick={Logout} /> Logout
                        </button>
                    </Menu>
                </div>
                <button className="trigger" onClick={handleClick} aria-label="Show menu">
                    <i className="icon icon-chevron-down" />
                </button>
            </UserWrapper>
        </ClickAwayListener>
    )
}

export default CurrentUser;