import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

let state = undefined;

fetch("http://localhost:5555/data")
  .then(data => data.json())
  .then(json => {
    state = json;
    console.log("Got the state.");
    render();
  });

const render = () => {
  ReactDOM.hydrate(<App {...state} />, document.querySelector("#Container"));
}
