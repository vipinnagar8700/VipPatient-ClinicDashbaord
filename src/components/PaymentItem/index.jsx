// styled components
import {ListItem, Wrapper, Footer, Date} from './style';

// components
import IconLink from '@ui/IconLink';
import MenuDots from '@ui/MenuDots';

// utils
import moment from 'moment';

const PaymentItem = ({data, className}) => {
    const {doctor, title, payment, date} = data;
    const formattedDate = moment(date).format('dddd, DD MMMM');
    return (
        <ListItem className={`list-item ${className ? className : ''}`}>
            <Wrapper>
                <div className="main">
                    <IconLink title={`Dr. ${doctor}`}/>
                    <span className="title">{title}</span>
                </div>
                <span className="payment">
                    <span className="icon">€</span> {payment.toFixed(2)}
                </span>
            </Wrapper>
            <Footer>
                <Date>
                    <i className="icon icon-clock"/>
                    <span className="date">{formattedDate}</span>
                </Date>
                <MenuDots/>
            </Footer>
        </ListItem>
    )
}

export default PaymentItem;