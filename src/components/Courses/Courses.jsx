import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/course';


const Courses = ({handleAddToBookmarks}) => {
    const [course, setCourse] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[]);
      
        return (
            <div className='md:2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            
            {
                course.map(course => <Course handleAddToBookmarks={handleAddToBookmarks} key={course.id} course={course}></Course>)
            }
        </div>
      
    );
};

Courses.propTypes = {
    handleAddToBookmarks: PropTypes.func.required
};

export default Courses;