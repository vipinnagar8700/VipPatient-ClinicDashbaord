// styled components
import {LinksList, List, MainItem} from '../style';
import {colors} from '@styles/vars';

// components
import Accordion from 'react-bootstrap/Accordion';
import {NavLink} from 'react-router-dom';

// hooks
import {useSidebarContext} from '@contexts/sidebarContext';

// menu links
import {menu} from '@constants/menu';

const Content = () => {
    const {toggleSidebar} = useSidebarContext();
    const activeStyle = {color: colors.blue};

    return (
        <List as={Accordion} style={{marginBottom:2}}>
            {
                menu.map((item, index) => {
                    if (item.cat) {
                        return (
                            <Accordion.Item eventKey={item.cat} key={item.cat}>
                                <MainItem as={Accordion.Header}>
                                    <i className={`icon icon-${item.icon}`}></i> {item.cat}
                                </MainItem>
                                <Accordion.Body>
                                    <LinksList>
                                        {
                                            item.links.map(link => {
                                                return (
                                                    <li key={link.link}>
                                                        <NavLink to={link.link}
                                                                 onClick={() => toggleSidebar()}
                                                                 style={({isActive}) =>
                                                                     isActive ? activeStyle : undefined
                                                                 }
                                                        >
                                                            {link.name}
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </LinksList>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    } else if (item.link) {
                        return (
                            <MainItem as={NavLink}
                                      to={item.link}
                                      onClick={() => toggleSidebar()}
                                      style={({isActive}) =>
                                          isActive ? activeStyle : undefined
                                      }
                                      key={item.link}
                                      className={index === menu.length - 1 ? 'pin-down' : ''}
                            >
                                <i className={`icon icon-${item.icon}`}></i> {item.name}
                            </MainItem>
                        )
                    } else return null
                })
            }
        </List>
    )
}

export default Content;