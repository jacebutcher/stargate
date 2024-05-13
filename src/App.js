import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultNoPage from './components/Landing/DefaultNoPage';
import Home from './components/Landing/Home'
import Options from './components/Landing/Options'
import PersonByName from './components/People/PersonByName';
import DutiesByName from './components/Duties/DutiesByName';
import AllPeople from './components/People/AllPeople';
import AddDuty from './components/Duties/AddDuty';
import AddUpdatePerson from './components/People/AddUpdatePerson';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/options" element={<Options/>} />
      <Route exact path="/personbyname" element={<PersonByName/>} />
      <Route exact path="/dutiesbyname" element={<DutiesByName/>} />
      <Route exact path="/allpeople" element={<AllPeople/>} />
      <Route exact path="/addduty" element={<AddDuty/>} />
      <Route exact path="/addupdateperson" element={<AddUpdatePerson/>} />
      <Route exact path="*" element={<DefaultNoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
