import styled from 'styled-components/macro';
import {flex, colors, textSizes, dark, light, fonts, breakpoints} from '@styles/vars';
import theme from 'styled-theming';
import add from '@assets/add.svg';

const borderColor = theme('theme', {
    light: '#DCE2E8',
    dark: '#25292D'
});

const navColor = theme('theme', {
    light: light.highlight,
    dark: dark.highlight
});

const labelColor = theme('theme', {
    light: light.widgetBg,
    dark: dark.widgetBg
});

// Calendar container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  position: relative;
`

// Calendar header
export const Header = styled.div`
  padding: 20px 24px 0;
  ${flex.col};
  gap: 20px;

  .navigator {
    margin: 0 0 20px;
    background-color: ${navColor};

    .label {
      font-size: ${textSizes['12']};
    }

    &--daily {
      margin: 0 -22px;
      display: flex;
      align-items: center;
      gap: 0;
      padding: 0;
      background-color: ${theme('theme', {
        light: light.bodyBg,
        dark: dark.bodyBg
      })};

      .arrows {
        width: 63px;
        gap: 8px;
      }

      .label {
        flex-grow: 1;
        border-left: 1px solid ${borderColor};
        height: 100%;
      }

      .arrows, .label {
        display: flex;
        ${flex.center};
      }

      ${breakpoints.tablet} {
        .arrows {
          width: 83px;
        }
      }
    }
  }

  ${breakpoints.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    ${flex.between};

    .tabs {
      order: ${props => props.view !== 'day' && 2};
    }

    .select-user,
    .select-basic,
    .tabs {
      width: 300px;
    }

    .navigator {
      flex-grow: 1;
      width: 100%;
      order: ${props => props.view !== 'day' && 3};
      height: ${props => props.view === 'day' && 60}px;

      ${breakpoints.tablet} {
        .label {
          font-size: ${textSizes['14']};
        }
      }
    }
  };

  ${breakpoints.laptop} {
    margin-bottom: ${props => props.view !== 'day' && 20}px;

    .navigator {
      width: ${props => props.view !== 'day' && '200px'};
      flex-grow: ${props => props.view !== 'day' && 'unset'};
      margin-bottom: 0;
    }

    .tabs {
      margin-left: auto;
    }
  }

`;

// Calendar footer (legend)
export const Footer = styled.div`
  padding: 20px 24px;
`;

// Time gutter (time) labels
const labelStyle = `
${flex.col};
${flex.center};
font-size: ${textSizes['10']};
font-family: ${fonts.accent};
height: 20px;
width: 47px;
margin: 0 auto;
border-radius: 8px;
`;


// Main styling wrapper for the calendar
export const StyledCalendar = styled.div`
  flex-grow: 1;

  ${props => props.view === 'day' && `
    .rbc-time-header {
        display: none;
    }
    .rbc-day-slot .rbc-timeslot-group .current-time .time-indicator {
        left: -64px !important;
        width: calc(100% + 64px) !important;
    }
    
    ${breakpoints.tablet} {
         .rbc-day-slot .rbc-timeslot-group .current-time .time-indicator {
        left: -84px !important;
        width: calc(100% + 84px) !important;
    }
    }
  `}
    // hide the time indicator for the week/month view
  &.calendar-week,
  &.calendar-month {
    .current-time {
      display: none !important;
    }
  }

  // week view

  &.calendar-week {
    &.calendar-patient .rbc-time-column {
      cursor: pointer;
    }

    .rbc {
      &-event-content {
        ${flex.col};
        ${flex.center};
      }

      &-time-header-gutter {
        width: 65px !important;
        max-width: 65px !important;
        min-width: 65px !important;
      }

      &-time-content {
        border-top: 1px dashed ${borderColor};
        padding-top: 0;
        margin-top: 20px;
      }

      &-header {
        font-size: ${textSizes['12']};
      }

      ${breakpoints.tablet} {
        &-header {
          font-size: ${textSizes['14']};
        }

        &-time-header-gutter {
          width: 85px !important;
          max-width: 85px !important;
          min-width: 85px !important;
        }
      }
    }
  }

  // month view

  &.calendar-month {
    &.calendar-patient {
      .rbc-day-bg {
        background: url(${add}) no-repeat center center / 16px 16px;
      }

      .rbc-month-row {
        cursor: pointer;
      }
    }

    .rbc {
      &-month-header {
        margin: 0 2px;
        height: 40px;
        border-radius: 8px;
        overflow: hidden;
        background-color: ${theme('theme', {
          light: light.bodyBg,
          dark: dark.bodyBg
        })};

        .rbc-header {
          ${flex.col};
          ${flex.center};
          line-height: 1;
          font-weight: 400;
          font-size: ${textSizes['12']};
          border-bottom: none;

          & + .rbc-header {
            border-color: ${borderColor};
          }
        }

        ${breakpoints.tablet} {
          .rbc-header {
            font-size: ${textSizes['14']};
          }

          height: 60px;
        }
      }

      &-month-row {
        margin: 0 2px;

        + .rbc-month-row,
        .rbc-day-bg + .rbc-day-bg {
          border-color: ${borderColor};
        }

        .rbc {
          &-row-content {
            flex-grow: 1;
          }

          &-date-cell {
            font-family: ${fonts.accent};
            font-size: ${textSizes['10']};
            padding: 5px;
            text-align: center;

            &.rbc-now {
              color: ${theme('theme', {
                light: colors.blue,
                dark: '#fff'
              })};
            }
          }

          &-row .event {
            margin: 0 auto;
          }

          &-off-range-bg {
            background-color: ${theme('theme', {
              light: light.highlight,
              dark: dark.highlight
            })};
            background-image: none;
          }
        }
      }

      &-show-more {
        background-color: ${colors.blue};
        font-size: ${textSizes['10']};
        color: #fff;
        font-family: ${fonts.accent};
        font-weight: 400;
        padding: 6px;
        border-radius: 50%;
        margin: 4px auto 0;
      }
    }

    ${breakpoints.tablet} {
      .rbc {
        &-month-row .rbc-date-cell {
          padding: 10px;
          text-align: right;
          font-size: ${textSizes['12']};
        }
      }
    }

    ${breakpoints.laptopL} {
      .rbc {
        &-show-more {
          width: 100%;
          border-radius: 4px;
          margin: 2px 0 0;
        }
      }
    }
  }

  .rbc {
    &-time-view,
    &-month-view {
      padding-bottom: 11px;
      border: none;
    }

    &-time-view {
      margin: 0 2px;
      width: auto;
    }

    &-month-view {
      flex: 1;
      min-height: 670px;
    }

    &-time-content {
      border: none;
      width: unset;
      padding-top: 20px;
      overflow: visible;
      height: 100%;
      align-items: stretch;

      .rbc-time-gutter:first-of-type {
        border-top: 1px ${borderColor} dashed;
      }

      & > * + * > * {
        border-left: 1px ${borderColor} solid !important;
        border-right: none !important;
      }
    }

    &-time-gutter {
      width: 63px;
      position: relative;

      &:before {
        ${labelStyle};
        content: '16:30';
        position: absolute;
        bottom: -10px;
        left: 8px;
        background-color: ${labelColor};
      }

      .time-indicator {
        display: none;
      }

      ${breakpoints.tablet} {
        width: 83px !important;
        &:before {
          left: 18px;
        }
      }
    }

    &-event-content {
      backface-visibility: visible;
    }

    &-time-header {
      border-radius: 8px;
      overflow: hidden;
      height: 40px;
      background-color: ${theme('theme', {
        light: light.bodyBg,
        dark: dark.bodyBg
      })};

      &.rbc-overflowing {
        border: none;
      }

      &-cell {
        height: 100%;
      }

      &-content {
        border-color: ${borderColor};
        margin-left: -2px;
      }

      .rbc-allday-cell {
        display: none;
      }

      .rbc-header {
        ${flex.col};
        justify-content: center;
        border-bottom: none;

        & + .rbc-header {
          border-color: ${borderColor};
        }

        &.rbc-today {
          background-color: ${light.text};
          color: #fff;
        }
      }

      ${breakpoints.tablet} {
        height: 60px;
      }
    }

    &-today,
    &-off-range-bg {
      background-color: transparent;
    }

    &-events-container {
      margin: 0;
    }

    &-time-slot {
      min-height: 40px;

      .rbc-label {
        ${labelStyle};
        position: relative;
        top: -10px;
        background-color: ${labelColor};
      }
    }

    &-timeslot-group {
      position: relative;

      .current-time {
        &:before {
          content: attr(data-time);
          ${labelStyle};
          position: relative;
          top: -10px;
        }

        .time-indicator {
          .label {
            ${labelStyle};
            color: #fff;
            box-shadow: 0 1px 8px rgba(38, 98, 240, 0.4);
          }
        }
      }

      &:last-of-type {
        border: none;

        .rbc-time-slot {
          border: none;
        }
      }
    }

    &-day-slot {
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        height: 20px;
        top: -20px;
        border-left: 1px solid ${borderColor};
      }

      .rbc-time-slot {
        border: none;
      }

      .rbc-timeslot-group {
        .current-time {
          position: relative;
          height: 40px;

          &:before {
            display: none;
          }

          .time-indicator {
            top: 14%;
            display: block;
            height: 1px;
            background-color: ${colors.blue};
            position: absolute;
            z-index: 10;
            left: 0;
            width: 100%;
            transition: top 0.3s ease;

            .label {
              position: absolute;
              left: 8px;
            }

            ${breakpoints.tablet} {
              .label {
                left: 18px;
              }
            }
          }
        }
      }
    }

    &-event {
      border: none;
      border-radius: 0;
      padding: 0;
      background: transparent;
      outline: none;

      &-label {
        display: none !important;
      }
    }

    &-background-event {
      padding: 0;
      pointer-events: none;
      background-color: transparent;
      border: none;
    }

    &-current-time-indicator {
      display: none;
    }
  }


  .rbc-timeslot-group {


    .current-time {


      .time-indicator, .time-indicator .label {
        position: absolute;
      }

      .time-indicator .label {
        background-color: ${colors.blue};
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
      }
    }
  }


  .rbc-timeslot-group {
    border-bottom: 1px dashed ${theme('theme', {
      light: '#DCE2E8',
      dark: '#25292D'
    })};
  }

`;
