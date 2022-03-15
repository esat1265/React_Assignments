import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from "react-router-dom";


// import 'bootstrap/dist/css/bootstrap.min.css';
// import Alert from 'react-bootstrap/Alert';
// import swal from "sweetalert";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

