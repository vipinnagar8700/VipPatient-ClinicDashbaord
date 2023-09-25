import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {light, dark, textSizes, colors, breakpoints, flex, fonts} from '@styles/vars';
import {EventsCalendar} from '@widgets/EventsCompactCalendar/style';

export const MonthSelector = styled.div`
  position: relative;
  background-color: ${theme('theme', {
    light: light.bodyBg,
    dark: dark.bodyBg
  })};
  height: 80px;
  margin: 0 -22px 20px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;

  .list-item {
    width: fit-content !important;
  }

  .navigation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
      background: ${theme('theme', {
        light: 'linear-gradient(90deg, #F1F5F8 0%, rgba(241, 245, 248, 0.0001) 100%)',
        dark: 'linear-gradient(90deg, #090A0A 0%, rgba(9, 10, 10, 0.0001) 100%)'
      })};
      height: 100%;
      width: 100px;
      filter: blur(1px);
      display: block;
    }

    &:before {
      left: 2px;
    }

    &:after {
      right: 2px;
      transform: scaleX(-1);
    }

    button {
      font-size: ${textSizes['12']};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${colors.blue};
      color: #fff;
      z-index: 2000;
      ${flex.col};
      ${flex.center};
      opacity: .7;
      transition: opacity var(--transition);

      &[data-direction="prev"] {
        left: 16px;
      }

      &[data-direction="next"] {
        right: 16px;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .list {
    display: flex;
    align-items: center;
    pointer-events: none;
    gap: 12px;
    padding: 0 16px;
    overflow-x: auto;

    &-item {
      padding: 10px;
      border-radius: 8px;
      transition: background-color var(--transition), color var(--transition);

      &.active {
        color: ${colors.blue};
        background-color: ${theme('theme', {
          light: light.widgetBg,
          dark: dark.widgetBg
        })};
      }
    }
  }
`;

export const CalendarWrapper = styled.div`
  height: 100%;
  position: relative;

  .popup {
    position: absolute;
    top: calc(50% + ${props => props.top}px + 80px);
    left: 50%;
    transform: translate(-50%, calc(-50% - 80px - ${props => props.top / 2}px));
    z-index: 10;
    padding: 20px;
    border-radius: 8px;
    background-color: ${theme('theme', {
      light: light.bodyBg,
      dark: dark.bodyBg
    })};
    width: 240px;
    ${flex.col};
    gap: 16px;
    border: 2px solid ${theme('theme', {
      light: colors.light_gray,
      dark: colors.dark
    })};
    transition: opacity var(--transition), visibility var(--transition);
    opacity: 0;
    visibility: hidden;

    &.visible {
      opacity: 1;
      visibility: visible;
    }

    &_close {
      position: absolute;
      right: 16px;
      top: 16px;
      font-size: ${textSizes['14']};
      color: ${colors.error};
    }

    .task {
      ${flex.col};
      gap: 10px;
      font-size: ${textSizes['14']};

      &_label {
        font-size: ${textSizes['12']};
        font-family: ${fonts.accent};
        color: ${colors.gray};
        display: block;
        margin-bottom: 8px;
      }

      &_header {
        display: flex;
        gap: 10px;
        align-items: center;
      }
    }

    ${breakpoints.mobileL} {
      width: 280px;
    }
  }
`;

export const StyledCalendar = styled(EventsCalendar)`
  max-width: 326px;
  margin: 0 auto;

  .react-calendar {
    &__month-view {
      &__weekdays {
        order: unset;
      }

      & > div > div {
        padding: 0 0 20px;
      }

      &:last-of-type {
        .react-calendar__month-view__weekdays {
          display: none !important;
        }

        .react-calendar__month-view__days {
          margin-top: -37px;

          ${breakpoints.mobileL} {
            margin-top: -60px;
          }
        }
      }
    }
  }
`;