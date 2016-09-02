'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css'
require('./vendor/css/App.css') ;
require('./vendor/css/index.css');
require('./vendor/css/hello.css');
require('./vendor/css/comment.css');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
