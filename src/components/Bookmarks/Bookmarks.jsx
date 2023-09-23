import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bookmarks = ({ bookmarks }) => {
  const notify = () => {
    toast("You Do Not Have More Credit");
  };
           let count = 0;
           let remaining = 20;
           let credit = 0;

    bookmarks.forEach(element => {
        if (remaining <= 0) {
            return;
          }
      
          if (remaining < element.credit) {
            notify();
            return;
          }
            credit += element.credit;
           count += element.price;
           remaining -= element.credit;
    });

           

  return (
    <div className='md:h-1/3'>
      <ToastContainer/>
      <div className='border-b-2 mb-4'>
        <h2 className='text-xl font-bold text-blue-400 mb-4'>
          Credit Hour Remaining {remaining} hr{' '}
        </h2>
      </div>
      <div className='border-b-2'>
        <h2 className='text-xl font-bold text-black'>Course Name</h2>
        <ol style={{ listStyleType: 'number' }} className='ml-6 mb-4'>
          { 
          bookmarks.map((bookmark, idx) => {
            if (credit>=20) {
             return notify();   
            }
           return <Bookmark key={idx} bookmark={bookmark}></Bookmark>
          }
            
          )
          }
        </ol>
      </div>
      <div className='border-b-2 mb-2 mt-2'>
        <h2 className='text-xl font-medium text-black mb-4'>Credit: {credit}</h2>
      </div>
      <div className='border-b-2 mb-2'>
        <h2 className='text-xl font-semibold text-black mb-4'>Price:{count} </h2>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired, 
};

export default Bookmarks;
