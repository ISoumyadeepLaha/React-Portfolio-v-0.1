import "./App.css";
import "./index.css"
import Header from "./Components/Header/header";
import About from './Components/About/about';
import Experiance from './Components/Experiance/experiance';
import Service from "./Components/Services/service";
// import Testimonials from './Components/Testimonials/testimonials';
// import Portfolio from "./Components/Portfolio/portfolio";
import Contact from './Components/Contact/contact';
// import Footer from './Components/Footer/footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
       <Header/>
       <Navbar/> 
       <About/>
       <Experiance/>
       <Service/>
       {/* <Testimonials/> */}
       {/* <Portfolio/> */}
       <Contact/>
       {/* <Footer/> */}
    </>
  );
}

export default App;
