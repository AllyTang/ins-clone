import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 700px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-around;
  max-width: 620px;
  margin: 30px auto;
  padding-bottom: 40px;

  span {
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: tomato;
    }
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: contain;
    border: 1px solid #ebdddd;
  }
  .verified {
    color: royalblue;
    margin: 0 5px;
  }
  @media (max-width: 500px) {
    img {
      width: 100px;
    }
    .verified {
      font-size: 15px;
    }
    margin: 20px auto;
    font-size: 11px;
    padding: 0;
  }
`;

export const Info = styled.div`
  width: 60%;
  .owner-ID {
    font-size: 30px;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`;

export const Bio = styled.div`
  p {
    margin: 2px 0;
  }
  .category {
    color: gray;
  }
`;

export const PostGrid = styled.div`
  padding: 20px 10px;
  border-top: 1px solid #b5b3b3;
  z-index: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 7px;

  .empty-post-section {
    position: absolute;
    left: 45%;
    color: gray;
  }

  div {
    width: 100%;
    height: 80%;
    position: relative;
    cursor: pointer;
    border-radius: 5px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    object-fit: cover;
  }
`;
