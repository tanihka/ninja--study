import Faq from './components/FAQ/Faq';
import Hero from './components/Hero';
import Footer from './components/Footer/Footer';
import ContactUs from './components/Contact/ContactUs';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Testimonial from './components/Testimonial/Testimonial'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Slider/>
   <div id ='features'> </div>
    <Testimonial/>
    <div id='faq'>
    <Faq/>
    </div>
    <div id="contact">
      <ContactUs/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
