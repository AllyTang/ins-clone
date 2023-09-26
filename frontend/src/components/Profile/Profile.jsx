import NavBar from "../Navbar/Navbar";
import { Container } from "./Profile.styles";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
const Profile = () => {
  return (
    <Container>
      <NavBar />
      <ProfileInfo />
      <ProfilePosts />
    </Container>
  );
};

export default Profile;
