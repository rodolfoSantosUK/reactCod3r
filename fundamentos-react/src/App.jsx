import Card from './components/layout/Card'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'


export default _ =>
    <div id="app" >
        <h1>Fundamentos React </h1>

        <Card titulo=" Componente com filho ">
            <Familia sobrenome="Ferreira" ></Familia>
        </Card>

        <Card titulo="Desafio aleatório">
            <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="Exemplo de React.fragment">
            <Fragmento />
        </Card>

        <Card titulo="Usando componente passando parâmetro">
            <ComParametro
                titulo=" Título "
                nome=" Rogerio da Silva"
                nota={6.5} />
        </Card>

        <Card titulo="Construindo primeiro componente">
            <Primeiro></Primeiro>
        </Card>


    </div>

