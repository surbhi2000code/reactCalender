import Forms from './components/Forms';
import React, { useState } from 'react';
import Home from './components/Home';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Calendar from './components/Calendar';
import Last from './components/Last';

function App() {

  const [date, setDate] = useState()
  const [time, setTime] = useState('')
  const [bid, setId] = useState('')

  const getData = (bid, time, date) => {
    setTime(time);
    setDate(date);
    setId(bid);
  }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calendar" element={<Calendar getData={getData} />} />
        <Route exact path="/form" element={<Forms date={date} time={time} bid={bid} />} />
        <Route exact path="/last" element={<Last date={date} time={time} />} />

      </Routes>
    </>
  );
}

export default App;
