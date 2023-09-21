
import PropTypes from 'prop-types';

const Course = ({course}) => {
    const {title,cover_url,description} = course;
    return ( 
     
           <div className="card w-80 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={cover_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
  
      <button className="bg-blue-800 text-white w-full px-6 py-2 rounded-xl hover:bg-blue-600">Select</button>
   
  </div>
</div>
    );
};

Course.propTypes = {
    course: PropTypes.object.required
};

export default Course;