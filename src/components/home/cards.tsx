import React, {useState, useRef, useEffect, Component} from 'react'
import './cards.css'

export class Cards extends  Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id='cards'>
                <div className='card'></div>
                <div className='card'></div>
                <div className='card'></div>
                <div className='card'></div>
            </div>
        )
    }
}

export default Cards