import React from "react"
import produtos from "../../data/produtos"

export default (props) => {

    function getLinhas() {
        return produtos.map(produto => {
            return (
                <tr>
                    <td> {produto.id} </td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table border="1" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>

            </table>
        </div>
    )

}