import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { DarkModeContextProvider } from './context/darkModeContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

