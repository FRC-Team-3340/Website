import React, {useState, useRef, useEffect} from 'react'
import Showcase from "./components/showcase/showcase"
import './App.css'
import Cards from './components/home/cards'

function App() {
    const [count, setCount] = useState(0)

    const root = useRef(null)

    useEffect(() => {
    })


    return (
        <div className="App">
            <Showcase/>
            <Cards/>
        </div>
    )
}

export default App
