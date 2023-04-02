import Intro from './component/intro';
import About from './component/About';
import Sidebar from './component/layout/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Sidebar/>
      <Intro />
      <About />
    </div>
  );
}

export default App;