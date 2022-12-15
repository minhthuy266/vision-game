import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 0 12.5vw;
  margin-bottom: 4rem;

  @media only screen and (min-width: 120.0625em) {
    padding: 0 calc((100vw - 1440px) / 2);
  }

  @media only screen and (max-width: 93.75em) {
    padding: 0 8vw;
  }

  @media only screen and (max-width: 75em) {
    padding: 0 6vw;
  }

  @media only screen and (max-width: 62.5em) {
    padding: 0 4vw;
  }

  @media only screen and (max-width: 28.125em) {
    padding: 0 2vw;
  }
`;

export const StyledSectionWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 2rem 4rem;

  @media only screen and (max-width: 31.25em) {
    padding: 2rem;
  }

  img {
    border-radius: 12px;
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }

  .swiper {
    padding-bottom: 4rem;
  }

  .swiper-pagination {
    position: relative;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: -30px;
  }
`;
