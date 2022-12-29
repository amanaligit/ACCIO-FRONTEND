import './App.css';
import Weather from './weather';
import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext(false)

function App() {



  let initialTheme = undefined;
  if (localStorage.getItem('theme') === 'false' || localStorage.getItem === null) {
    initialTheme = false;
  }
  else {
    initialTheme = true;
  }
  let [darkMode, setDarkMode] = useState(initialTheme);

  const onSwitchChange = () => {
    localStorage.setItem('theme', !darkMode);
    setDarkMode(d => !d);
  }

  const foo = (e) => {
    console.log(e.key);
    if (e.key === 'l') {
      setDarkMode(false);
      localStorage.setItem('theme', false);
    }
    if (e.key === 'd') {
      setDarkMode(true);
      localStorage.setItem('theme', true);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', foo);
    return () => document.removeEventListener('keyup', foo);
  }, [])

  return (
    <ThemeContext.Provider value={darkMode}>
      <div style={darkMode ? { backgroundColor: 'black', color: 'white' } : null}>
        <div className="form-check form-switch" style={{ position: 'absolute', right: '10px', top: "10px" }}>
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={darkMode} onChange={onSwitchChange} />
        </div>
        <div className="p-3" style={{ maxWidth: '500px', margin: 'auto' }}>
          <Weather />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
// export ThemeContext;
