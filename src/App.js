import { useState } from "react";
import "./App.css";

const App = () => {
  const [inputState, setInputState] = useState("");
  const [meaningState, setMeaningState] = useState(
    "Emoji meaning will appear here..."
  );
  const emojiData = {
    "🙃": "Ironical Upside-Down Smile",
    "😘": "Kisses",
    "🤑": "Money Face",
    "🤯": "Mind Bending",
    "🤗": "Hugs",
    "🤔": "Thinking",
    "😨": "Scared",
    "🥴": "Woozy",
    "🥶": "Shivering",
    "🤫": "Shushh",
  };

  const emojis = Object.keys(emojiData);

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;
    setInputState(inputValue);
    if (!emojis.includes(inputValue)) {
      return setMeaningState("Cannot recognize emoji");
    }
    setMeaningState(emojiData[inputValue]);
  };

  const emojiClickHandler = (e) => {
    if (e.target.nodeName === "SPAN") {
      setMeaningState(emojiData[e.target.innerText]);
    }
  };

  return (
    <main>
      <h1>Emoji Interpreter</h1>
      <input
        onChange={inputChangeHandler}
        value={inputState}
        type="text"
        placeholder="Enter an emoji to get meaning..."
      />
      {inputState && <span>{inputState}</span>}
      <span>{meaningState}</span>
      <div onClick={emojiClickHandler}>
        {emojis.map((item, index) => {
          return <span key={index + item}>{item}</span>;
        })}
      </div>
    </main>
  );
};

export default App;
