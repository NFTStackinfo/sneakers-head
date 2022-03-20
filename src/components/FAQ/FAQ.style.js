import styled from 'styled-components';

export const FAQStyle = styled.section`
  padding: 160px 0;

  .faq-content {
    display: flex;

    .left {
      position: relative;
      z-index: 1;
      &::after {
        content: '';
        position: absolute;
        width: 130%;
        height: 130%;
        background-image: url(assets/blur.png);
        background-size: 92%;
        top: -20%;
        z-index: -1;
        left: -15%;
        background-repeat: no-repeat;
      }
      margin-right: 1.5rem;
      img {
        width: 100%;
        max-width: 548px;
      }
    }

    .right {
      flex: 1;
      padding-left: 24px;
    }
  }

  .Collapsible {
    border-bottom: 1px solid #0fb7ff;
  }

  .Collapsible__trigger {
    display: block;
    border-radius: 16px 16px 0 0;

    &.is-open {
      .icon {
        transform: rotate(180deg);
      }
    }
  }

  .Collapsible__contentInner {
    padding-bottom: 24px;
    font-size: 16px;
    user-select: none;
    font-weight: 500;
  }

  .trigger-inner {
    position: relative;
    font-weight: 900;
    padding: 16px 40px 30px 0;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
    text-transform: uppercase;

    .icon {
      position: absolute;
      top: 10px;
      fill: white;
      right: 0;
      transition: 0.5s;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 120px 0;

    .faq-content {
      .left {
        width: 360px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .faq-content {
      flex-direction: column;
      .left {
        width: 100%;

        .title {
          padding-bottom: 12px;
        }
      }
      .right {
        padding-left: 0;
      }
    }
  }
`;
