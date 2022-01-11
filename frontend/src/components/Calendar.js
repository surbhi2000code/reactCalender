import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";
import { BsClockFill } from 'react-icons/bs';
import { CgArrowLeftO } from 'react-icons/cg';


const Calender = ({ getData }) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const [data, setData] = useState([])
  const [bid, setId] = useState([])
  const [booking, setBooking] = useState([])

  useEffect(async () => {
    const res = await fetch('https://calendar-json.herokuapp.com/time/')
    const data = await res.json();
    setData(data);
    const ress = await fetch('https://calendar-json.herokuapp.com/users')
    const booking = await ress.json();
    setBooking(booking)
  }, [])

  const onChange = date => {
    setDate(date)
    enbaleButton()
    dis(date)
    document.querySelector('#show1').style.display = 'block'
  }

  const showButton = (time, id) => {
    setTime(time)
    setId(id)
    document.querySelector('#show').style.display = 'block'

  }

  const enbaleButton = () => {
    data.forEach(data => {
      document.getElementById(data.id).disabled = false;
    })
  }

  const dis = (d = date) => {

    booking.forEach(data => {
      if (d.toString().slice(0, 15) === data.date) {
        console.log('MATCH')
        document.getElementById(data.bid).disabled = true;
      }
    })
  }



  return (

    <div className='outerbox'>
      <div className='can'>
        <Link to="/"> <h1 style={{ paddingTop: "5vh", marginLeft: "2rem", borderRadius: "100%" }}><CgArrowLeftO /></h1> </Link>
        <div style={{ paddingTop: "13vh", marginLeft: "1px", textAlign: "left", fontSize: "10px" }}>
          <h4>Surbhi Agarwal</h4>
          <h3 style={{ color: 'black' }}>30 Minute Meeting</h3>
          <h4 style={{
            marginTop: "15px"
          }}><BsClockFill /> 30 min </h4>
        </div>
        <hr style={{
          borderLeft: '.5px solid #c0bcbc',
          height: "73%",
          position: "absolute",
          left: "38%",
          marginTop: "0%",

        }} />
        <div className='center' style={{ paddingTop: "10vh", paddingBottom: "20vh", display: "flex", flexDirection: "row" }}>
          <div>
            <h4 style={{ color: 'black', marginBottom: "2rem", fontSize: "30px", marginLeft: "2rem" }}>Select a Date & Time</h4>

            <Calendar onChange={onChange} value={date} style={{ paddingBottom: "20vh" }}
              minDate={new Date()}
              tileDisabled={({ date }) =>
                date.getDay() === 0 || date.getDay() === 6
              } />
          </div>

          <div className='center1' id='show1' style={{ display: 'none' }}>
            <div style={{ color: 'black', marginLeft: "2rem", paddingTop: "5vh", fontSize: "30px" }}><h6>{date.toDateString()}</h6> </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', paddingTop: "2vh", marginLeft: "2rem" }}>

              {
                booking.length !== 0 ?
                  data.map(data => (
                    <>
                      <button type="button" id={data.id} class="btn btn-light" onClick={() => showButton(data.time, data.id)}>{data.time}</button>
                    </>
                  ))
                  :
                  data.map(data => (
                    <>
                      <button type="button" class="btn btn-light" onClick={() => showButton(data.time, data.id)}>{data.time}</button>
                    </>
                  ))
              }

            </div>

            <div style={{ paddingTop: "2rem", paddingLeft: "9rem" }}>
              <Link to="/form"> <button class="btn btn-primary btn-lg" id='show' style={{ display: 'none' }} onClick={() => getData(bid, time, date)}>confirm</button></Link>
            </div>
          </div></div>
      </div>
    </div>
  )

};

export default Calender;
