import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./Components/Navbars";
import Slideshow from "./Components/Slideshow";
import Service from "./Components/Service";
import Menus from "./Components/Menus";
import Breakfast from "./Components/Breakfast";
import Lunch from "./Components/Lunch";
import Dinner from "./Components/Dinner";
import Snacks from "./Components/Snacks";
import Desserts from "./Components/Desserts";
import ImageGallerys from "./Components/ImageGallerys";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbars></Navbars>
          <Slideshow></Slideshow>
          <Service></Service>
          <Menus></Menus>
          <Routes>
            <Route path="/" element={<Breakfast></Breakfast>}></Route>
            <Route path="/lunch" element={<Lunch></Lunch>}></Route>
            <Route path="/dinner" element={<Dinner></Dinner>}></Route>
            <Route path="/snacks" element={<Snacks></Snacks>}></Route>
            <Route path="/desserts" element={<Desserts></Desserts>}></Route>
          </Routes>
          <ImageGallerys></ImageGallerys>
          <About></About>
          <Footer></Footer>
        </Router>
      </header>
    </div>
  );
}

export default App;
