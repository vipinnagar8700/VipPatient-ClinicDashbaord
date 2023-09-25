// styled components
import {Footer, Container, Navigation} from './style';

// components
import Widget from '@components/Widget';
import {Divider} from '@components/Widget/style';
import Card from './Card';
import TabNav from '@ui/TabNav';
import {Item, Button} from '@ui/TabNav/style'
import Btn from '@ui/Btn';
import Form from './Form';
import NoDataPlaceholder from '@components/NoDataPlaceholder';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useState, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import useContentHeight from '@hooks/useContentHeight';

const CreditCards = () => {
    const allCards = useSelector(state => state['cards'].cards);
    const activeCards = allCards.filter(card => card.archived === false);
    const archivedCards = allCards.filter(card => card.archived === true);
    const [isActiveCards, setDisplay] = useState(true);
    const [formVisible, setFormVisibility] = useState(false);

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const contentRef = useRef(null);
    const contentHeight = useContentHeight(headerRef, footerRef);

    const drawCards = item => <Card key={item.id} data={item}/>;

    const handleShow = () => {
        setFormVisibility(true);
    }

    const handleTabChange = (active) => {
        setDisplay(active);
        setFormVisibility(false);
    }

    useEffect(() => {
        if (formVisible) {
            contentRef.current.scrollTo(0, 0);
        }
    }, [formVisible]);

    return (
        <Widget name="CreditCards" mobile={500}>
            <Navigation ref={headerRef}>
                <div className="tabs">
                    <TabNav>
                        <Item>
                            <Button className={isActiveCards ? 'active' : ''} onClick={() => handleTabChange(true)}>
                                Active
                            </Button>
                        </Item>
                        <Item>
                            <Button className={!isActiveCards ? 'active' : ''} onClick={() => handleTabChange(false)}>
                                Archived
                            </Button>
                        </Item>
                    </TabNav>
                </div>
                <Divider/>
            </Navigation>
            {
                isActiveCards ?
                    <>
                        <ScrollContainer height={contentHeight}>
                            <Container style={{overflowY: !formVisible ? 'auto' : 'hidden'}} ref={contentRef}>
                                <Form isVisible={formVisible} handler={setFormVisibility}/>
                                {activeCards.map(drawCards)}
                            </Container>
                        </ScrollContainer>
                        <Footer ref={footerRef}>
                            <Divider/>
                            <div className="btn-wrapper">
                                <Btn text="Add new card" handler={handleShow} className={formVisible ? 'disabled' : ''}/>
                            </div>
                        </Footer>
                    </>
                    :
                    <Container>
                        {
                            archivedCards.length !== 0 ?
                                archivedCards.map(drawCards) : <NoDataPlaceholder variant="cards"/>
                        }
                    </Container>
            }
        </Widget>
    );
}

export default CreditCards;