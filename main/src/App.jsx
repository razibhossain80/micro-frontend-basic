import React from "react";
import ReactDOM from "react-dom";
import  RemoteCmp  from 'remote/RemoteCmp';

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: main</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <RemoteCmp/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
