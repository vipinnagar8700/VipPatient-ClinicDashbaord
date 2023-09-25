import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {flex, colors, textSizes, light, dark} from '@styles/vars';
import {rgba} from 'polished';
import {pen} from '@styles/keyframes';

const borderColor = theme('theme', {
    light: rgba(light.bodyBg, 0.5),
    dark: rgba('#4A4F54', 0.5),
});

export const UserItem = styled.div`
  margin: 2px;
  position: relative;
  cursor: pointer;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${borderColor};
  }

  &:hover, &.active {
    .container {
      &:after {
        opacity: 1;
      }

      .main_wrapper .preview {
        &:after {
          opacity: 0;
        }

        &:before {
          opacity: 1;
        }
      }
    }
  }

  .container {
    padding: 20px 22px;
    display: flex;
    ${flex.between};
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${theme('theme', {
        light: light.bodyBg,
        dark: dark.bodyBg
      })};
      border-radius: 8px;
      transition: opacity var(--transition);
      z-index: 1;
      opacity: 0;
    }

    .qty-badge {
      position: absolute;
      right: 20px;
    }

    .main {
      display: flex;
      align-items: center;
      gap: 20px;
      position: relative;
      z-index: 2;
      width: 100%;
      
      &_wrapper {
        ${flex.col};
        gap: 4px;
        width: calc(100% - 60px);

        .name {
          font-weight: ${props => props.hasUnread && '500'};
        }

        .preview {
          color: ${colors.blue};
          font-size: ${textSizes['14']};
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
            text-overflow: ellipsis;
          max-width: calc(100% - 60px);

          &:after, &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 100px;
            transition: opacity var(--transition);
          }

          &:after {
            background: ${theme('theme', {
              light: `linear-gradient(270deg, ${light.widgetBg} 0%, ${rgba(light.widgetBg, 0.0001)} 100%)`,
              dark: `linear-gradient(270deg, ${dark.widgetBg} 0%, ${rgba(dark.widgetBg, 0.0001)} 100%)`,
            })};
          }

          &:before {
            background: ${theme('theme', {
              light: `linear-gradient(270deg, ${light.bodyBg} 0%, ${rgba(light.bodyBg, 0.0001)} 100%)`,
              dark: `linear-gradient(270deg, ${dark.bodyBg} 0%, ${rgba(dark.bodyBg, 0.0001)} 100%)`,
            })};
            opacity: 0;
          }

          .icon {
            font-size: ${textSizes['12']};

            &-pen {
              animation: ${pen} 1.5s ease-in-out infinite both;
            }
          }
        }
      }
    }
  }
`;