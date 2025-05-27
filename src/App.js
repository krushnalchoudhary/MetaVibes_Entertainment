import React from 'react';
import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
 import Hero from './sections/hero/Hero';
 import About from './sections/about/About';
 import Services from './sections/services/Services';
// import Pricing from './sections/pricing/Pricing';
// import Founders from './sections/founders/Founders';
// import Contact from './sections/contact/Contact';
// import Testimonials from './sections/testimonials/Testimonials';
// import CaseStudies from './sections/caseStudies/CaseStudies';
// import FAQ from './sections/faq/FAQ';

const App = () => {
  return (
    <div>
      <Navbar />
       <Hero />
      <About />
<Services />
           {/* <Pricing />
      <Founders />
      <Contact />
      <Testimonials />
      <CaseStudies />
      <FAQ />
      <Footer /> */}
    </div>
  );
};

export default App;
