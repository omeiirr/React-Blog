import { Link } from "react-router-dom";
// Link is used to stop the request for a webpage from going to the server
// Instead, the React Router intercepts it injects the necessary code into the DOM
// Underneath, it still uses the anchor <a> tag.

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog</h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
