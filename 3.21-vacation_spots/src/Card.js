import React from "react"

function Card(props){
    const moneySign = props.destination.price <= 500 ? "$" : props.destination.price <= 1000 && props.destination.price > 500 ? "$$" : "$$$"   
    const colorStyle = 
    props.destination.timeToGo === "Winter" ? " winter" :
    props.destination.timeToGo === "Spring" ? " spring" :
    props.destination.timeToGo === "Summer" ? " summer" :
    props.destination.timeToGo === "Fall" ? " fall" : ""
    return (
        <div className="container">
            <img src={props.destination.imgUrl} className="card-pic" alt={props.destination.place}></img>
            <div className={`card-text${colorStyle}`}>
                <h1>{props.destination.place}</h1>
                <h2>{moneySign}</h2>
                <p>Your next {props.destination.timeToGo} getaway!</p>
            </div>
        </div>
    )
}

export default Card