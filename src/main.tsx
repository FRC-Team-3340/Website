import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MenuBar from "./components/navbar/navbar";
import './index.css'
import Showcase from "./components/showcase/showcase";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <MenuBar />
        <App/>
    </React.StrictMode>,
)
