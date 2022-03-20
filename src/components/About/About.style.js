import styled from 'styled-components';

export const AboutStyle = styled.section`
  padding-bottom: 100px;

  .content {
    margin: 0 auto;
    padding-bottom: 100px;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .image {
      img {
        max-width: 548px;
      }
    }
  }

  .content-top {
    display: flex;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 130%;
      height: 130%;
      background-size: 92%;
      z-index: -1;
      background-repeat: no-repeat;
      background-image: url(assets/coming-soon/blur.png);
      right: -25%;
      top: -30%;
    }
  }
  .content-bottom {
    margin-top: 200px;
    display: flex;
  }

  .content-bottom-image {
    margin-right: 120px;
    position: relative;
    flex: 1 100%;
    z-index: 1;
    img {
      width: 100%;
      min-width: 542px;
    }
    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 130%;
      height: 130%;
      background-size: 92%;
      z-index: -1;
      background-repeat: no-repeat;
    }
    &::after {
      background-image: url(assets/blur.png);
      left: -40%;
      bottom: -35%;
    }
    &::before {
      background-image: url(assets/blurPurple.png);
      right: -45%;
      top: -30%;
    }
  }
  .content-bottom-text {
    flex: 1 100%;
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    letter-spacing: 0.04em;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .title {
    padding-bottom: 48px;
    text-align: center;
  }

  .text {
    padding-bottom: 40px;
    width: 80%;

    &.pull-right {
      margin-left: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 80px 0;
    .text {
      padding-bottom: 32px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 60px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .text {
      padding-bottom: 24px;
      width: 100%;

      &.pull-right {
        margin-left: inherit;
      }
    }
  }
`;
