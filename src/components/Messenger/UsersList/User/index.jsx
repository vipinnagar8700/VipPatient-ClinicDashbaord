// styled components
import { GetAllPatientData } from '@components/Api/AllApi';
import { UserItem } from '@components/Messenger/UsersList/User/style';

// components
import { QtyBadge } from '@ui/Badge/style';
import Pat from '@assets/avatars/doc4.jpg'
// utils
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { Avatar } from '@mui/material';

const User = ({ data, user, onUserSelect, setModal }) => {


    const [post, setPost] = useState(null)
    const handleUserClick = () => {
        // Call the callback function passed from the parent component (onUserSelect) with the user's data
        onUserSelect(data);
    }


    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await GetAllPatientData();
                console.log(response, "ALL USERS DATA FOR MESSAGE9911118");
                setPost(response?.result || null);
            } catch (error) {
                // Handle error here
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    const handleClick = () => {
        onUserSelect(post.id);
        setModal(true);
    }


    return (


        <>




        </>
    )
}

User.propTypes = {
    onUserSelect: PropTypes.func.isRequired
}

export default User;