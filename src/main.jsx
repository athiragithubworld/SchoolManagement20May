import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contextApi/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
