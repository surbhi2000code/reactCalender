import React from 'react'
import { Link } from "react-router-dom";
import { BsClockFill, BsCalendar } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { GoGlobe } from 'react-icons/go';
function Last({ date, time }) {
    return (
        <>
            <div className='outerbox' >
                <div className='colf' style={{ paddingTop: "10vh", paddingBottom: "15vh", color: "black" }}>
                    <h4>Confirmed</h4>
                    <p>You are scheduled with Surbhi Agarwal.</p>
                    <hr style={{ color: "gray", width: "50%", marginLeft: "30vh"}} />

                    <div style={{ textAlign: "left", paddingLeft: "34vh", paddingTop: "2vh", paddingBottom: "2vh" }}>
                        <h4 style={{ color: 'black' }}> <BsClockFill /> 30 Minute Meeting</h4>
                        <h6 style={{ color: 'black' }}>
                            <span><BsCalendar />    {time}, {date.toString().slice(0, 16)}
                                <br /></span></h6 >
                        <h6 style={{ color: 'black' }}><GoGlobe />   {date.toString().slice(35, -1)}</h6>
                    </div>
                    <hr style={{ color: "gray", width: "50%", marginLeft: "30vh"}} />

                    <div style={{ textAlign: "left", paddingLeft: "34vh", paddingTop: "1vh" }}>
                        <Link to="/calendar"><BsArrowRight /> Schedule another event</Link></div>
                    <div style={{ textAlign: "center", fontWeight: "bold", paddingTop: "4vh", paddingBottom: "1vh" }}><h4>Simple. Automated. Scheduling.</h4></div>
                    <Link to="/"> <button type="button" class="btn btn-primary" style={{ borderRadius: "45%", width: "10vh", fontSize: "20px", height: "4rem" }}>Home </button></Link>
                    <p style={{ paddingTop: "1vh", color: "gray" }}>No credit card required.</p>

                </div>

            </div>
        </>
    )
}

export default Last
