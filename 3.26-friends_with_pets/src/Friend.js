import React from "react"
import Pet from "./Pet"

function Friend(props){
    const petData = props.pal.pets
    const petComponents = petData.map(animal => <Pet pet={animal}/>)
    return (
        <div>
            <h2>{props.pal.name}</h2>
            <h4>{props.pal.age}</h4>
            <div>Known pets:{petComponents}</div>
            <hr/>
        </div>
    )
}

export default Friend