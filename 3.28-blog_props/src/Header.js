import React from "react"

import Navbar from "./Navbar"

function Header() {
    return (
        <div className="header">
            <Navbar />
            <img src="/home-bg.jpg" className="banner"></img>
            <div>
                <h1>Clean Blog</h1>
                <span>A Blog Theme by Start Bootstrap</span>
            </div>
        </div>
    )
}

export default Header