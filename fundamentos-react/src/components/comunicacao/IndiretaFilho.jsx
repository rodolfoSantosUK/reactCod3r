import React from 'react'

export default props => {
 
const cb = props.quandoClicar
const gerarIdade = () => parseInt(Math.random() * (20)) +  50

    return (
        <div>
            <div>Componente Filho</div>
            <button onClick={ _ => cb('João', gerarIdade(), true)}> 
             Botão Fornecer Informações</button>
        </div>


    )

}

