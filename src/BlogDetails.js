// To demonstrate Route parameters so that we can use
// dynamic values to route web pages

import { useParams } from "react-router-dom";

const BlogDetails = () => {
  // Allows us to grab route parameters to fetch specific blogs
  const { id } = useParams();
  return (
    <div className="blog-details">
      <div>Blog details - {id} </div>
    </div>
  );
};

export default BlogDetails;
