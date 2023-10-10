import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, UserStory } from "./Stories.styles";

export default function Stories() {
  const profiles = useSelector((state) => state.profile.profileData);
  const [width, setWidth] = useState(window.innerWidth);
  function handleResize() {
    setWidth(window.innerWidth);
  }
  const PrevArrow = ({ currentSlide, slideCount, ...arrowProps }) => (
    <ArrowBackIosIcon {...arrowProps} />
  );

  const NextArrow = ({ currentSlide, slideCount, ...arrowProps }) => (
    <ArrowForwardIosIcon {...arrowProps} />
  );
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: width < 400 ? 4 : width < 768 ? 5 : 7,
    slidesToScroll: width < 400 ? 3 : width < 768 ? 4 : 5,
    autoplay: false,
    prevArrow: width < 770 ? <></> : <PrevArrow />,
    nextArrow: width < 770 ? <></> : <NextArrow />,
  };
  return (
    <Container {...settings}>
      {profiles.map((profile, i) => (
        <UserStory key={i}>
          <Link to={`/profile/${profile.userID}`}>
            <img
              src={`http://localhost:8000/api/profiles/image/${profile.userID}`}
              alt="user story"
            />
          </Link>
          <p>{profile.name}</p>
        </UserStory>
      ))}
    </Container>
  );
}
