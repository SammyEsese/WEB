import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';




function App() {
 
  return (
    <div className="App">
  
     <Navbar />
     <Intro />
     <About />
     <Portfolio />
     <Testimonials />
     <Contact />
     <Footer />
     
     
     
     
    </div>
  );
}

export default App;
