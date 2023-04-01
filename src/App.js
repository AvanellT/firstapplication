import logo from './logo.svg';
import './App.css';
import React from 'react';
import Paths from './Components/routes';
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';

function App() {
  return (
    <Paths/>

    /* 
     React.createElement(
       'div', {'className':'App'},
       React.createElement('h2', null, 'Hello'),
       React.createElement('p', null, 'This is not JSX')
     ) */


    /* <div className='App-header'>
      <h2>Hello</h2>
      <p>This is an example of JSX</p>
    </div> */
  );
}

export default App;
