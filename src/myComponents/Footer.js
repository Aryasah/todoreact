import React from 'react'

export default function Footer() {
    let footerStyle={
        position: "relative",
        top: "50vh",
        width: "100%"
        
    }
    return (
        <div className="px-0">
        <footer className="bg-dark text-light py-5  " style={footerStyle}>
           <p className="text-center">
            Footer Works
            </p>
        </footer>
        </div>
    )
}
