export default function TrialApp() {
  const text = "Component";
  const number_of_likes = 50;

  const address = { city: "Delhi", state: "New Delhi" };
  const isEligible = false;

  var link = "github.com";

  return (
    <div className="App">
      {/* className is mainly for CSS */}

      <h1>{text}</h1>
      {/* Everything is converted to string before being displayed on the browser */}
      <h4>This was liked {number_of_likes} times</h4>

      {/* <p>{address}</p>
      <p>{isEligible}</p> */}
      {/* Objects and Booleans cannot be output */}

      <p>10 + 5 = {10 + 5}</p>
      {/* Any JS expression is valid */}

      <p>Random number between 0 and 5 : {Math.floor(Math.random() * 5)}</p>
      <p>Website : {link} </p>
    </div>
  );
}
