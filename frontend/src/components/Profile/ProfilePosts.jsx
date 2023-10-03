import { PostGrid } from "./Profile.styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfilePosts = () => {
  const { id } = useParams();
  const postData = useSelector((state) => state.post.postData);
  let filteredPosts = postData.filter((post) => {
    return post.userID === id;
  });
  return (
    <PostGrid>
      {filteredPosts.length ? (
        filteredPosts.map((post, index) => {
          return (
            <div key={`${index}-${post.userID}`}>
              <img src={post.postLink} alt="post" />
            </div>
          );
        })
      ) : (
        <h2 className="empty-post-section">No Posts Yet!</h2>
      )}
    </PostGrid>
  );
};

export default ProfilePosts;
