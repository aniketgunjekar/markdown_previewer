//import React
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//import marked
import { marked } from "marked";

//import default markup
import { defaultMarkup } from "./defaultMarkup.js"

//import @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

//import react-redux
import { Provider } from "react-redux"
import { useSelector, useDispatch } from "react-redux"

//-- React App --

function App() {
  const mapState = useSelector(state => state.markup.markupStr);
  const mapDispatch = useDispatch();

  // useState hook not in use anymore because redux had took over the state handling.
  //const [markdown, setMarkdown] = React.useState(initialState);

  function handleChange(newMarkup) {
    mapDispatch(updateMarkup(newMarkup));
  }

  return (
    <div>
      <Editor text={mapState} updateText={handleChange} />
      <Previewer markupText={mapState} />
    </div>
  );
}

function Editor({text, updateText}) {
  return (
    <textarea id="editor" type="text" value={text} placeholder="Type Markdown here..." onChange={(e) => updateText(e.target.value)} ></textarea>
  );
}

function Previewer({markupText}) {
  let parsedHtml = marked.parse(markupText);  

  React.useEffect(() => {
    document.getElementById("preview").innerHTML = parsedHtml;
    console.log(parsedHtml);
  });
  
  return (
    <div id="preview"></div>
  );
}

//-- redux --
const markupSlice = createSlice({
  name: 'markup',
  initialState: {
    markupStr: defaultMarkup()
  },
  reducers: {
    updateMarkup: (state, action) => {
      state.markupStr = action.payload;
    }
  }
});

//Generate action and reducer function
const { updateMarkup } = markupSlice.actions;
const markupReducer = markupSlice.reducer;

//create store after reducer id created
const store = configureStore({
  reducer: {
    markup: markupReducer
  }
});

//-- react-redux --
//provide react access to redux store and action creator and render App 
const output = ReactDOM.createRoot(document.getElementById("page"));
output.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();