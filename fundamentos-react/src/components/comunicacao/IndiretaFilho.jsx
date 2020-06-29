import React from 'react'

export default props => {
 
const cb = props.quandoClicar

    return (
        <div>
            <div>Componente Filho</div>
            <button onClick={
                _ => cb('João', 53, true)
            }> Botão Fornecer Informações</button>
        </div>


    )

}

