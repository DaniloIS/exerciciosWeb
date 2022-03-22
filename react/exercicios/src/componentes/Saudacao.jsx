import React, { Component, useState } from 'react';

export default class Saudacao extends Component {

    state = {
        type: this.props.type,
        name: this.props.name,
    }

    constructor(props) {
        super(props)

        this.setType = this.setType.bind(this)
        this.setName = this.setName.bind(this)
    }

    setType(e) {
        this.setState({type: e.target.value})
    }

    setName(e) {
        this.setState({name: e.target.value})
    }

    render() {

        const {type, name} = this.state
        return (
            <div>
                <h1>{type} {name}</h1>
                <hr />
                <input type='text' placeholder='Tipo...' onChange={this.setType} value={type} />
                <input type='text' placeholder='Nome...' onChange={this.setName} value={name} />
            </div>
        )
    }
}