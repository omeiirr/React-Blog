import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  // delete function defined in Home.js instead of BlogList.js
  // so that we can interact with data directly.
  // But, we will need to pass this function as a prop.

  //  Deprecated after delete functionality moved to db.json
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setblogs(newBlogs);

  // Does not change data.
  // Returns modified array copy.

  // const [name, setName] = useState("Fawaz");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading. . . </div>}
      {blogs && (
        // blogs && because we are waiting for the blogs to load
        // At the first page load, the blogs = null, so it doesn't evaluate the further expression

        <div>
          <BlogList blogs={blogs} title="All Blogs" />

          {/* Demonstration for filter
          <BlogList
            blogs={blogs.filter((blog) => blog.author === "Brad")}
            title="Brad's Blogs"
          />
          */}

          {/* Demonstration for useState */}
          {/* <button onClick={() => setName("Omeir")}>Change Name Below</button>
          <p>{name}</p> */}
        </div>
      )}
    </div>
  );
};
export default Home;
