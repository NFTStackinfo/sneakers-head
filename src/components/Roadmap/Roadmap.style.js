import styled from 'styled-components';

export const RoadmapStyle = styled.div`
  padding: 100px 0 300px;

  .title {
    display: flex;
    span {
      opacity: 0;
    }
  }

  .card-container {
    display: flex;
    flex-direction: column;
  }
  .roadmap-card {
    display: flex;
  }

  .card-image {
    min-width: 350px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 300px;
    align-items: center;
    img {
      width: 100%;
      max-width: 192px;
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
    padding: 120px 0 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 80px 0 300px;
  }
`;
