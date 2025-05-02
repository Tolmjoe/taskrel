 import Header from "../components/Header.jsx";
 import CarsSlider from "../components/Car-Slides.jsx";
 import {Link} from "react-scroll";
 import Models from "../components/Models.jsx";
 import {useInView} from "react-intersection-observer";
 import Footer from "../components/Footer.jsx";

 function Home() {
    const cars = ["/images/car2.png","/images/car3.png","/images/car1.png"];

    const { ref: carRef, inView: carInView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

     const { ref: leftRef, inView: leftInView } = useInView({
         triggerOnce: false,
         threshold: 0.2,
     });

     const { ref: rightRef, inView: rightInView } = useInView({
         triggerOnce: false,
         threshold: 0.2,
     });

    return (
        <>
        <Header/>
            <div className="home" id="home">
                <CarsSlider images={cars} />
                <div className="start-button-back">
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="start-button"
                    >
                        START
                    </Link>
                </div>




            </div>
            <div className="about" id="about">
                <div className="info-back">
                    <div>
                        <span className="textspo">DESIGNED TO</span><br/>
                        <span className="textspo black">GO BEYOND</span><br/>
                        <span className="textspo">PERFORMANCE</span><br/>

                       <p className="textspo2"> Revolutionary thinkers knew not
                        what they called upon themselves every single day Revolutionary thinkers knew not
                           what they called upon themselves every single day Revolutionary thinkers knew not
                           what they called upon themselves every single day Revolutionary thinkers knew not
                           what they called upon themselves every single day Revolutionary thinkers knew not
                           what they called upon themselves every single day</p>
                    </div>
                    <button className="about-button">DETAILS</button>
                </div>
                <div className="about-back">
                    <div className="gif-box">
                        <img
                            src="/images/car-race.gif"
                            alt="Car Zoommmm"
                            className="gif-image"
                        />
                    </div>
                </div>



            </div>
            <div className="models" id="models">

                <Models/>



            </div>
            <div className="information" id="information">

                <div className="inf-page">

                    <div className="inf-text-section">
                        <h4 className="inf-subtitle">CHOOSE YOUR VEHICLE</h4>
                        <h1 className="inf-title">OAKRIGS VEHICLE LP <br/> 980-5 ULTIMATE</h1>
                    </div>
                    <div className="background-number">980-5</div>
                    <div className="inf-image-section">
                        <img ref={carRef} src="/images/Porsche.jpeg" alt="Inf Car" className={`inf-image ${carInView ? "drop-in" : ""}`} />
                    </div>

                    <div className="inf-tab">
                        <div className="info1">POWER(KW) <br/> <span className="inf-i">980 cv (478W)</span></div>
                        <div className="inf2">MAX.SPEED<br/> <span className="inf-i">700km/h</span></div>
                        <div className="info3">0-100K/H<br/> <span className="inf-i">2.9s - 9.1s</span></div>
                    </div>
                </div>




            </div>
            <div className="contact" id="contact">

                <div className="contact-page">
                    <div ref={leftRef} className={`image-contact ${leftInView ? "slide-in-left" : ""}`}>
                        <img src="/images/spider.jpeg" alt="Contact Car" className="contact-img" />
                    </div>

                    <div ref={rightRef} className={`form-section ${rightInView ? "slide-in-right" : ""}`}>
                        <h2 className="contact-header">SUBSCRIBE TO GET <br/> YOUR OAKRIGS VEHICLE</h2>
                        <form className="contact-form">
                            <input type="text" name="name" placeholder="Enter Names" required />
                            <input type="email" name="email" placeholder="Enter Email" required />
                            <button type="submit" className="send-button">Send Email</button>
                        </form>
                    </div>

                </div>

                <Footer/>
            </div>
        </>
    )
 }


 export default Home