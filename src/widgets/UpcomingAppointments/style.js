import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, textSizes, light, dark, flex, effects} from '@styles/vars';

export const RangePickerWrapper = styled.div`
  margin-top: -15px;

  .row {
    display: flex;
    ${flex.between};
    position: relative;
    z-index: 1;

    .display {
      display: flex;
      gap: 4px;
      border-bottom: 1px dashed ${colors.blue};
      padding-bottom: 2px;
      color: ${colors.blue};
      font-size: ${textSizes['14']};
      cursor: pointer;
      width: fit-content;
    }
  }

  .ant-picker {
    &-suffix, &-separator, &-input {
      display: none;
    }

    &-range-wrapper {
      min-width: unset !important;
      max-width: 100%;
      overflow: hidden;
    }
    
    &-panel-container {
      margin-left: 0 !important;
    }

    &-panels {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      border-radius: 8px;
      overflow: hidden;
      margin: 10px;
    }

    &-month-panel {
      background-color: ${theme('theme', {
        light: light.bodyBg,
        dark: dark.bodyBg,
      })};
      box-shadow: ${effects.widgetShadow};
      padding-bottom: 10px;
    }

    &-header-view {
      text-align: center;

      button {
        font-weight: 700;
      }
    }

    &-content {
      margin: -10px auto 0;
      font-size: ${textSizes['14']};

      td {
        padding: 2px;
        cursor: pointer;

        &.ant-picker-cell-range {
          &-start, &-end {
            color: ${colors.blue};
          }
        }
      }
    }
  }
`;