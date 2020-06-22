import React from 'react'

export default (props) => {
    const min = props.min;
    const max = props.max;

    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Valor aleatório</h2>
            <p><strong>Valor Mínimo: {min}</strong></p>
            <p><strong>Valor Máximo: {max}</strong></p>
            <p><strong>Valor Escolhido: {aleatorio}</strong></p>
        </div>
    );
}