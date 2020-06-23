import React from 'react'

export default (props) => {

    //Como dentro de props temos min e max, podemos usar a sintaxe abaixo
    const {min, max} = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2><strong>Valor aleatório entre {min} e {max} </strong></h2>
            <p>Valor Mínimo informado: {min}</p>
            <p>Valor Máximo informado: {max}</p>
            <p>Valor Escolhido entre {min} e {max} foi {aleatorio}</p>
        </div>
    );
}