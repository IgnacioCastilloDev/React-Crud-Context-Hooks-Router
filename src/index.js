import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/Main';
import { MainRouter } from './components/MainRouter';
import { NavBar } from './components/NavBar';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

