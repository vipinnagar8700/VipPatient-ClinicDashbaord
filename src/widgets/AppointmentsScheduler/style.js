import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {effects, dark, flex, light, breakpoints} from '@styles/vars';
import {StyledCalendar} from '@components/AppointmentsCalendar/style';

const borderColor = theme('theme', {
    light: '#DCE2E8',
    dark: '#25292D'
});

export const StyledAppointmentsScheduler = styled(StyledCalendar)`
  .navigator {
    height: 50px;
    margin: 0 2px;
    gap: 0;
    padding: 0;

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

  .rbc-time-header {
    display: none;
  }

  .rbc-time-gutter {
    .icon {
      display: none;
    }
  }

  .rbc-day-slot {
    border-top: ${theme('theme', {
      light: effects.dashedLight,
      dark: effects.dashedDark,
    })};
    cursor: pointer;

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      height: 20px;
      bottom: -20px;
      border-left: 1px solid ${theme('theme', {
        light: '#DCE2E8',
        dark: '#25292D'
      })};
    }
  }

  .rbc-time-view {
    padding-bottom: 20px;
  }

  .rbc-event-content {
    position: relative;

    .event:hover .cover {
      opacity: 1;
      visibility: visible;
    }

    .isEnded {
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  flex-grow: 1;

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;

    &.visible {
      visibility: visible;

      .popup {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .popup {
    position: absolute;
    top: calc(50% + ${props => props.headerHeight}px + 50px);
    left: 50%;
    transform: translate(-50%, calc(-50% - ${props => props.headerHeight / 2}px - 50px));
    background-color: ${theme('theme', {
      light: light.widgetBg,
      dark: dark.bodyBg,
    })};
    padding: 20px;
    border-radius: 8px;
    width: 240px;
    ${flex.col};
    gap: 20px;
    z-index: 50;
    visibility: hidden;
    opacity: 0;
    transition: all var(--transition);
    box-shadow: ${effects.widgetShadow};
    margin-left: 42px;

    .footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
  }
`;