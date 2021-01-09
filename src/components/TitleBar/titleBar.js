import React from 'react'
import { useSelector } from "react-redux";

import Navbar from 'react-bootstrap/Navbar'



export const TitleBar = () => {
    const apod = useSelector((state) => state.apod.apod);

    return (
        <div>
        <Navbar bg="light" className="justify-content-center" >
            <Navbar.Brand>{" " + apod.title}</Navbar.Brand>
        </Navbar>


            
        </div>
    )
}
