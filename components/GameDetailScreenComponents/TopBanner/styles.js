import styled from "styled-components";

export const StyledTopBannerContainer = styled.div`
  img.banner-img {
    margin-right: 2rem;
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
  display: flex;

  img {
    margin-right: 2rem;
    cursor: pointer;
  }

  .ant-btn {
    margin-right: 2rem;
    background: #23a8f5;
    border-radius: 8px;
    border-color: #23a8f5;
    height: 4rem;
    width: 13rem;

    span {
      font-weight: 600;
      font-size: 1.7rem;
      line-height: 2.4rem;
      color: #ffffff;
    }
  }
`;
