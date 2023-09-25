import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {dark, light, flex} from '@styles/vars';

export const PlannerItemContainer = styled.div`
  background-color: ${theme('theme', {
    light: light.bodyBg,
    dark: dark.highlight
  })};
  padding: 20px 20px 20px 24px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  ${flex.between};
  transition: background-color var(--transition);
  cursor: grab;

  * {
    user-select: none;
  }
`;

export const Wrapper = styled.div`
  ${flex.col};
  gap: 6px;
`;

export const TimestampWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;