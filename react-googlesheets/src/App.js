import logo from './logo.svg';
import './App.css';
import Form from './form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SheetData from './sheetData';

function App() {

  const [sheetData, setSheetData] = useState([]);

  const getSheetData = () => {
    axios.get('https://sheet.best/api/sheets/22059ae6-dd5b-49d4-a009-2bb51890f8eb')
      .then(res => setSheetData(res.data));
  }

  useEffect(getSheetData, []);

  return (
    <div className="App p-5" style={{maxWidth: '768px', margin:'auto'}}>
      <h1 className='display-2 text-center'>Google Sheets Database</h1>
      <Form getSheetData={getSheetData} />
      <SheetData sheetData={sheetData} />
    </div>
  );
}

export default App;
