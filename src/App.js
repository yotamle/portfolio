import './App.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="fix-width">
      <Projects />
      <About />
      <Contact />
      </div>
    </div>
  );
}

export default App;