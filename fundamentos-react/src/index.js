import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const el = document.getElementById('root')

ReactDOM.render(<div id="app" >
                  <Primeiro></Primeiro> 
                  <ComParametro 
                     titulo=" Título " 
                     nome= " Rogerio da Silva"
                     nota= {6.5}  />
                </div>, el )