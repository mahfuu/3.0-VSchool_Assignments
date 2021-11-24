import React from "react"
import friendData from "./FriendData"
import Friend from "./Friend"

function FriendList() {
    const friendComponents = friendData.map(person => <Friend pal={person}/>)
    
    return (
        <div className="friend-list">
            <h1>View All Of Your Friends</h1>
            {friendComponents}
        </div>
    )
}

export default FriendList