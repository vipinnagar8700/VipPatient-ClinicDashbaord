import {createGlobalStyle} from 'styled-components';
import theme from 'styled-theming'
import {colors, dark, breakpoints, effects, flex, fonts, light, textSizes} from './vars'
import {rgba} from 'polished';

const body = theme('theme', {
    light: light.bodyBg,
    dark: dark.bodyBg
})

const text = theme('theme', {
    light: light.text,
    dark: dark.text
})

export default createGlobalStyle`

  // --- layout ---

  #root, #root .app {
    min-height: 100vh;
  }

  .app {
    ${flex.col};
    justify-content: stretch;

    &_content {
      ${flex.col};
      flex-grow: 1;
    }

    ${breakpoints.laptopL} {
      padding: 40px;
      align-items: flex-end;

      .app_content {
        width: calc(100% - var(--drawer-width));
        flex-grow: 1;
        height: auto;
      }
    }
  }

  .content_layout {
    margin: -24px;
    flex-grow: 1;
    width: calc(100% + 48px);

    .react-grid-item {
      &.react-draggable {
        opacity: .5;
        cursor: move;

        * {
          user-select: none;
          pointer-events: none;
        }
      }
    }

    .react-grid-placeholder {
      background: transparent;
      opacity: 1;
      border-radius: 10px;
      border: ${theme('theme', {
        light: '3px dashed #A2C0D4',
        dark: '3px dashed #242223'
      })};
    }
  }

  // --- reset ---

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -webkit-font-smoothing: antialiased;

    &:not(.rbc-calendar *) {
      backface-visibility: hidden;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  html, body {
    overflow-x: hidden;
    min-height: 100vh;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a, input, button, textarea {
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    border: none;
    cursor: pointer;
  }

  // iOS fix
  button[type="submit"] {
    font-weight: 400 !important;
  }

  input, textarea {
    &[readonly] {
      cursor: default;
    }

    &::placeholder {
      transition: opacity var(--transition);
    }

    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }
  }

  textarea {
    resize: none;
  }

  fieldset {
    border: none;
  }

  label {
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  // --- global theme styles ---

  :root {
    --transition: .3s ease-in-out;
    --drawer-width: 260px;
  }

  html {
    --font-scale: 1;
    font-size: calc(100% * var(--font-scale));
    overscroll-behavior-y: none;

    &.no-transition * {
      transition: none !important;
    }

    &.no-scroll {
      overflow: hidden;
    }

    &.contrast {
      filter: ${theme('theme', {
        light: 'contrast(150%)',
        dark: 'brightness(200%)'
      })};
    }

    // better fit for 4k screens
    @media screen and (min-width: 2048px) {
      &[data-ratio="1"] {
        zoom: 1.25;
      }
    }
  }

  body {
    font-family: ${fonts.body};
    font-size: 1rem;
    background-color: ${body};
    color: ${text};
    padding: 0 !important;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .has-overflow {
    position: relative;
  }

  // --- typography ---

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: ${fonts.accent};
    font-weight: 500;
    display: flex;
    flex-grow: 1;
  }

  h1, .h1 {
    font-size: ${textSizes['20']};
    line-height: 1.4;
  }

  h2, .h2 {
    font-size: ${textSizes['18']};
    line-height: 1.1;
  }

  h3, .h3 {
    font-size: ${textSizes['16']};
    line-height: 1.25;
  }

  ${breakpoints.tablet} {
    h1, .h1 {
      font-size: ${textSizes['24']};
    }
  }

  ${breakpoints.laptop} {
    h1, .h1 {
      font-size: ${textSizes['28']};
    }
  }

  // --- RTL ---

  html[dir="rtl"] {
    .icon-chevron-left,
    .icon-chevron-right {
      display: inline-block;
      transform: rotate(180deg);
    }
  }

  // bootstrap components

  .collapse {
    &:not(.show) {
      display: none;
    }
  }

  .collapsing {
    height: 0;
    overflow: hidden;
    transition: height .4s ease;
  }

  .tab-pane {
    display: none;
    height: 100%;

    &.active {
      display: block;
      opacity: 0;
      transition: opacity var(--transition);
    }

    &.show {
      opacity: 1;
    }
  }

  // notistack overrides

  .SnackbarContainer-root {
    z-index: 2000000 !important;
  }

  // MUI overrides

  .MuiPaper-root {
    color: ${text} !important;
    box-shadow: ${effects.widgetShadow} !important;

    &.sidebar {
      background-color: ${body};
    }

    &.date-picker, &.MuiDialog-paper {
      border-radius: 8px;
      background-color: ${theme('theme', {
        light: '#fff',
        dark: light.text
      })};
    }

    div[role="presentation"] {
      overflow: visible !important;
      min-height: 250px;

      &.MuiPickersCalendarHeader-labelContainer {
        margin: 0;
        gap: 16px;
        flex-grow: 1;
        justify-content: flex-start;

        .MuiPickersCalendarHeader-label,
        .MuiPickersCalendarHeader-switchViewButton {
          margin: 0;
        }
      }
    }

    .MuiPickersCalendarHeader-root {
      padding: 0 24px;
      margin-top: 24px;
    }

    .MuiButtonBase-root, .MuiTypography-root {
      color: ${text} !important;
    }

    .MuiButtonBase-root {
      background-color: ${theme('theme', {
        light: light.highlight,
        dark: dark.highlight
      })} !important;
      transition: var(--transition) !important;
      line-height: 1 !important;

      &:hover, &:focus, &.Mui-selected {
        background-color: ${colors.blue} !important;
        color: #fff !important;
      }

      &.MuiPickersDay-today {
        border-color: ${colors.blue} !important;
      }

      &[disabled] {
        opacity: .6;
      }
    }
  }

  // RBC overrides
  
  .rbc-event {
    border: none !important;
  }
  
  .rbc-background-event {
    padding: 0 !important;
    background-color: transparent !important;
    border-radius: 0 !important;
    border: none !important;
  }

  .rbc-day-slot .rbc-events-container {
    margin-right: 0 !important;
  }

  .rbc-slot-selection {
    background-color: ${theme('theme', {
      light: rgba(light.bodyBg, .7),
      dark: rgba(dark.bodyBg, .5)
    })};
    font-size: 0;
  }

  .rbc-overlay {
    padding: 16px;
    border-radius: 8px;
    background-color: #fff;
    width: max-content;
    min-width: unset !important;

    &-header {
      font-size: ${textSizes['14']};
      font-family: ${fonts.accent};
      color: ${light.text};
      border: none;
      padding: 0;
      margin: 0 0 10px;
    }

    div[type="popup"] {
      background-color: transparent;
      padding: 0;
      outline: none !important;

      .event {
        display: flex;
        align-items: center;
        flex-direction: row !important;
        justify-content: flex-start !important;
        gap: 10px;
        height: unset !important;
        border-radius: 0;
        background-color: transparent;
        margin-bottom: 5px;
        cursor: default;

        &-title {
          display: block;
          color: ${light.text};
          font-size: ${textSizes['12']};
        }

        .cover, &:after {
          display: none;
        }

        .overlay {
          order: -1;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: relative;
          cursor: pointer;
        }

        &[type="test"] {
          .overlay {
            background-color: ${colors.teal};
          }
        }

        &[type="consultation"] {
          .overlay {
            background-color: ${colors.azure};
          }
        }

        &[type="sick"] {
          .overlay {
            background-color: ${colors.orange};
          }
        }

        &[type="emergency"] {
          .overlay {
            background-color: ${colors.red};
          }
        }

        &[type="checkup"] {
          .overlay {
            background-color: ${colors.purple};
          }
        }
      }

      &:last-of-type .event {
        margin-bottom: 0;
      }
    }
  }
`