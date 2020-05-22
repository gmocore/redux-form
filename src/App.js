import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";

import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import store from './Store'

function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PostForm />
          <br />
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
