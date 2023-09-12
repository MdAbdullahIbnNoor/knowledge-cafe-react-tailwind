import Bookmark from "../Bookmark/Bookmark"

const Bookmarks = ({ bookmarks }) => {

    return (
        <div className="h-1/2 bg-gray-100 rounded-xl">
            <h2 className="text-center text-3xl font-semibold mb-20">Book Marks : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

export default Bookmarks