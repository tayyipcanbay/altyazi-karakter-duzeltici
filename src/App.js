import './App.css';
import Homepage from './pages/homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Convert from './pages/convert';
import React from 'react';
import Download from './pages/download';

function App() {
  const [file, setFile] = React.useState("");
  const [convertedFile, setConvertedFile] = React.useState("");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage file={file} setFile={setFile} />} />
          <Route path="convert" element={<Convert file={file} setConvertedFile={setConvertedFile}/>} />
          <Route path="download" element={<Download convertedFile={convertedFile}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
