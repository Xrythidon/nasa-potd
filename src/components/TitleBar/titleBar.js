import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export const TitleBar = ({apod}) => {
    return (
        <div>
        <Navbar bg="light" className="justify-content-center" >
            <Navbar.Brand>{" " + apod.title}</Navbar.Brand>
        </Navbar>

            
        </div>
    )
}
