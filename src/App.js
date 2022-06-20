import React from 'react';
import Slider from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Herobutton from './components/hero/herobutton';
import Love from './components/lovell/Lovell';
import Toeic from './components/toeic/toeic';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Herobutton/>
      <Love/>
      <Toeic/>
      <Footer/>
      
   </div>
  );
}

export default App;
