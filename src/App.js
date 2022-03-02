import About from "./components/About";
import BookTable from "./components/BookTable";
import FoodMenu from "./components/FoodMenu";
import Hero from "./components/Hero";
import MenuPalatte from "./components/MenuPalatte";
import Navbar from "./components/Navbar";
import StylishCusine from "./components/StylishCusine";
import Testimonial from "./components/Testimonial";



function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <BookTable/>
      <FoodMenu/>
      <MenuPalatte/>
      <Testimonial/>
      <StylishCusine/>
    </>
  );
}

export default App;
