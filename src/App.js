// import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import About from './components/About';
// import Contact from './components/Contact';
import Card from './components/Card';
import Home from './components/Home';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='top-content'>
      <Header />
      <Home />

      <h1>EXERCISE</h1>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </div>
    <div className='card-content'>
      <div className='cards'>
        <Card title='MODERN EQUIPMENT' textContent="We tested the latest smart home gym equipment to find the best, including the Peloton bike, Technogym MyRun treadmill, Mirror, Lat pulldown, Cable biceps bar, Cable triceps bar etc. We've tested all the most popular smart fitness equipment."/>

        <Card title='PROFESSIONAL TRAINER' textContent="Fitness trainers lead and train people in fitness routines, helping them meet their fitness goals. They may guide clients on the best equipment to use or make recommendations on the best workout routines. Some fitness trainers may help clients rehabilitate after an injury, or meet strength or weight training goals." />

        <Card title='HEALTHY DIET PLAN' textContent="The best diet for losing weight while working out is one that includes high-quality foods that are unrefined and minimally processed. A balanced diet should include plenty of fruits and vegetables, whole grains, healthy (unsaturated) fats, and healthy protein sources." />
      </div>      
    </div>
    <Footer />
    </>
  );
}

export default App;
