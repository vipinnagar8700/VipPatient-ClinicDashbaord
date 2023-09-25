// styled components
import {ListItem, Main, Footer} from '@components/AppointmentItem/style';

// components
import Avatar from '@ui/Avatar';
import Truncated from '@components/Truncated';
import ShapeButton from '@ui/ShapeButton';
import MenuDots from '@ui/MenuDots';
import {motion, AnimatePresence} from 'framer-motion';
import {Fragment} from 'react';

// utils
import PropTypes from 'prop-types';
import moment from 'moment';

const AppointmentItem = ({variant = 'doctor', data, animated = false}) => {
    const {patient, doctor, type, date, payment} = data;

    const WrapperElement = animated ? AnimatePresence : Fragment;

    const animationConfig = () => {
        if (animated) {
            return {
                as: motion.div,
                initial: {opacity: 0, y: 20},
                animate: {opacity: 1, y: 0},
                exit: {opacity: 0, y: 20},
                transition: {duration: .5}
            }
        } else return {};
    }

    const footerContent = () => {
        switch (variant) {
            default:
            case 'doctor':
                return (
                    <>
                        <span className="details_item">
                            <i className="icon icon-clock"/>
                            <span>{moment(date).format('HH:mm')}</span>
                        </span>
                        {
                            payment && <span className="details_item">
                            <i className="icon icon-euro"/>
                            <span>{payment.toFixed(2)}</span>
                        </span>
                        }
                    </>
                )
            case 'patient':
                return (
                    <span className="details_item">
                        <i className="icon icon-clock"/>
                        <span>{moment(date).format('dddd, MMMM DD')}</span>
                    </span>
                )
        }
    }

    return (
        <WrapperElement>
            <ListItem variant={variant} {...animationConfig()}>
                <Main>
                    <Avatar avatar={variant === 'patient' ? doctor.avatar : patient.avatar} alt={variant === 'patient' ? doctor.name : patient.name}/>
                    <div className="info">
                        <Truncated className="name" text={variant === 'patient' ? `Dr. ${doctor.name}` : patient.name}/>
                        <Truncated className="title" text={type}/>
                    </div>
                    {variant !== 'patient' && <ShapeButton shape="round" label="Call" icon="phone"/>}
                </Main>
                <Footer variant={variant}>
                    <div className="details">
                        {footerContent()}
                    </div>
                    <MenuDots/>
                </Footer>
            </ListItem>
        </WrapperElement>
    );
}

AppointmentItem.propTypes = {
    variant: PropTypes.oneOf(['doctor', 'patient']),
    data: PropTypes.object.isRequired,
    animated: PropTypes.bool
}

export default AppointmentItem;