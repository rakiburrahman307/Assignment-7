import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
  
  
    return (
       <div>
       <li>{title}</li>
       </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.required
};

export default Bookmark;