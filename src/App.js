import './App.css';
import NavBar from './components/NavBar/NavBar';
import Section from './components/Section/Section';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="h-screen  overflow-x-hidden">
      <NavBar/>
      <Section/>
      <Feature/>
      <Footer/>
    </div>
  );
}

export default App;
