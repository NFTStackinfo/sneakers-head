import styled from 'styled-components';

export const RoadmapStyle = styled.div`
  padding: 100px 0;
  background-color: #10072a;
  background-image: linear-gradient(
    180deg,
    #10072a 0%,
    #10072a 92%,
    #100b36 100%
  );

  ba .title {
    display: flex;
    span {
      opacity: 0;
    }
  }

  .cards-container {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
  }
  .roadmap-card {
    display: flex;
  }

  .card-image {
    min-width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 300px;
    align-items: center;
    position: relative;
    border-radius: 100px;
    overflow: hidden;
    img {
      width: 100%;
      max-width: 192px;
      z-index: 3;
    }
    &::after {
      content: '';
      position: absolute;
      width: 100% !important;
      height: 100% !important;
      box-shadow: inset 1px 0px 19px 20px #100729;
      z-index: 1;
      top: 0;
      left: 0;
      border-radius: 100px;
    }
    canvas {
      position: absolute;
      width: 100% !important;
      height: 100% !important;
      border-radius: 110px;
      z-index: 0;
      top: 0;
      left: 0;
    }
  }

  .card-info {
    margin-left: 20px;
    text-align: left;
    span {
      font-size: 12px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    h4 {
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      margin: 4px 0 24px 0;
      text-transform: uppercase;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 80px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .roadmap-card {
      flex-direction: column;
      margin-bottom: 24px;
    }
  }
`;
