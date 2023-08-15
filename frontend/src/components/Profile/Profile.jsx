import { Container } from "./Profile.styles";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
const Profile = () => {
  return (
    <Container>
      <ProfileInfo />
      <ProfilePosts />
    </Container>
  );
};

export default Profile;
