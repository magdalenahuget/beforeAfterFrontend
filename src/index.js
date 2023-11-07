import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ImageDetails from "./components/imagedetails/ImageDetails";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImageDetails />
  </React.StrictMode>
);
reportWebVitals();