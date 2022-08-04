import React from "react";
import Layout from "../components/Layout";
import me from "../assets/sinCubre.png"
import "../components/styles/Home.css"
import {Mx} from "react-flags-select"
import {BsChevronDoubleDown} from "react-icons/bs"
import {IoLanguageSharp} from "react-icons/io5"
import {HiCode} from "react-icons/hi"
import Iteso from "../assets/iteso.jfif"

function Home(){
    return(
        <Layout>
        <BsChevronDoubleDown size={50} className="downicon"/>
        <div className="firstCont" id="firstCont">
            <div className="first">
            <h1>
                    <span style={{
                        fontSize:"30px"
                    }}><span className="Hi">👋Hi,</span>i´m</span>
                    <br />
                    <br />
                    <br />
                    Luis Fernando
                    <br />
                    <br />
                    <span style={{
                        fontSize:"30px",
                        marginTop:"10px"
                    }}>Montes Blanco</span>
                </h1>
                <img src={me} alt="Luis Fernando Montes Blanco" />
            </div>

            <div className="second">
                <h1>
                    Nationality
                    <br />
                    <br />
                    <span style={{
                        color:"green"
                    }}>ME</span>
                    <span>XI</span>
                    <span style={{
                        color:"red"
                    }}>CAN</span>

                </h1>
                <Mx width="10vw" height="10vh"/>
            </div>
        </div>
        <div className="SecondCont">
                    <div className="Who">
                        <h2>Who am I? <br/><br/> <span>🤔</span></h2>
                        <div>
                            <p>I´m a real passionate bachelor student, that loves to learn new ways of doing things.</p>
                            <ul>
                                <p>Hobbies:</p>
                                <li>Play Guitar</li>
                                <li>Lisen to music</li>
                                <li>Watch Movies/Series</li>
                                <li>Play videogames</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Education">
                        <h2>Education<br/><br/> <span><img src={Iteso} width="40px" style={{
                            borderRadius:"50%"
                        }} alt="ITESO" /></span></h2>
                        <div>
                            <a href="https://iteso.mx/" target="_blank" style={{
                                textAlign:"center"
                            }}>INSTITUTO TECNOLÓGICO DE ESTUDIOS SUPERIORES DE OCCIDENTE</a>
                            <ul>
                                <li>Studying Bachelor in Computer Systems Engineering</li>
                                <li>Expected graduation date: December 2026.</li>
                                <li>Address: Periférico Sur Manuel Gómez Morín, 8585,ITESO, 45604 San Pedro Tlaquepaque, Jalisco, Mexico.</li>
                                <li>Phone number: +52 33 3669 3434</li>
                            </ul>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119449.85545991421!2d-103.40865651809055!3d20.677389568112083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad6363a15d99%3A0x35dfe443ec2fc6c6!2sInstituto%20Tecnol%C3%B3gico%20y%20de%20Estudios%20Superiores%20de%20Occidente%20(ITESO)!5e0!3m2!1ses!2smx!4v1631143521638!5m2!1ses!2smx" 
                            style={{
                                position:"initial",
                                border:"0px",
                                width:"200px"
                            }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className="Projects" >
                        <h2>Projects<br/><br/> <span>🛠️</span></h2>
                        <div>
                            <ul>
                                <li>
                                    Sign language converter #1 (2022)
                                    <ul>
                                        <li>Developed in Python with Cvzone library, detects hand gesture and show the letter</li>
                                    </ul>
                                </li>
                                <br />
                                <li>
                                    Sign language converter #2 (2022)
                                    <ul>
                                        <li>Developed in Vite with React js, detects your voice and spells your phrase with hand gesture</li>
                                    </ul>
                                </li>
                                <br />
                                <li>
                                    Educational game for Hackathon HackSTEM21 (2021)
                                    <ul>
                                        <li>Developed with html , CSS , Js , jQuery and firebase data base <a href="https://hackaton-85827.web.app">https://hackaton-85827.web.app</a> </li>
                                    </ul>
                                </li>
                                <br />
                                <li>WebApp with firebase (2021)
                                    <ul>
                                        <li>Developed with html , CSS , Js , jQuery, firebase database and firebase Cloud Storage.</li>
                                    </ul>
                                </li>
                                <br />
                                <li>Notes App (2021)
                                    <ul>
                                        <li>Developed graphic user interface in python with tkinter.It allows you to login and save your notes, you can also change the direction of your notes to the OneDrive folder, so you can have the same information in all of your devices.</li>
                                    </ul>
                                </li>
                                <br />
                                <li>School Timetable App (2021)
                                    <ul>
                                        <li>Developed with html , CSS , Js , jQuery and electronjs.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="PL">
                        <h2>Programing Languages & platforms <br/><br/> <span><HiCode size={40} style={{
                            color:"orange"
                        }}/></span></h2>
                        <div>
                            <ul>
                                <li>Website
                                    <ul>                                        
                                        <li>
                                            <strong>Frameworks</strong>
                                            <ul>
                                                <li>Vite with React js</li>
                                            </ul>
                                        </li>
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>Js</li>
                                        <li>jQuery</li>
                                        <li>Firebase with Js</li>
                                    </ul>
                                </li>
                                <li>Python</li>
                                <li>C</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Languages">
                        <h2>Languages<br/><br/> <span><IoLanguageSharp size={40} style={{
                            color:"gray"
                        }}/></span></h2>
                        <div>
                            <ul>
                                <li>Spanish 🇲🇽 (Native)</li>
                                <li>English 🇺🇸 (Advanced)</li>
                            </ul>
                        </div>
                    </div>
        </div>

        </Layout>

    )
}
export default Home;