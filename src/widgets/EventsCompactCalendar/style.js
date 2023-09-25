import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {light, dark, flex, textSizes, fonts, colors, breakpoints} from '@styles/vars';

export const Container = styled.div`
  position: relative;
  height: 100%;
  ${flex.col};
  align-items: center;
`;

export const Popup = styled.div`
  position: relative;
  z-index: 2;
  background-color: ${theme('theme', {
    light: light.bodyBg,
    dark: dark.bodyBg,
  })};
  padding: 20px;
  border-radius: 8px;
  ${flex.col};
  gap: 16px;
  margin: auto;
  width: calc(100% - 40px);
  max-width: 320px;
`;

export const Backdrop = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: calc(100% - 40px);
`;

export const EventsCalendar = styled.div`
  ${flex.col};
  gap: 8px;
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 2px;
  flex-grow: 1;

  .react-calendar {
    flex-grow: 1;
    height: 100%;

    &__navigation {
      background-color: ${theme('theme', {
        light: light.bodyBg,
        dark: dark.bodyBg
      })};
      border-radius: 8px;
      min-height: 40px;
      padding: 10px 22px;
      display: flex;
      ${flex.between};
      font-size: ${textSizes['14']};
      margin: 0 2px;

      &__label {
        pointer-events: none;
      }
    }

    &__viewContainer {
      ${flex.col};
      flex-grow: 1;
    }

    &__tile {
      font-size: ${textSizes['14']};
      font-family: ${fonts.accent};

      .bar {
        opacity: 0;
        transition: opacity var(--transition);
      }
    }

    &__year-view__months {
      gap: 20px 0;
      margin-top: 20px;
    }

    &__month-view {
      height: 100%;

      & > div {
        height: 100%;
        align-items: stretch;
      }

      & > div > div {
        ${flex.col};
        gap: 8px;
        justify-content: space-between;
        height: 100%;
        padding: 0 24px 20px;
      }

      &__weekdays {
        text-transform: uppercase;
        font-size: ${textSizes['10']};
        font-family: ${fonts.accent};
        text-align: center;
        order: 1;
        display: grid !important;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        justify-items: center;

        abbr {
          text-decoration: none;
        }

        ${breakpoints.mobileL} {
          gap: 8px;

          &__weekday {
            width: 40px;
          }
        }
      }

      &__days {
        display: grid !important;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        grid-gap: 20px 0;
        justify-items: center;

        &__day {
          &.active {
            color: ${colors.blue};
            cursor: pointer;
          }

          &:not(&.active) {
            pointer-events: none;
          }

          &--neighboringMonth {
            opacity: .5;
          }
        }

        ${breakpoints.mobileL} {
          grid-gap: 8px;

          &__day {
            width: 40px;
            height: 40px;
            border-radius: 4px;
            background-color: ${theme('theme', {
              light: light.highlight,
              dark: dark.highlight
            })};
            position: relative;

            &.active {
              color: inherit;

              .bar {
                opacity: 1;
                display: block;
                position: absolute;
                left: 50%;
                bottom: 8px;
                border-radius: 2px;
                width: 16px;
                height: 2px;
                background-color: ${colors.blue};
                transform: translateX(-50%);
              }
            }
          }
        }
      }
    }
  }
`;
