import './App.css';
import Section from './Component/Section/Section';
import AboutUs from './Component/AboutUs/AboutUs';
import Skills from './Component/Skills/Skills';
import PortFolio from './Component/ProtFolio/Protfolio';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Section/>
      <AboutUs/>
      <Skills/>
      <PortFolio/>
      <Footer/>
    </div>
  );
}

export default App;
