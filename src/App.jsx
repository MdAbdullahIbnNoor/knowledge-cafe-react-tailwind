import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import ReadTime from './components/ReadTime/ReadTime'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readtime, setReadtime] = useState(0)

  const handleBookMark = blog => {
    const newBookMarksList = [...bookmarks, blog]
    setBookmarks(newBookMarksList);
  }

  const handleMarkAsRead = (id, time) => {
    const newReadtime = readtime + time;
    setReadtime(newReadtime);
    // remove the readed blog from bookmark when Mark as read is clicked
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-7'>
        <Blogs className handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <div className='md:w-1/3 '>
          <ReadTime readtime={readtime}></ReadTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
