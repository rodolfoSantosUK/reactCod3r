import ReactDOM from 'react-dom'
import React from 'react' 


const el = document.getElementById('root')
const tag = <strong> Uso de JSX no react !</strong> 

ReactDOM.render(
    <div> 
     { tag }
    </div>,
     el)