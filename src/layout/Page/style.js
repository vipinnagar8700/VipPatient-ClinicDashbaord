import styled from 'styled-components/macro';
import {breakpoints, flex} from '@styles/vars';

export const Content = styled.div`
  padding: 20px 20px 84px;
  flex-grow: 1;
  height: auto;
  width: 100%;
  display: flex;
  margin-top: var(--header-height);

  ${breakpoints.tablet} {
    padding: 20px 30px 30px;
    ${flex.col};
  }

  ${breakpoints.laptopL} {
    padding: 0;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) and (min-height: 800px) {
    overflow: hidden;
  }
`
export const ContentTitle = styled.h1`
  display: flex;
  align-items: center;
  gap: 18px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-bottom: 20px;

  ${breakpoints.laptopL} {
    margin-top: 40px;
  }

  ${breakpoints.desktop} {
    flex-direction: row;
    ${flex.between};
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 16px;
`

export const Widgets = styled.div`
  ${flex.col};
  width: 100%;
  flex-grow: 1;
`