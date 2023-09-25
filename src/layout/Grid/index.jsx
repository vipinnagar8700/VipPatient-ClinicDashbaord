// styling
import styled from 'styled-components/macro';

// components
import {Responsive, WidthProvider} from 'react-grid-layout';
import {withSize} from 'react-sizeme';

// hooks
import {useInterfaceContext} from '@contexts/interfaceContext';
import {useDispatch} from 'react-redux';
import {updateLayout, saveToLocalStorage} from '@store/features/layout';
import useWindowSize from '@hooks/useWindowSize';

const ResponsiveGridLayout = withSize()(WidthProvider(Responsive));

const StaticGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Grid = ({layouts, children, id, desktop}) => {
    const {isLayoutEditable, fontScale} = useInterfaceContext();
    const dispatch = useDispatch();
    const isMobile = useWindowSize().width < 768;

    const handleLayoutChange = (layouts) => {
        if (isLayoutEditable) {
            dispatch(updateLayout({id, layouts}));
            dispatch(saveToLocalStorage());
        }
    }

    return (
        <>
            {
                isMobile ?
                    <StaticGrid>{children}</StaticGrid>
                    :
                    <ResponsiveGridLayout className="content_layout"
                                          layouts={layouts}
                                          breakpoints={{xl: 1026, lg: 1039, md: 708, sm: 0}}
                                          cols={{xl: 3, lg: 3, md: 2, sm: 1}}
                                          margin={[24, 24]}
                                          isResizable={false}
                                          rowHeight={fontScale === 1 ? 182 : 182 + (fontScale * 11)}
                                          isDraggable={isLayoutEditable}
                                          isBounded={true}
                                          compactType="vertical"
                                          useCSSTransforms={false}
                                          autoSize={true}
                                          onLayoutChange={desktop ? handleLayoutChange : undefined}>
                        {children}
                    </ResponsiveGridLayout>
            }
        </>
    )
}

export default Grid;