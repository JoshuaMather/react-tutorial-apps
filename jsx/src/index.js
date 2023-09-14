// 1 Import react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2 Get reference to div with ID root
const el = document.getElementById('root');

// 3 Tell react to take control of that element
const root = ReactDOM.createRoot(el);


// 4 Show component on screen
root.render(<App />)