import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

export const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {

    const { title, cover_img, reading_time, author_name, author_img, posted_date, hashtags } = blog
    return (
        <div>
            <img className='my-8 w-full h-96' src={cover_img} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <img className='w-16 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>{author_name}</h3>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookMark(blog)} 
                    className='ml-2 text-red-500 text-xl'><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
            <p className='text-lg text-gray-500 my-4 mr-4 font-semibold mb-10'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a> </span>)
                }
            </p>
            <button className='text-violet-700 font-bold underline mb-10' onClick={() => handleMarkAsRead(reading_time)}>Mark As Read</button>
        </div>
    )
}

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func
}
