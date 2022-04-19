import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// After
import { createRoot } from 'react-dom/client';

//ReactDOM.render(

    const container = document.getElementById('root');
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App/>);

//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

