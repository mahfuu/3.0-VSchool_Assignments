import React from "react"

function Navbar() {
    return(
        <div className="navbar">
            <a>Start Bootstrap</a>
            <button className="menu-button">Menu</button>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Sample Post</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar