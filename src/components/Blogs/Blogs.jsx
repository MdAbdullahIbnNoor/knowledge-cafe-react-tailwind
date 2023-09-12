import { useEffect } from "react"
import { useState } from "react"
import { Blog } from "../Blog/Blog"

const Blogs = ({handleBookMark, handleMarkAsRead}) => {
  
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
  
    return (
    <div className="">
        <h1 className="text-3xl text-center font-semibold">Blogs: {blogs.length}</h1>
        {
            blogs.map(blog => 
            <Blog 
                key={blog.id} 
                blog={blog}
                handleBookMark={handleBookMark}
                handleMarkAsRead={handleMarkAsRead}>
                </Blog>
                )
        }
    </div>
  )
}

export default Blogs;