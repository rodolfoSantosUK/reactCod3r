import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'


export default _ => 
    <div id="app" >
        <h1>Fundamentos React ()</h1>
        <Aleatorio min={10} max={60}/>
        <Fragmento/>
        <ComParametro 
                titulo= " Título " 
                nome= " Rogerio da Silva"
                nota= {6.5}  />
        <Primeiro></Primeiro> 
    </div>

 