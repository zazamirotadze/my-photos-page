import PhotosList from "./photoList/PhotosList";
import {  Routes , Route } from "react-router-dom"
import Details from "./details/Details";
import Nav from "./nav/Nav";
import PhotosPageProvider from "./context/Photos-page-context";

function App() {
  return (
    <PhotosPageProvider>
    <div className="App">
      <Routes>
        <Route element={<Nav/>}> 
          <Route path="/:categoryName?/:lang?"   element={<PhotosList/>}  />
          <Route path="/specificPhoto/:id?/:lang?"   element={<Details/>}  />
        </Route>
      </Routes>   
    </div>
    </PhotosPageProvider>
  );
}

export default App;
