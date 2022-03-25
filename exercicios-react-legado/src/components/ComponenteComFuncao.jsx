import React from 'react';

const aprovados = [ 'Danilo', 'Diego', 'Daniel', 'Denis', 'Diogo' ]

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}