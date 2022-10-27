import React from "react"
import self from "../images/self.png"
import mail from "../images/icons/mail.png"
import Linkedin from "../images/icons/linkedin.png"

function Info() {
    return (
        <div className="info">
            <img className="portrait" src={self} alt="self portrait" />
            <h1 className="name">James Beavis</h1>
            <h3 className="job-title">Frontend Developer</h3>
            <h4 className="site">jamesbeavis.website</h4>
            <div className="links">
                <button className="mail"><img src={mail} alt="mail icon" />Email</button>
                <button className="linkedin" ><img src={Linkedin} alt="Linkedin icon" />LinkedIn</button>
            </div>
        </div>
    )
}

export default Info