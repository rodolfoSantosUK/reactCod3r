import React, { useState } from 'react'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        console.log(e.target.value)
        setValor(e.target.value)
    }

    return (
        <div>
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar} />
            <input value={valor} readOnly/>
        </div>
    )

}