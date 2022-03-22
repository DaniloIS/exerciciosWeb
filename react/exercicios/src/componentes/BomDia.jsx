import React from 'react';

export function BomDia(props) {
    return (
        <h1>Bom Dia!!! {props.name}</h1>
    )
}

/*
    export function BomDia(props) {
        return (
            <div>
                <h1>Bom Dia!!! {props.name}</h1>
                <h2>Bom Dia!!! {props.name}</h2>
            </div>
        )
    }
    export function BomDia(props) {
        return (
            <React.Fragment>
                <h1>Bom Dia!!! {props.name}</h1>
                <h2>Bom Dia!!! {props.name}</h2>
            </React.Fragment>
        )
    }
    export function BomDia(props) {
        return (
            <>
                <h1>Bom Dia!!! {props.name}</h1>
                <h2>Bom Dia!!! {props.name}</h2>
            </>
        )
    }
*/