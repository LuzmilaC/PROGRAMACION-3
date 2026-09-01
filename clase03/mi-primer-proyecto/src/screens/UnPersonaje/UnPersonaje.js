import React from "react";

function UnPersonaje (props) {
    const id = props.match.params.id
    return (
        <div>
            <section>
                <div>El id del personje es: { id } </div>
                <div>nombre: {name}</div>
                <div>status: {status}</div>
                <div>species: {species}</div>
                <div>type: {type}</div>
                <div>gender: {gender}</div>
                <div>origin:</div>



        </section>
        
        </div>
        
    )  
}

export default UnPersonaje