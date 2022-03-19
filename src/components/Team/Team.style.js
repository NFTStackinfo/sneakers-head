import styled from 'styled-components';

export const TeamStyle = styled.section`
  padding: 120px 0;
  overflow: hidden;

  .title {
    padding-bottom: 80px;
    text-align: center;
  }

  .img-wrapper {
    padding-bottom: 16px;

    img {
      display: block;
      width: 100%;
    }
  }

  .name {
    font-family: ${({ theme }) => theme.fonts.secondary};
    padding-top: 4px;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    .icon {
      margin-left: 8px;
    }
  }

  .position {
    margin-top: 4px;
    font-size: 16px;
    text-align: center;
  }
  .team-list {
    display: flex;
    margin-left: -24px;
  }
  .team-card {
    width: 262px;
    min-width: 262px;
    margin-left: 24px;
    img {
      max-width: 175px;
      margin: 0 auto;
    }
  }

  .main-artist {
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    .title {
      padding-bottom: 24px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 80px 0;
    .team-list {
      justify-content: space-between;
      flex-wrap: wrap;
      margin-left: -16px;
    }
    .team-card {
      width: calc((100% / 2) - 16px);
      margin-left: 16px;
      margin-bottom: 16px;

      &:nth-child(even) {
        margin-top: 0;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 60px 0;
    .team-list {
      justify-content: flex-start;
    }
    .team-card {
      width: 100%;
    }
  }
`;
