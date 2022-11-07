import styled from "styled-components";

export const StyledTopBannerContainer = styled.div`
  img.banner-img {
    /* margin-right: 2rem; */
    cursor: pointer;
    width: 100vw;
    height: 50vh;
    object-fit: cover;
  }
`;

export const StyledGameIcon = styled.div`
  position: absolute;
  bottom: -3rem;
`;

export const StyledGroupBtn = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 19rem;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 2rem;

  @media only screen and (max-width: 56.25em) {
    left: 22rem;
  }

  @media only screen and (max-width: 46.875em) {
    grid-template-columns: repeat(2, auto);
  }

  @media only screen and (max-width: 31.25em) {
    bottom: -16rem;
    left: 0;
  }

  img {
    cursor: pointer;
  }

  .ant-btn {
    background: #23a8f5;
    border-radius: 8px;
    border-color: #23a8f5;
    height: 40px;
    width: 130px;

    @media only screen and (max-width: 46.875em) {
      margin-right: 0;
    }

    span {
      font-weight: 600;
      font-size: 1.7rem;
      line-height: 2.4rem;
      color: #ffffff;
    }
  }
`;
