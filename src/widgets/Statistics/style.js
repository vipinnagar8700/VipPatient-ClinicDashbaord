import styled from 'styled-components/macro';
import {colors, textSizes, flex, fonts, breakpoints} from '@styles/vars';

export const Card = styled.div`
  background-color: ${props => colors[props.className]};
  border-radius: 8px;
  color: #fff;
  font-size: ${textSizes['40']};
  height: 80px;
  ${flex.col};
  ${flex.center};
`;

export const Info = styled.div`
  ${flex.col};
  gap: 10px;

  .value {
    font-family: ${fonts.accent};
    font-size: ${textSizes['40']};
    font-weight: 300;
    flex-grow: 1;
  }
`;

export const Content = styled.div`
  padding-top: 24px;
  ${flex.col};
  gap: 20px;

  ${breakpoints.mobileL} {
    flex-direction: row;

    ${Card} {
      height: 134px;
      width: 94px;
    }

    ${Info} {
      width: calc(100% - 114px);

      .h3 {
        max-width: 200px;
        flex-grow: unset;
      }
    }
  }
`;

