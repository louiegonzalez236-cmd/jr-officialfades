import Hero from "./components/Hero";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Work from "./components/Work";
import Barbers from "./components/Barbers";
import About from "./components/About";
import Footer from "./components/Footer";

function App(){
  return(
    <div>
      <Hero />
      <Services />
      <Menu />
      <Work />
      <Barbers />
      <About />
      <Footer />
      {/* We will build our barbershop layout here */}
    </div>
  );
}
export default App;