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

const handleModifyAnswerVotes = (answerId, increment) => {
  state.answers = state.answers.map(answer => {
    if (answer.answerId != answerId) {
      return answer;
    }
    else {
      return {...answer, upvotes: answer.upvotes + increment}
    }
  });

  render();
}

const render = () => {
  ReactDOM.hydrate(<App {...state} handleModifyAnswerVotes={handleModifyAnswerVotes} />, document.querySelector("#Container"));
}
