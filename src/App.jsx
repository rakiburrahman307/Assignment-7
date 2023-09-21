import Bookmarks from "./components/Bookmarks/bookmarks"
import Courses from "./components/Courses/Courses"
import Header from "./components/header/header"

function App() {


  return (
    <>
     
    <Header></Header>
    <div className="md:flex gap-12">
      <Courses></Courses>
      <Bookmarks></Bookmarks>
    </div>
    

    </>
  )
}

export default App
