import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <div style={{height:'100%'}}>
    <ColorModeScript />
    <App />
  </div>,

  document.getElementById('root')
);
