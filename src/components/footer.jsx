import React from "react"
import Twitter from "../images/icons/Twitter.png"
import Facebook from "../images/icons/Facebook.png"
import Instagram from "../images/icons/Instagram.png"
import Github from "../images/icons/GitHub.png"

function Footer() {
    return (
        <div className="footer">
            <img className="socials" src={Twitter} alt="twitter icon" />
            <img className="socials" src={Facebook} alt="facebook icon" />
            <img className="socials" src={Instagram} alt="instagram icon" />
            <img className="socials" src={Github} alt="github icon" />

        </div>
    )
}

export default Footer