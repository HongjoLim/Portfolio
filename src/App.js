import Intro from './component/Intro/Intro';
import About from './component/About/About';
import Sidebar from './component/layout/Sidebar';
import Projects from './component/Projects/Projects';

const App = () => {
  return (
    <div className="app">
      <Sidebar/>
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;