// Implementation of Tilt effect from https://www.github.com/hackclub/hackathons
// Kudos to the Hack Club organization for figuring this out early.

import React, {useEffect, useRef} from 'react'
import VanillaTilt from "vanilla-tilt";
import './tilt.css'

// @ts-ignore
const Tilt = ({options = {}, children, ...props}) => {
    const root = useRef(null)

    useEffect(() => {
        // @ts-ignore
        VanillaTilt.init(root.current, {
            reverse: false,
            max: 35,
            perspective: 1000,
            scale: 1.1,
            speed: 1000,
            transition: true,
            axis: null,
            reset: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            ...options
        })
    }, [])
    return React.cloneElement(children, {ref: root})
}
export default Tilt