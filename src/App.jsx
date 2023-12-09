import "./App.css";
import { useImageFetch } from "./Hook/useImageFetch";
import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [revisedPrompt, setRevisedPrompt] = useState("");

  const onSubmitHandel = async (e) => {
    e.preventDefault();
    const data = await useImageFetch({ prompt });
    const { url, revised_prompt } = data;
    setUrl(url);
    setRevisedPrompt(revised_prompt);
    console.log(url, revised_prompt);
  };
  return (
    <>
      <div className="main" style={{ boxSizing: "border-box" }}>
        <img
          src={imageUrl || `https://etimg.etb2bimg.com/photo/99959880.cms`}
          alt=""
        />
        <p>{revisedPrompt}</p>
      </div>
      <form onSubmit={onSubmitHandel}>
        <div className="prompt">
          <label htmlFor="prompt">Prompt : </label>
          <input
            type="text"
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
          />
          <button>Send</button>
        </div>
      </form>
    </>
  );
}

export default App;
