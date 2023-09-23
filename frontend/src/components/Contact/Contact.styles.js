import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #b5b3b3;
    margin: 10px 0;
  }

  .email {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .social-media {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 0;
    font-size: 22px;

    .handle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;

      a {
        text-decoration: none;
        color: black;
        margin: 0 3px;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 500px) {
      flex-direction: column;
      font-size: 17px;

      .handle {
        width: 100%;
        justify-content: space-evenly;
      }
    }
  }
`;
