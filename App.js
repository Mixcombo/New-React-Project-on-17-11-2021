import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clickword from './Click';
import Dcmviewer from './viewer';
import Test from './test';

function Hello(){
  return (
    <h2>Hello</h2>
  )
}
function Testdcm(){
  return(
    <h3>Testdcm</h3>
  )
}

function App() {
  return (
    <Router>
    <div className="App">
        <Hello />
        <Clickword />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/dicom" element={<Dcmviewer/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
