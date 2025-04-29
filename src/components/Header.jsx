import {Link} from "react-scroll"

function Header(){
    return(
        <>
        <div className="header">
            <h4>RIDE</h4>
            <ul>
                <li className="list-link"> <Link spy={true} activeClass="active" to="home" smooth={true} duration={300}>Home</Link></li>
                <li className="list-link"> <Link spy={true} activeClass="active" to="about" smooth={true} duration={300}>About</Link></li>
                <li className="list-link"> <Link spy={true} activeClass="active" to="models" smooth={true} duration={300}>Models</Link></li>
                <li className="list-link"> <Link spy={true} activeClass="active" to="information" smooth={true} duration={300}>Information</Link></li>
                <li className="list-link"> <Link spy={true} activeClass="active" to="contact" smooth={true} duration={300}>Contact</Link></li>

            </ul>
        </div>
        </>
    )
}


export default Header