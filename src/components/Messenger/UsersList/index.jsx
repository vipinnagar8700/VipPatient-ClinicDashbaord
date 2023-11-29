// styled components
import * as React from 'react';
import Field from '@ui/Field';
import { Footer, Header } from '@components/Messenger/style';
import { Container, Button } from '@ui/TabNav/style';
// import { UserItem } from '@components/Messenger/UsersList/User/style';
// components
import Url from '../../../url/Allurl'
import Widget from '@components/Widget';
import Nav from 'react-bootstrap/Nav';
import User from '@components/Messenger/UsersList/User';
import ScrollContainer from '@components/ScrollContainer';
import NoDataPlaceholder from '@components/NoDataPlaceholder';
import Pat from '@assets/avatars/doc4.jpg'
// utils
import PropTypes from 'prop-types';

// hooks
import { useRef, useState, useEffect } from 'react';
import useContentHeight from '@hooks/useContentHeight';

// data placeholder
// import { doctor, patient } from '@db/messenger';
import { GetAllPatientData } from '@components/Api/AllApi';
import { Avatar, Typography } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const UserList = ({ variant, user, onUserSelect, setModal, activeList, setActiveList, onClick }) => {


    let doctor = []
    const [query, setQuery] = useState('');
    const placeholder = variant === 'doctor' && activeList !== 'doctors' ? 'Search patients' : 'Search doctor or medical department';

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    const [post, setPost] = useState(false)
    const handleUserSelect = (userData) => {
        // Call the callback function passed from the parent component (onClick)
        onClick(userData);
    }

    useEffect(() => {


        const AllUsers = GetAllPatientData()
        if (AllUsers) {
            AllUsers.then((data) => {
                // console.log(data, "ALL USERS DATA FOR MESSAGE998")
                setPost(data?.result)
            })
        }
    }, [])


    // console.log(post, "UUUUUUUUUUUUUUUUUUUUUUUUUuuuu")




    const handleClick = (data) => {
        onUserSelect(data);
        setModal(true);
        onClick(data);
        console.log("THis is clicked!") // Call the callback with the user's data
    }


    const handleUserClick = (userData) => {
        // Handle the clicked user's data here in the UserList component
        // console.log("Clicked user's data:", userData);
        // You can do whatever you need with the clicked user's data here
    }




    return (
        <Widget name="MessengerUserList">
            {
                variant === 'doctor' && (
                    <>
                        <Header ref={headerRef}>
                            <Container>
                                <Button >
                                    Patients
                                </Button>

                            </Container>
                        </Header>

                        <List sx={{ overflow: 'scroll', width: '100%' }}>
                            {
                                post && post.map((data, index) => {
                                    return (
                                        <ListItem alignItems="center" key={index} sx={{ backgroundColor: '#F1F5F8', borderRadius: 0, margin: 1, width: '95%', boxShadow: '0 3px 3px rgba(0,0,0,0.16), 0 3px 1px rgba(0,0,0,0.2)' }} user={user}
                                            onClick={() => {
                                                onUserSelect(data);
                                                setModal(true);
                                            }} >
                                            <ListItemAvatar>
                                                <Avatar sx={{ heigth: 42, width: 42 }} alt={data.name} src={`${Url}/public/uploads/images/${data.img}`} />
                                            </ListItemAvatar>
                                            <ListItemText ><Typography sx={{ fontWeight: 600 }}>{data.name} {data.lname}</Typography></ListItemText>
                                        </ListItem>

                                    )
                                })
                            }
                        </List>

                    </>
                )
            }


        </Widget>
    );
}

UserList.propTypes = {
    variant: PropTypes.oneOf(['doctor', 'patient']).isRequired,
    onUserSelect: PropTypes.func.isRequired,
    user: PropTypes.any.isRequired
}

export default UserList;