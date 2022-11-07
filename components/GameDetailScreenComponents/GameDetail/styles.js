import styled from "styled-components";

export const StyledGameDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > div:nth-child(2) {
    box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
    border-radius: 12px;
  }
`;

export const StyledTitle = styled.div`
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 4rem;
  color: #066398;
  margin-top: 6rem;

  @media only screen and (max-width: 31.25em) {
    margin-top: 24rem;
  }
`;

export const StyledGenre = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #bababb;
  padding: 1.2rem 0;
`;

export const StyledStar = styled.div`
  span.ant-rate-text {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #bababb;
  }
`;

export const StyledDescription = styled.div`
  margin-top: 2rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: grid;
  grid-template-columns: 55% calc(45% - 2rem);
  grid-gap: 2rem;

  @media only screen and (max-width: 43.75em) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 50rem;
  }
`;

export const StyledSlider = styled.div`
  margin-top: 4rem;

  img {
    @media only screen and (max-width: 112.5em) {
      width: 92%;
      height: auto;
    }
  }
`;

export const StyledDescriptionLeft = styled.div`
  .swiper-wrapper {
    width: 50%;
    height: 100%;
  }
`;

export const StyledJoinCommunity = styled.div`
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1.2rem 0;
  background: #1088cd;
  border-radius: 12px 12px 0px 0px;
  text-align: center;
  color: #fff;
  justify-content: center;
`;

export const StyledDescriptionRight = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  margin-top: -12rem;

  @media only screen and (max-width: 43.75em) {
    margin-top: 2rem;
  }
`;
