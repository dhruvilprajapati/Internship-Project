import { Link } from "react-router-dom";
import twitter from './../images/twitter.png'
import linkedin from './../images/linkedin.png'
import github from './../images/github.png'
import instagram from './../images/instagram.png'
import facebook from './../images/facebook.png'
import me from './../images/me.jpg'
import usericon from './../images/usericon.jpg'


function Header() {
    return (
        <div>

            <nav className="navbar fixed-top mt-10 bg-dark fn">
                <div className="container-fluid ">
                   <span className=" text-white fs-4">PORTFOLIO</span>
                    <span className=" btn-light border rounded-5 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"> <img src={usericon} width={40} className="rounded-5" /> </span>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header bg-dark text-white">
                            <h5 className="offcanvas-title " id="offcanvasNavbarLabel">My Profile</h5>
                            <button type="button" className="btn-close  btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body bg-dark">
                            <ul className="navbar-nav  flex-grow-1 pe-3 d-flex justify-content-center ">
                                <li className="nav-item ">
                                    <img src={me} className="img-fluid rounded-circle border  mx-auto d-block " width="60%" alt="Myself" />
                                </li>
                                <h1 className="text-white nav-link active d-flex justify-content-center  mt-2 fs-3">Dhruvil
                                    Prajapati </h1>
                                <div className="d-flex justify-content-around ">

                                   <a href="https://twitter.com/Prajapati_DP_?t=m-WeiL0bxUSxRtE3_aI00g&s=09" target="_blank"><img src={twitter} className="img-fluid nkhome zoom" alt="twitter" width={30} /></a>
                                   <a href="https://www.linkedin.com/in/dhruvil-prajapati-98b803214" target="_blank"> <img src={linkedin} className="img-fluid nkhome zoom " alt="linkedin" width={30} /></a>
                                   <a href="https://github.com/dhruvilprajapati" target="_blank"> <img src={github} className="img-fluid nkhome zoom" alt="github" width={30} /></a>
                                   <a href="https://instagram.com/d_h_r_u_v_i_l__099?igshid=YmMyMTA2M2Y="target="_blank">  <img src={instagram} className="img-fluid zoom " alt="instagram" width={30} /></a>
                                   <a href="https://www.facebook.com/profile.php?id=100010481741253"target="_blank">  <img src={facebook} className="img-fluid zoom" alt="facebook" width={30} /></a>
                                </div>
                                <li className="text-white nav-link active d-flex justify-content-center mt-2 fs-4" data-bs-dismiss="offcanvas"><Link to={'/'} className="nav-link px-2  text-white zoom">Home</Link></li>
                                <li className="text-white nav-link active d-flex justify-content-center  fs-4"data-bs-dismiss="offcanvas"><Link to={'/education'} className="nav-link px-2 text-white zoom">Education</Link></li>
                                <li className="text-white nav-link active d-flex justify-content-center  fs-4"data-bs-dismiss="offcanvas"><Link to={'/experience'} className="nav-link px-2 text-white zoom">Experience</Link></li>
                                <li className="text-white nav-link active d-flex justify-content-center  fs-4"data-bs-dismiss="offcanvas"><Link to={'/skills'} className="nav-link px-2 text-white zoom">Skills</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>


    );
}

export default Header;
