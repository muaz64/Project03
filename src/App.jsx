
import { useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Destinations from './components/Destinations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // animation only once on scroll
  });
}, []);

  return (
    <>
    <Navbar />
    <Hero />
    <AboutUs />
    <Destinations />
    <Contact />
    <Footer />
  
    </>
  )
}

export default App
