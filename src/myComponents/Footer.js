import React from 'react'

export default function Footer() {
    let footerStyle={
        position: "relative",
     
        width: "100%"
        
    }
    return (
        <div className="px-0">
        <footer className="bg-dark text-light py-5  " style={footerStyle}>
           <p className="text-center">
           <i> Designed by Arya Sah </i>
            </p>
        </footer>
        </div>
    )
}
