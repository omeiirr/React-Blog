import { useState } from "react";

const TryHome = () => {
  const [name, setName] = useState("____");
  const [age, setAge] = useState("__");

  const handleClick = (e) => {
    console.log("Click!", e);
    setName("Andy");
    setAge("25");
  };
  //   e is the event object that can be passed to an event handler

  const handleClickAgain = (name, e) => {
    console.log(`Hello, ${name} !`, e.target);

    setName("Bert");
    setAge("20");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>

      {/* handleClick is a function reference. 
          If we invoked the function using handleClick()
          it would fire automatically without us clicking*/}

      {/* We need to pass a function to the handleClick function.
        But, if we used brackets, the function would fire automatically.
        Thus, we will wrap it in an arrow function.
        The arrow function is not fires automatically, only on click */}
      <button onClick={(e) => handleClickAgain("Clark", e)}>
        Click me again
      </button>

      <p>
        {name} is {age} years old
      </p>
    </div>
  );
};

export default TryHome;
