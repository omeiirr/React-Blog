import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setblogs] = useState([
    { title: "Blog 1", body: "Lorem ipsum...", author: "Brad", id: "1" },
    { title: "Blog 2", body: "Lorem ipsum...", author: "Matt", id: "2" },
    { title: "Blog 3", body: "Lorem ipsum...", author: "Brad", id: "3" },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setblogs(newBlogs);

    // Does not change data.
    // Returns modief array copy.
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Brad")}
        title="Brad's Blogs"
      />
    </div>
  );
};

export default Home;
