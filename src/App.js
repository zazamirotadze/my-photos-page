import PhotosList from "./PhotosList";
import {  Routes , Route } from "react-router-dom"
import Details from "./Details";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Nav/>}> 
          <Route path="/:categoryName?/:lang?"   element={<PhotosList/>}  />
          <Route path="/specificPhoto/:id?/:lang?"   element={<Details/>}  />
        </Route>
      </Routes>   
    </div>
  );
}

export default App;
