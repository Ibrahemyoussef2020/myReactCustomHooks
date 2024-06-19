import './App.css';
import { Debounce, Throttle } from './components';

function App() {


  return (
    <div className="app">
      <Throttle />
      <Debounce />
    </div>
  );
}

export default App;
