import React, { useEffect } from "react";
import Card from './components/Card';
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Portfolio from "./components/Portfolio";

function App() {
  
    // useEffect(()=>{
    //   Aos.init({
    //     once: true,
    //   })
    // })
    AOS.init();
  
  return (

    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div  style={{height:'100vh'}}>

      <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
      <Card/>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
      <About/>
      </div>
      </div>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
