import styled from 'styled-components/macro';

export const Navigation = styled.div`
  .tabs {
    padding: 24px;
  }
`;

export const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-top: 24px;
`;

export const Footer = styled.div`
  .btn-wrapper {
    padding: 24px;

    .group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
  }
`