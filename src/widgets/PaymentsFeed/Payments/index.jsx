// styled components
import {Divider} from '@components/Widget/style';
import {PaymentItem, Additional, Content} from './style';

// components
import GroupSeparator from '@ui/GroupSeparator';
import ShapeButton from '@ui/ShapeButton';
import Avatar from '@ui/Avatar';
import NoDataPlaceholder from '@components/NoDataPlaceholder';

// utils
import PropTypes from 'prop-types';
import moment from 'moment';
import {nanoid} from 'nanoid';

const Payments = ({arr, height}) => {
    const dates = [...new Set(arr.map(item => moment(item.date).format('YYYY-MM-DD')))]
        .sort((a, b) => moment(a).isAfter(b) ? 1 : -1);

    const Payment = ({item}) => {
        return (
            <PaymentItem>
                <div className="main">
                    <div className="general">
                        <span className="timestamp">{moment(item.date).format('hh:mm A')}</span>
                        <h3>{item.name}</h3>
                    </div>
                    <div className={`amount amount--${item.type}`}>
                        {item.type === 'expense' ? '-' : '+'}$
                        {item.amount.toFixed(2)}
                    </div>
                </div>
                {
                    item.additional &&
                    <Additional>
                        <div className="main">
                            <Avatar avatar={item.additional.avatar} alt={item.additional.doctor}/>
                            <div className="main_info">
                                <h3>{item.additional.doctor}</h3>
                                <span>{item.additional.speciality}</span>
                            </div>
                        </div>
                        <ShapeButton shape="round" icon="dots" label="More"/>
                    </Additional>
                }
            </PaymentItem>
        )
    }

    return (
        <Content height={height}>
            {
                arr.length !== 0 ?
                    <>
                        {
                            dates.map(date => {
                                const payments = arr.sort((a, b) => moment(a.date).isAfter(b.date) ? 1 : -1)
                                    .filter(item => moment(item.date).format('YYYY-MM-DD') === date);
                                return (
                                    <div key={nanoid()}>
                                        <GroupSeparator text={date === moment().format('YYYY-MM-DD') ? 'Today' : date}/>
                                        {
                                            payments.map((item, index) => (
                                                <div key={nanoid()}>
                                                    <Payment item={item}/>
                                                    {index !== payments.length - 1 && <Divider/>}
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            })
                        }
                    </>
                    :
                    <NoDataPlaceholder />
            }
        </Content>
    )
}

Payments.propTypes = {
    arr: PropTypes.array.isRequired
}

export default Payments;