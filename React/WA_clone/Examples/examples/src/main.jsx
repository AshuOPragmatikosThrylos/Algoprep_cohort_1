import React from 'react';
import ReactDOM from 'react-dom/client'
// direct import
import Myfile from './Components/Myfile';
import { NonDefault } from './Components/Myfile';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* <Myfile></Myfile>
      <NonDefault></NonDefault> */}
    </>
  </React.StrictMode>,
)
