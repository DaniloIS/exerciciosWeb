import React, { Component } from 'react';

export default class Contador extends Component {

    state = {
        numero: this.props.numero
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
    }

    alteraNum = (num) => {
        this.setState({ numero: this.state.numero + num })
    }


    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>+</button>
                <button onClick={this.menosUm}>-</button>
                <button onClick={() => this.alteraNum(10)}>+10</button>
                <button onClick={() => this.alteraNum(-10)}>-10</button>
            </div>
        )
    }
}
// Solução 01 - Bind
// constructor(props) {
//     super(props)

//     this.maisUm = this.maisUm.bind(this)
// }

// Solução 02 - Função Arrow(onClick)
// <button onClick={() => this.maisUm()}>+</button>

// Solução 03 - Função Arrow
// maisUm = () => {
//     this.props.numero++
// }