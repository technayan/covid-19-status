import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Status from './components/Status/Status';

function App() {
  const [status, setStatus] = useState({});

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api')
    .then(res => res.json())
    .then(data => setStatus(data));
  }, []);
  

  return (
    <div className="App">
      <Header />
      <Status status={status}/>
    </div>
  );
}

export default App;
