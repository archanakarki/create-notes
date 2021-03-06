import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const notes = [
    {
      id: 1,
      content: 'This is my first post',
      date: '2019-05-30T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'This is my second post',
      date: '2019-05-30T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'This is my third post',
      date: '2019-05-30T19:20:14.298Z',
      important: true
    }
  ]


ReactDOM.render(<App notes={notes}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
