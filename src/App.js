import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";



export const ThemeContext = createContext(null);




function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
};
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>

  
     <Navbar />
     <Intro />
     <About />
     <Portfolio />
     <Testimonials />
     <Contact />
     <Footer />
     
     
     <div className="switch">
         {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>*/}
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
   
     
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
