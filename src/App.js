import About from "./components/About";
import BookTable from "./components/BookTable";
import FoodMenu from "./components/FoodMenu";
import Hero from "./components/Hero";
import MenuPalatte from "./components/MenuPalatte";
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <BookTable/>
      <FoodMenu/>
      <MenuPalatte/>
    </>
  );
}

export default App;
