import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-500 m-4 rounded-xl p-4">
            <div>
                <h3 className='text-2xl'>Reading Time : {readingTime}</h3>
            </div>
            <h2 className="text-2xl font-semibold">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;