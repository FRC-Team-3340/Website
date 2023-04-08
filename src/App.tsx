import React, {useState, useRef, useEffect} from 'react'
import Showcase from "./components/showcase/showcase"
import reactLogo from './assets/react.svg'
import Tilt from "./components/tilt-effect/tilt"
import './App.css'
function App() {
    const [count, setCount] = useState(0)

    const root = useRef(null)

    useEffect(() => {
    })


    return (
        <div className="App">
            <Showcase/>
            <div id={"cards"}>
                <div className={"card"}>

                </div>
            </div>
        </div>
    )
}

export default App
