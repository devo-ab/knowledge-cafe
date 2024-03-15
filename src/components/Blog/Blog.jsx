import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mt-20'>
            <img className='w-full mb-8 rounded-2xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex items-center justify-between'>
                <div className='flex gap-3 items-center'>
                    <img className='w-20' src={author_img} alt="" />
                    <div>
                        <h3 className='font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex gap-1'>
                    <p>{reading_time} min read</p>
                    <button onClick={() =>handleAddToBookmark(blog)} className='text-2xl font-bold'><CiBookmarkPlus /></button>
                </div>
            </div>
            <h2 className='text-3xl mt-5'>{title}</h2>
            <p className='mt-5'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button className='text-blue-800 mt-3' onClick={() => handleMarkAsRead(id, reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;