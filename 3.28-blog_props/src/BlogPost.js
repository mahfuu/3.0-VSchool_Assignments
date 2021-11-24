import React from "react"

function BlogPost(props) {
   return (
    <div>
        <h2>{props.posts.title}</h2>
        <h3>{props.posts.subTitle}</h3>
        <p>Posted by <a>{props.posts.author}</a> on {props.posts.date}</p>
        <hr/>
    </div>
   )
}

export default BlogPost