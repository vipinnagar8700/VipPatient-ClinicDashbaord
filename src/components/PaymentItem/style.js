import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, effects, flex, fonts, textSizes} from '@styles/vars';

export const ListItem = styled.div`
  border-bottom: ${theme('theme', {
    light: effects.dashedLight,
    dark: effects.dashedDark,
})};
  padding-bottom: 20px;

  &:not(.bordered):last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  ${flex.between};
  margin-bottom: 12px;
  gap: 20px;

  .main {
    ${flex.col};
    gap: 8px;

    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
    }
  }

  .payment {
    align-self: flex-end;
    font-family: ${fonts.accent};
    font-weight: 500;
    display: flex;
    gap: 8px;
    font-size: ${textSizes['14']};
  }
`;

export const Footer = styled.div`
  display: flex;
  ${flex.between};
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .date {
    font-size: ${textSizes['14']};
  }

  .icon {
    color: ${colors.gray};
  }
`;