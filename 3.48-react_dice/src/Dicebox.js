import React from "react"

function Dicebox(props){
    return(
        <div className="dicebox">
            <div className="die">{props.number.num1}</div>
            <div className="die">{props.number.num2}</div>
            <div className="die">{props.number.num3}</div>
            <div className="die">{props.number.num4}</div>
            <div className="die">{props.number.num5}</div>
        </div>
    )
}

export default Dicebox