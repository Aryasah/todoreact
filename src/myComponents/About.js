import React from 'react'
import './About.css';
import cover1 from './img/aryasah.jpeg';
import cover2 from './img/insidepag.jpeg';
export default function About() {
    return (



        <div className="containers">
            
            <p className="line anim-typewriter">Hello my name is Arya ,Cse Student</p>
            <div className="con">
            <div className="card">
        <div className="imgBox">
            <img src={cover1} alt="image"/>
            <img src={cover2} alt="image"/>

        </div>
        <div className="details">
            <div className="content">
                <h2>Arya Sah<br/><span>Web Developer</span></h2>
                <div className="social-icons">
                    <a href="https://www.facebook.com/arya.sah.98892"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/aryasah30/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/arya-sah-5100121b3/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>

                </div>
            </div>

       
    </div>
 
     </div>
    </div>
    </div>
     




    )
}
