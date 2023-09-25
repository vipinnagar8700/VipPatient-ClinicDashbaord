// styled components
import {Divider} from '@components/Widget/style';
import {Footer} from '@widgets/PaymentsFeed/style';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import Payments from '@widgets/PaymentsFeed/Payments';
import Field from '@ui/Field';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useState, useRef} from 'react';
import useContentHeight from '@hooks/useContentHeight';

// data placeholder
import {payments} from '@db/payments';

const PaymentsFeed = () => {
    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    const [search, setSearch] = useState('');
    let paymentsList = payments.filter(item => item.name.includes(search.toLowerCase()));

    return (
        <Widget name="PaymentsFeed" mobile={500}>
            <WidgetHeader title="Payments history" elRef={headerRef}/>
            <ScrollContainer height={height}>
                <Payments arr={paymentsList}/>
            </ScrollContainer>
            <div ref={footerRef}>
                <Divider/>
                <Footer>
                    <div className="search">
                        <Field type="search" value={search} placeholder="Transaction search"
                               handler={e => setSearch(e.target.value)}/>
                        <button className={search !== '' ? 'visible' : ''} onClick={() => setSearch('')}>
                            <i className="icon icon-close"/>
                        </button>
                    </div>
                </Footer>
            </div>
        </Widget>
    )
}

export default PaymentsFeed;