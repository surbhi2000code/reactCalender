import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [booking, setBooking] = useState([])
  
  
  useEffect(async () => {
    const ress = await fetch('https://calendar-json.herokuapp.com/users')
    const booking = await ress.json();
    setBooking(booking)
  }, [])

  return (
    <>
    
     <div className='outerbox'  >
                <div style={{ paddingTop: "10vh", paddingBottom: "10vh", overflow: "auto", color:"black" }}>
                  <h1>Schedule Meetings</h1>

    {  
                booking.map(booking=>(
                  
                  <>
                  <br/>
                  <div style={{textAlign: "left", paddingLeft:"10vh"}}><h4 style={{display:"flex", flexDirection:"row"}}>
                    <span>{booking.id}. </span>
                   <span style={{paddingLeft:"3.5vh"}}> Name: {booking.name} {booking.lastName}</span> </h4>
                  <h4 style={{paddingLeft:"5vh"}}>Email: {booking.email}</h4>
                  <h4 style={{paddingLeft:"5vh"}}>Guests Email: {booking.guestEmail}</h4>
                  <h4 style={{paddingLeft:"5vh"}}>Meeting Date: {booking.date}</h4>
                  <h4 style={{paddingLeft:"5vh"}}>Meeting Time: {booking.time}</h4>
                  <br/>
                  </div>
                  </>
                ))
               
              } 
    </div>
    </div>
    </>
  );
}

export default App;
