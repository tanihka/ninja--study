import Faq from './components/FAQ/Faq';
import Hero from './components/Hero';
import Footer from './components/Footer/Footer';
import ContactUs from './components/Contact/ContactUs';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Slider/>
    <Faq/>
    <div id="contact">
      <ContactUs/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
