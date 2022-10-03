//import React
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//import marked
import { marked } from "marked";

//import default markup
import { defaultMarkup } from "./defaultMarkup.js"

//React App
//render App
const output = ReactDOM.createRoot(document.getElementById("page"));
output.render(<App />);

function App() {
  let initialState = defaultMarkup();
  const [markdown, setMarkdown] = React.useState(initialState);

  function handleChange(newMarkdown) {
    setMarkdown(newMarkdown);
  }

  return (
    <div>
      <Editor text={markdown} updateText={handleChange} />
      <Previewer markdownText={markdown} />
    </div>
  );
}

function Editor({text, updateText}) {
  return (
    <textarea id="editor" type="text" value={text} placeholder="Type Markdown here..." onChange={(e) => updateText(e.target.value)} ></textarea>
  );
}

function Previewer({markdownText}) {
  let parsedHtml = marked.parse(markdownText);

  React.useEffect(() => {
    document.getElementById("preview").innerHTML = parsedHtml;
    console.log(parsedHtml);
  });
  
  return (
    <div id="preview"></div>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
