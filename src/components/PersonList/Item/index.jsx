// styled components
import {Wrapper, Block} from './style';

// components
import Avatar from '@ui/Avatar';
import ShapeButton from '@ui/ShapeButton';
import ActionButton from '@ui/ActionButton';
import Reminder from '@ui/Reminder';
import Progress from '@ui/Progress';
import CustomRating from '@ui/CustomRating';
import {motion, AnimatePresence} from 'framer-motion';

// utils
import {fadePresence} from '@constants/framer';
import PropTypes from 'prop-types';

const Item = ({type, data}) => {
    const {firstName, lastName, online, avatar} = data;

    const Common = ({type}) => {
        return (
            <Block>
                <Avatar avatar={avatar} alt={`${firstName} ${lastName}`} online={online}/>
                <div className="main">
                    <span className="name">{firstName} {lastName}</span>
                    {
                        type === 'patient' ?
                            <span className="age">{data.age} years</span>
                            :
                            <span className="department">
                                {data.department.map(item => item.label).join(', ')}
                            </span>
                    }
                </div>
            </Block>
        )
    }

    const DoctorInfo = () => {
        return (
            <div className="overview">
                <div className="rating">
                    <span>Doctor rating</span>
                    <CustomRating value={data.rating}/>
                </div>
                <div className="booked">
                    <span>Booked appointments</span>
                    <Progress value={data.booked}/>
                </div>
            </div>
        )
    }

    const Layout = () => {
        switch (type) {
            default:
            case 'doctor':
                return (
                    <>
                        <Common type={type}/>
                        <DoctorInfo />
                        <button className="booking">Make an appointment</button>
                    </>
                )
            case 'staff':
                return (
                    <>
                        <Common type={type}/>
                        <DoctorInfo />
                        <div className="contacts">
                            <ShapeButton icon="comment-text" shape="round" label="Messages"/>
                            <ShapeButton icon="dots" shape="round" label="Menu"/>
                        </div>
                    </>
                )
            case 'patient':
                return (
                    <>
                        <Common type={type}/>
                        {
                            data.reminder ? <Reminder reminder={data.reminder}/> : null
                        }
                        <Block className="actions">
                            <div className="wrapper">
                                <ActionButton />
                            </div>
                            <ShapeButton icon="comment-text" label="Message" shape="round"
                                         hasNotification={data.message}/>
                            <ShapeButton icon="phone" label="Call" shape="round"/>
                        </Block>
                    </>
                )
        }
    }

    return (
        <AnimatePresence>
            <Wrapper className={type} as={motion.li} {...fadePresence}>
                <Layout/>
            </Wrapper>
        </AnimatePresence>
    )
}

Item.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.any.isRequired
}

export default Item;
