import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {dark, light} from '@styles/vars';

export const DraggableListItem = styled.div`
  margin: 0 2px;

  &.selected {
    .list-item {
      &:after {
        opacity: 1;
      }

      .checkbox label {
        background-color: ${theme('theme', {
          dark: dark.highlight
        })};
      }

      .category .text {
        opacity: 1;
      }
    }
  }

  &:last-of-type {
    .list-item {
      &:before {
        display: none;
      }
    }
  }
`

const plannerFocused = theme('theme', {
    light: light.highlight,
    dark: dark.bodyBg
});

export const DraggablePlannerItem = styled.div`
  .list-item {
    &:hover, &:focus {
      background-color: ${plannerFocused};
    }
  }

  &.selected .list-item {
    background-color: ${plannerFocused};
  }
`;