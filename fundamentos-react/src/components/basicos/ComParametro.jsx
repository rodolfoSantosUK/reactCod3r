import React from 'react' 

export default function comParametro(props) {

const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2> { props.titulo} </h2>
            <p>
            <strong> Nome: { props.nome}</strong>
            <strong> { props.nota}</strong>
            <strong> Situação : { status }</strong>
            </p>
            
        </div>
    )
}