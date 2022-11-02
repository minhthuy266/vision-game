import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 0 15vw;
  margin-bottom: 4rem;

  @media only screen and (min-width: 120.0625em) {
    padding: 0 calc((100vw - 1332px) / 2);
  }
`;

export const StyledSectionWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 2rem 4rem;

  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
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
