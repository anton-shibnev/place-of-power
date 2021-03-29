import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as theme from './styles/config/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
