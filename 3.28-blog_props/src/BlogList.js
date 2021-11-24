import React from "react"

import BlogPost from "./BlogPost"
import blogData from "./BlogData"

function BlogList() {
    const postComponents = blogData.map(details => <BlogPost posts={details}/>);

    return (
        <div>
            {postComponents}
            <div>
                <a>Older Posts →</a>
            </div>
        </div>
    )
}

export default BlogList