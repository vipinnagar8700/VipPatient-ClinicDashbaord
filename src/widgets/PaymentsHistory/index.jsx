// styling
import styled from 'styled-components/macro';
import {flex, breakpoints} from '@styles/vars';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import PaymentItem from '@components/PaymentItem';
import Navigator from '@ui/Navigator';
import ScrollContainer from '@components/ScrollContainer';
import NoDataPlaceholder from '@components/NoDataPlaceholder';

// utils
import {nanoid} from 'nanoid';
import {getYearDaysArray} from '@utils/dates';
import moment from 'moment';
import PropTypes from 'prop-types';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import {useEffect, useRef} from 'react';
import useContentHeight from '@hooks/useContentHeight';
import useWindowSize from '@hooks/useWindowSize';

// data placeholder
import {paymentsHistory} from '@db/payments_history';

const Container = styled.div`
  .list {
    ${flex.col};
    gap: 20px 24px;
    padding: 20px 24px;

    .column {
      ${flex.col};
      gap: 20px;
    }
  }

  ${breakpoints.tablet} {
    .list {
      ${props => props.variant === 'large' && `
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      `}
    }
  }
`;

const PaymentsHistory = ({variant}) => {
    const days = getYearDaysArray();
    const todayIndex = moment().diff(moment().startOf('year'), 'days');
    const {index, setIndex, navigate} = useArrayNav(days);
    const paymentsByDate = paymentsHistory.filter(payment => moment(payment.date).isSame(days[index].date, 'day'));
    const payments = variant === 'large' ? paymentsByDate : paymentsHistory;
    const isTablet = useWindowSize().width >= 768;

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    useEffect(() => {
        setIndex(todayIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todayIndex]);

    return (
        <Widget name="PaymentsHistory" mobile={600}>
            {variant === 'compact' &&
                <WidgetHeader title="Payments history" elRef={headerRef} style={{paddingBottom: 0}}/>
            }
            <WidgetBody style={{padding: 0}}>
                <ScrollContainer height={height}>
                    <Container className="track" variant={variant}>
                        {
                            payments.length !== 0 ?
                                <div className="list">
                                    {
                                        payments.map((payment, i) => (
                                            i % 3 === 0 &&
                                            <div className="column" key={nanoid()}>
                                                {
                                                    payments.slice(i, i + 3).map(payment => (
                                                        <PaymentItem data={payment}
                                                                     key={nanoid()}
                                                                     className={isTablet && variant === 'large'}/>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div> : <NoDataPlaceholder/>
                        }
                    </Container>
                </ScrollContainer>
                {
                    variant === 'large' &&
                    <div ref={footerRef} style={{padding: '0 2px 2px'}}>
                        <Navigator text={days[index].long} handler={e => navigate(e)}
                                   nextDisabled={index === todayIndex}/>
                    </div>
                }
            </WidgetBody>
        </Widget>
    )
}

PaymentsHistory.propTypes = {
    variant: PropTypes.oneOf(['compact', 'large']).isRequired
}

export default PaymentsHistory;