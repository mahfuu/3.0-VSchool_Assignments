import React from "react"

function Pet(props){
    return (
        <p>{props.pet.name} - {props.pet.breed}</p>
    )
}

export default Pet