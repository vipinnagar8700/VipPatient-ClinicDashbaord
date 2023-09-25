import styled from 'styled-components/macro';
import {colors, flex} from '@styles/vars';
import {aura} from '@styles/keyframes';

export const PainLocationWrapper = styled.div`
  height: 100%;

  .tab-content, .tab-pane, .wrapper {
    height: 100%;
  }
`;

export const Rotate = styled.span`
  cursor: pointer;
  position: absolute;
  right: 24px;
  z-index: 10;
  transition: .3s ease-in-out;

  &:hover, &:focus {
    color: ${colors.blue};
  }
`;

export const BodyChart = styled.div`
  height: 100%;
  ${flex.col};
  gap: 14px;
  justify-content: space-between;
  align-items: center;

  .chart_content {
    position: relative;
    margin: auto;
    justify-self: center;
  }
`;

export const View = styled.div`
  display: flex;
  ${flex.center};
  width: fit-content;
  margin: 0 auto;
  position: relative;
  height: 590px;

  img {
    width: auto;
    height: 100%;
  }
`;

export const Spots = styled.fieldset`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Spot = styled.div`
  position: absolute;

  &[data-spot="head_front"],
  &[data-spot="neck_front"],
  &[data-spot="stomach_front"],
  &[data-spot="back_back"],
  &[data-spot="lungs_back"] {
    left: 50%;
    transform: translateX(-50%);
  }

  &[data-spot="head_front"] {
    top: 0;
  }

  &[data-spot="neck_front"] {
    top: 100px;
  }

  &[data-spot="chest_front"] {
    top: 130px;
    left: 80px;
  }

  &[data-spot="heart_front"] {
    top: 160px;
    right: 80px;
  }

  &[data-spot="stomach_front"] {
    top: 220px;
  }

  &[data-spot="left_arm_front"],
  &[data-spot="right_arm_front"] {
    top: 240px;
  }

  &[data-spot="left_arm_front"] {
    left: 40px;
  }

  &[data-spot="right_arm_front"] {
    right: 40px;
  }

  &[data-spot="left_leg_front"],
  &[data-spot="right_leg_front"] {
    top: 360px;
  }

  &[data-spot="left_leg_front"] {
    left: 80px;
  }

  &[data-spot="right_leg_front"] {
    right: 80px;
  }

  &[data-spot="back_back"] {
    top: 240px;
  }

  &[data-spot="left_shoulder_back"],
  &[data-spot="right_shoulder_back"] {
    top: 130px;
  }

  &[data-spot="left_shoulder_back"] {
    left: 60px;
  }

  &[data-spot="right_shoulder_back"] {
    right: 60px;
  }

  &[data-spot="lungs_back"] {
    top: 200px;
  }

  &[data-spot="left_ankle_back"],
  &[data-spot="right_ankle_back"] {
    bottom: 20px;
  }

  &[data-spot="left_ankle_back"] {
    left: 85px;
  }

  &[data-spot="right_ankle_back"] {
    right: 85px;
  }

  input {
    display: none;

    &:checked + label {
      opacity: 1;

      .aura:before {
        animation-play-state: running;
      }
    }
  }

  label {
    display: block;
    background-color: ${colors.absolute_red};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transition: .3s ease-in-out;
    position: relative;
    z-index: 2;
    opacity: .4;

    &:hover, &:focus {
      opacity: 1;
    }

    .aura {
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: -10;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        background-color: ${colors.absolute_red};
        transform: translate3d(0, 0, 0);
        animation: ${aura} 3s ease-in-out infinite;
        animation-play-state: paused;
      }
    }
  }
`;