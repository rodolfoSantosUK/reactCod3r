import Card from './components/layout/Card'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAluno from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai.jsx"
import Input from "./components/formulario/Input"


export default () => (
    <div id="app" >
        <h1>Fundamentos React </h1>

        <Card titulo="Componente controlado (Input)">
            <Input></Input>
        </Card>
        <Card titulo="Comunicação indireta">
            <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="Comunicação direta">
            <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="Condicional ">
            <UsuarioInfo usuario={{nome: 'Fernando'}} ></UsuarioInfo>
        </Card>

        <Card titulo="Condicional ">
            <ParOuImpar numero={11} ></ParOuImpar>
        </Card>

        <Card titulo="Desafio repetição ">
            <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo=" Trabalhando com repetição ">
            <ListaAluno></ListaAluno>
        </Card>

        <Card titulo=" Componente com filho ">
            <Familia sobrenome="Ferreira" >
                <FamiliaMembro nome="Pedro"   />                
                <FamiliaMembro nome="Ana"  />
                <FamiliaMembro nome="Gustavo"   />
            </Familia>
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
)
