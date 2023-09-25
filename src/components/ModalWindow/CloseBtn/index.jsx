// styling
import {colors, flex, textSizes} from '@styles/vars';
import styled from 'styled-components/macro';
import {darken} from 'polished';

const Btn = styled.button`
  min-width: 20px;
  min-height: 20px;
  padding: 2px;
  border-radius: 50%;
  background-color: ${colors.error};
  color: #fff;
  display: flex;
  ${flex.center};
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: ${textSizes[12]};
  line-height: 1;
  will-change: transform;
  z-index: 10;
  transition: background-color var(--transition), transform var(--transition);

  &:hover {
    background-color: ${darken(0.1, colors.error)};
    transform: scale(1.1);
  }
  
  .icon {
    margin-top: -1px;
  }
`;

const CloseBtn = ({handler}) => {
    return (
        <Btn onClick={handler}>
            <i className="icon icon-close"/>
        </Btn>
    )
}

export default CloseBtn;