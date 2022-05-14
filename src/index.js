import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Calculator from './components/Calculator';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="calculator" element={<Calculator />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
