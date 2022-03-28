import styled from 'styled-components';

export const ComingSoonStyle = styled.main`
  background: url('assets/coming-soon/coming-bg.png');
  background-position: center center;
  background-size: cover;
  position: relative;
  font-family: 'Exo 2', sans-serif;
  font-weight: 250;
  .content {
    display: flex;
    align-items: center;
    min-height: 100vh;
    padding: 80px 60px;
    position: relative;
    z-index: 1;
  }
  span {
    font-weight: 200;
    font-size: 16px;
    a {
      text-decoration: underline;
      font-weight: 40;
    }
  }
  .top {
    font-size: 21px;
    letter-spacing: 30px;
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    top: 40px;
    ul {
      margin-top: 20px;
      display: flex;
      .social-btn {
        margin-right: 20px;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: 0.5s;

        .icon {
          path {
            fill: ${({ theme }) => theme.colors.white};
            transition: 0.5s;
          }
        }

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};

          .icon {
            path {
              fill: ${({ theme }) => theme.colors.black};
            }
          }
        }
      }
    }
  }
  .left {
    width: 480px;
    height: 640px;
  }
  .right {
    flex: 1;
    margin-left: 40px;
    max-width: 670px;
    .title {
      display: inline-block;
      text-transform: capitalize;
      font-weight: 400;
      font-size: 120px;
      font-family: 'Fugaz one', cursive;
      letter-spacing: 0;
      text-transform: uppercase;
      text-align: end;
      line-height: 80%;
      letter-spacing: -6px;
    }
    .text {
      padding-bottom: 24px;
      font-weight: 200;
      font-size: 16px;
      margin: 32px 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    .right {
      .title {
        font-size: 100px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    &:after {
      background-position: 100px 0;
    }
    .left {
      padding-bottom: 48px;
      width: 400px;
      height: 532px;
    }
    .right {
      padding-left: 0;
      margin: 0;
      .title {
        font-size: 80px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    &:after {
      background-position: 100px 0;
    }

    .content {
      flex-direction: column;
      padding: 80px 40px;
      padding-top: 128px;
      .top {
        top: 30px;
      }
    }
    .left {
      padding-left: 0;
      padding-bottom: 40px;
      max-width: 426px;
      height: 566px;
    }
    .right {
      padding-left: 0;
      .title {
        font-size: 80px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    &:after {
      background-position: -50px 0;
    }
    .left {
      width: 100%;
      height: 408px;
    }
    h4 {
      letter-spacing: 15px;
    }
    .content {
      padding: 80px 20px;
      padding-top: 128px;
    }
    .right {
      .title {
        font-size: 56px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    &:after {
      background-position: -50px 0;
    }
    h4 {
      letter-spacing: 10px;
    }
    .content {
      padding-top: 80px;
      .left {
        width: 100%;
        height: 300px;
      }
      .right {
        .title {
          font-size: 46px;
          letter-spacing: -3px;
        }
      }
    }
  }
`;
