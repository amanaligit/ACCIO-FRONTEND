import logo from './logo.svg';
import './App.css';
import Weather from './weather';

function App() {
  return (
    <div className="p-3" style={{maxWidth:'500px', margin:'auto'}}>
      <Weather/>
    </div>
  );
}

export default App;
