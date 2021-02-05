import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setblogs] = useState(null);

  // delete function defined in Home.js instead of BlogList.js
  // so that we can interact with data directly.
  // But, we will need to pass this function as a prop.

  //  Deprecated after delete functionality moved to db.json
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setblogs(newBlogs);

  // Does not change data.
  // Returns modified array copy.

  const [name, setName] = useState("Fawaz");

  useEffect(() => {
    console.log("useEffect ran");
    console.log(blogs);

    // Cannot use async await here, so we will use .then
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        setblogs(data);
        console.log(data);
      });
  }, [name]);

  // useEffect runs every time there is  a re-render,
  // first, when the DOM loads, then everytime the data changes.

  // But sometimes, we don't want it to run on EVERY render
  // So, we pass a dependency array to useEffect as an argument

  // If we pass an empty dependency array, useEffect only runs  on the first render
  // and not anymore if we make any changes to the data.

  // Add to the dependency array any values that when hanged, will trigger useEffect

  return (
    <div className="home">
      {blogs && (
        // blogs && because we are waiting for the blogs to load
        // At the first page load, the blogs = null, so it doesn't evaluate the further expression

        <div>
          <BlogList blogs={blogs} title="All Blogs" />
          <BlogList
            blogs={blogs.filter((blog) => blog.author === "Brad")}
            title="Brad's Blogs"
          />
          <button onClick={() => setName("Omeir")}>Change Name Below</button>
          <p>{name}</p>
        </div>
      )}
    </div>
  );
};
export default Home;
