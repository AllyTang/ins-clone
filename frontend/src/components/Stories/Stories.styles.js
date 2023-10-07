import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled(Slider)`
  border: 1px solid hsl(147, 7%, 75%);
  border-radius: 4px;
  width: 45%;
  margin: 20px 0 20px 200px;
  padding: 10px 0;

  svg {
    color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
  }
`;

export const UserStory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: min-content;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin-left: 7px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #8134af;
  }
`;
