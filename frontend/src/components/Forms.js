import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { BsClockFill, BsCalendar } from 'react-icons/bs';
import { CgArrowLeftO } from 'react-icons/cg';
import { GoGlobe } from 'react-icons/go';
import emailjs from '@emailjs/browser';
import {Button, Form} from 'react-bootstrap';

function Forms({ date, time, bid }) {
  const showGuests = () => {
    document.querySelector('#guest').style.display = 'block'

  }
  const [name, setname] = useState('')
  const [lastname, setlname] = useState('')
  const [email, setemail] = useState('')
  const [guest, setgemail] = useState('')
  const [data, setData] = useState('')

  useEffect(async () => {
    const res = await fetch('https://calendar-json.herokuapp.com/time/')
    const data = await res.json();
    setData(data);
  }, [])

  const sendData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "name": name, "lastName": lastname, "email": email, "guestEmail": guest, "date": date.toString().slice(0, 15), "time": time, "bid": bid });


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://calendar-json.herokuapp.com/users", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  const sendMail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_xk6io89','template_muxowvf',e.target,'user_ti1lKayI0yiBHTNNbCFG3')
    .then((result)=> {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }

  return (
    <>

      <div className='outerbox' >
        <div className='can'>
          <Link to="/calendar"> <h1 style={{ paddingTop: "5vh", paddingLeft: "5vh", borderRadius: "100%" }}><CgArrowLeftO /></h1>
           </Link>
          
          

            <form style={{display:"flex", flexDirection:"row"}} onSubmit={sendMail} >

            <div style={{ paddingTop: "13vh", textAlign: "left" }}>
            <h4>Surbhi Agarwal</h4>
            <h3 style={{ color: 'black' }}>30 Minute Meeting</h3>
            <h4 style={{ marginTop: "15px" }}><BsClockFill /> 30 min </h4>
            
              {/* <div class="form-group"
              name="time"><BsCalendar />    {time}, {date.toString().slice(0, 16)}
                <br /></div></h6 >
                <div class="form-group"
              name="date">   {time}, {date.toString().slice(0, 16)}
                <br /></div>
           
          </div> */}

          <div class="form-group">
          <BsCalendar />
                <label for="time" type="time" >
                <input  class="form-control" name="time" value={time} style={{maxWidth: '8vh', borderColor: "white"}}/>
                </label>,
                <label for="date" type="date" >
                  <input  class="form-control" name="date" value={date.toString().slice(0, 16)} style={{borderColor: "white"}}/>
                </label>
              </div>
              <h6 style={{ color: 'black', marginTop: "1px" }}><GoGlobe /> {date.toString().slice(35, -1)}</h6>
              </div>
              <hr style={{
          borderLeft: '0.6px solid gray',
          height: "70%",
          position: "absolute",
          left: "40%",
          paddingTop: "0vh",
          paddingBottom: "0vh"
        }} />



            <div style={{ paddingLeft: "15vh", paddingTop: '10vh', paddingBottom: "30vh", color: 'black', textAlign: "left", fontWeight: "bold" }}>

              <h4>Enter Details</h4>
              <div class="form-group">
                <label for="name">First Name:
                  <input type="firstName" class="form-control" name="name" onChange={(e) => setname(e.target.value)} />
                </label>
                <label for="lastName" style={{ marginLeft: "10px" }}>Last Name:
                  <input type="lastName" class="form-control" name="lastName" onChange={(e) => setlname(e.target.value)} />
                </label>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" name="email" onChange={(e) => setemail(e.target.value)} />
              </div>
              <button type="button" class="btn btn-dark" onClick={() => showGuests()} style={{ width: "130px", height: "40px" }}>
                Add Guests</button>
              <div class="form-group" id="guest" style={{ display: 'none' }}>
                <label for="email" >Guests Email:</label>
                <input type="email" class="form-control" name="gemail" onChange={(e) => setgemail(e.target.value)} />
                <p style={{ fontWeight: "normal" }}>Notify up to 10 additional guests of the scheduled event.</p>
              </div>
              <br />
              
              <button style={{fontColor: "white"}} class="btn btn-primary" onClick={sendData} >
                <Link to="/last" style={{color:"white"}}>submit</Link></button> 
               </div>   </form>
          </div>
        </div>
      
    </>
  )
}

export default Forms;
