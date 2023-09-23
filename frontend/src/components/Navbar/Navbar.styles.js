import styled from "styled-components";

export const OtherIcons = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: #2f2d2d;
    margin: 0 5px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
export const InputField = styled.div`
  border: 1px solid hsl(147, 7%, 75%);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin: 0 10px;
    color: #2f2d2d;
  }

  input {
    border: none;
    height: 25px;
    width: 90%;
    outline: none;
  }
`;
export const NavBar = styled.nav`
  background-color: white;
  height: 55px;
  border-bottom: 1px solid hsl(147, 7%, 75%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  #nav-items {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    background-color: white;

    .dropdown-menu {
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;

        &:hover {
          border: 2px solid violet;
        }
      }

      .tooltip.active {
        display: block;
      }

      .tooltip {
        display: none;
        position: absolute;
        top: 60px;
        right: 160px;
        border: 1px solid hsl(147, 7%, 75%);
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;

        a {
          text-decoration: none;
          color: black;
          background: transparent;
        }

        &:hover {
          background: #1c2022;
          a {
            color: white;
          }
        }
        @media (max-width: 768px) {
          right: 5px;
          top: 60px;
        }
      }
    }

    img {
      max-width: 100px;
      margin: 0 20px 0;
    }

    @media (max-width: 768px) {
      width: 100%;

      .inputField {
        display: none;
      }

      .otherIcons {
        margin: 0;
      }
    }
  }

  .dropdown-items {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    width: 200px;
    position: absolute;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    padding: 8px 15px;
    border-radius: 4px;
    background-color: #fff;
  }
  .dropdown-item {
    padding-top: 0px;
    padding-bottom: 0px;
    cursor: pointer;
  }
  .isVisible {
    visibility: visible;
  }
  .isHidden {
    visibility: hidden;
  }
`;
