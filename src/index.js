import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ImageDetails from "./components/imagedetails/ImageDetails";
import Favourites from "./components/favourites/Favourites";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Favourites />
  </React.StrictMode>
);
reportWebVitals();