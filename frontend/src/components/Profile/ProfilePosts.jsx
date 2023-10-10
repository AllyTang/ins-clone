import { PostGrid } from "./Profile.styles";
import { useParams, Link } from "react-router-dom";
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
        filteredPosts.map((post) => {
          return (
            // <Link key={post.postID} to={`/profile/${id}`}>
            <div key={post.postID}>
              <div className="overlay"></div>
              <img
                alt="post"
                src={`http://localhost:8000/api/posts/image/${post._id}`}
              />
            </div>
            // </Link>
          );
        })
      ) : (
        <h2 className="empty-post-section">No Posts Yet!</h2>
      )}
    </PostGrid>
  );
};

export default ProfilePosts;
