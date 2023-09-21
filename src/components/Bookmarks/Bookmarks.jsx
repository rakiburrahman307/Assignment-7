import PropTypes from 'prop-types';

const Bookmarks = () => {
    return (
        <div className='md:h-1/3'>
            <div className='border-b-2'>
                <h2 className='text-xl font-bold text-blue-400 mb-4'>Credit Hour Remaining 7 hr </h2>  
            </div>
            <div>
                <h2 className='text-xl font-bold text-black'>Course Name</h2>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    
};

export default Bookmarks;