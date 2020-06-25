import React from 'react'
import alunos from '../../data/aluno'

export default props => {
    console.log(alunos)
 
    const lis = alunos.map(aluno => {
         return <li key= {aluno.id}> {aluno.id})  {aluno.nome} -> {aluno.nota} </li>
    })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {lis}
            </ul>

        </div>
    )

}