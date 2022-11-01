import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 0 15vw;
`;

export const StyledSectionWrapper = styled.div`
  height: 40rem;
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 2rem 5rem;

  img {
    border-radius: 15px;
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
