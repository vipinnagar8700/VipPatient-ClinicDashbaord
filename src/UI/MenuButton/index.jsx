// styling
import styled from 'styled-components/macro';
import {colors} from '@styles/vars';

// hooks
import {useSidebarContext} from '@contexts/sidebarContext';

export const Button = styled.button`
  width: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;

  .line {
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${colors.blue};
    border-radius: 2px;
    will-change: transform;
    transition: transform var(--transition);
  }

  &.active .line {
    &:first-of-type {
      transform: translateY(8px);
    }

    &:last-of-type {
      transform: translateY(-8px);
    }
  }
`

const MenuButton = () => {
    const {isSidebarOpen, toggleSidebar} = useSidebarContext();

    return (
        <Button className={isSidebarOpen ? 'active' : ''} onClick={() => toggleSidebar()} aria-label="Menu">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </Button>
    )
}

export default MenuButton;