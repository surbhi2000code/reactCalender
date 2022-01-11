import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>

            <div className='outerbox'  >
                <div style={{ paddingTop: "30vh", paddingBottom: "30vh" }}>
                    <h2>Surbhi Agarwal</h2>
                    <p>Welcome to my scheduling page.<br /> Please follow the instructions to add an event to my calendar</p>     
                    <hr style={{ color: "gray", width: "50%", marginLeft: "30vh"}} />

                    <Link to="/calendar"> <button ><h2>30 Minute Meeting</h2></button></Link>
                </div>

            </div>
        </>
    )
}

export default Home;
