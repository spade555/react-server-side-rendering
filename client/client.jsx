import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { handleModifyAnswerVotes } from './../common/utility';

let state = undefined;

fetch("http://localhost:5555/data")
  .then(data => data.json())
  .then(json => {
    state = json;
    console.log("Got the state.");
    render();
  });

const handleVote = (answerId, increment) => {
  state.answers = handleModifyAnswerVotes(state.answers, answerId, increment);
  fetch(`vote/${answerId}?increment=${increment}`);
  render();
}

const render = () => {
  ReactDOM.hydrate(<App {...state} handleModifyAnswerVotes={handleVote} />, document.querySelector("#Container"));
}
