import { colors, dark, flex, light, textSizes, breakpoints, fonts } from '@styles/vars';
import styled from 'styled-components/macro';
import { colorTypes } from '@constants/colors';
import theme from 'styled-theming';
import { ModalContent } from '@components/ModalWindow';

const disabled = theme => theme === 'dark' ? light.text : '#DCE2E8';

const available = theme => theme === 'dark' ? dark.bodyBg : light.bodyBg;

export const StyledEvent = styled.div`
  background-color: ${props => props.type !== 'disabled' && props.type !== 'available' && colors[colorTypes.find(color => color.cat === props.type).color]};
  transition: background-color var(--transition), opacity var(--transition);
  position: relative;

  .cover {
    display: flex;
    ${flex.center};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.blue};
    color: #fff;
    z-index: 30;
    visibility: hidden;
    opacity: 0;
    transition: opacity var(--transition), visibility var(--transition);
    font-size: ${textSizes['16']};
  }

  ${props => props.type === 'disabled' && `
    width: 100% !important;
    height: 100% !important;
    border-radius: 0 !important;
    transform: scaleX(-1);
    background-size: 10px 10px;
    background-image: repeating-linear-gradient(45deg, ${disabled(props.mode)} 0,
     ${disabled(props.mode)} 1px, transparent 0, transparent 50%);
     pointer-events: none;
  `};

  ${props => props.type === 'available' && `
    width: 100% !important;
    height: 100% !important;
    border-radius: 0 !important;
    background-color: ${available(props.mode)};
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  `};
  
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 1px);
    mix-blend-mode: luminosity;
    background-color: ${theme('theme', {
  light: light.bodyBg,
  dark: dark.bodyBg
})};
    opacity: ${theme('theme', {
  light: 1,
  dark: 0.8
})};
    display: ${props => props.type !== 'disabled' && props.type !== 'available' ? 'block' : 'none'};
  }

  &.isEnded {
    background-color: ${props => props.type !== 'disabled' && props.type !== 'available' && colors.gray};
    opacity: ${props => props.type !== 'disabled' && props.type !== 'available' && .5};
  }
  
  .icon {
    color: ${colors.blue};
  }

  .event-title {
    font-size: ${textSizes['14']};
    position: relative;
    color:green;
    z-index: 2;
   
})};
    line-height: 20px;
  }

  &.event-day {
    padding: 8px 20px;
    font-size: ${textSizes['14']};
    min-height: 40px;
    height: 100%;
    ${flex.col};
    ${flex.center};
    text-align: center;
  }

  &.event-week, &.event-month {
    width: 8px;
    height: ${props => props.slots * 8}px;
    border-radius: 4px;

    &:after {
      display: none;
    }
    
    .event-title {
      display: none;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  ${breakpoints.laptopL} {
    &.event-week, &.event-month {
      width: 100%;
      height: 100%;
      border-radius: unset;
      ${flex.col};
      ${flex.center};

      &:after {
        display: ${props => props.type !== 'disabled' && props.type !== 'available' ? 'block' : 'none'};
      }

      .event-title {
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        max-width: calc(100% - 20px);
      }
    }
    
    &.event-month {
      ${props => props.type === 'available' && `
        padding: 8px 20px;
      `};
    }
  }
`;

export const EventModal = styled(ModalContent)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px 30px;
  position: relative;

  .block {
    &:first-of-type {
      width: 100%;
    }

    ${flex.col};
    gap: 8px;

    .label {
      font-size: ${textSizes['12']};
      color: ${colors.gray};
      font-family: ${fonts.accent};
    }

    .value {
      display: inline-flex;
      gap: 4px;
      font-size: ${textSizes['14']};
    }
  }

  ${breakpoints.tablet} {
    max-width: 350px;
    margin: 0 auto;
  }
`;