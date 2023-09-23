import { useState } from "react"
import Bookmarks from "./components/Bookmarks/bookmarks"
import Courses from "./components/Courses/Courses"
import Header from "./components/header/header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const notify = () => toast("You Already Add This Course");
  const handleAddToBookmarks = course => {
    const isExist = bookmarks.find((item => item.id === course.id));
    if (isExist) {
      return notify();
    } else {
      const newBookmarks = [...bookmarks, course];
      setBookmarks(newBookmarks);
    }

  }


  return (
    <>

      <Header></Header>
      <ToastContainer />
      <div className="md:flex gap-12">
        <Courses handleAddToBookmarks={handleAddToBookmarks}></Courses>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>


    </>
  )
}

export default App
