import React from 'react'

export default props => {

const cb = props.quandoMudar

    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number"
                value={props.passo}
                onChange={e => cb(e)} />
        </div>
    )
}