import React ,{useState} from "react";
import "../components/styles/Layout.css"
import {BiArrowToTop} from "react-icons/bi"
import {BsFillPeopleFill,BsDot} from "react-icons/bs"
import {AiOutlineWhatsApp,AiFillLinkedin} from "react-icons/ai"
import {FaGithubAlt} from "react-icons/fa"
import {SiMicrosoftoutlook} from "react-icons/si"

function Layout({children}){
    const [loading,setLoading]= useState(true)
    const cambiarEstado=()=>{
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }
    if(loading){
        cambiarEstado();
        return(
            <div className="Load">
                <h2>
                    <span className="sLoad1"><BsDot/></span>
                    <span className="sLoad2"><BsDot/></span>
                    <span className="sLoad3"><BsDot/></span>
                    <span className="sLoad4"><BsDot/></span>
                </h2>
            </div>
        )
    }
    
    else{
        return(
            <div>
                <nav>
                <iframe style={{
                    borderRadius:"12px"
                }} src="https://open.spotify.com/embed/playlist/1gW0qXWlvh1MUiLfFrUHet?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <ul>
                        <li><a href="#" style={{
                            display:"flex"
                        }}>Home</a></li>
                        <li><a href="#firstCont" style={{
                            display:"flex"
                        }}>Go Top <BiArrowToTop size={15} className="UpIcon"/></a></li>
                    </ul>
                </nav>

                <BsFillPeopleFill size={40} className="SNbtn"/>
                <div className="SNContainer">
                        <ul>
                            <li><a href="https://api.whatsapp.com/send?phone=7551382378" target="_blank"><AiOutlineWhatsApp size={30} className="SNicon WhatsApp"/></a></li>
                            <li><a href="https://www.linkedin.com/in/luisfer--/" target="_blank"><AiFillLinkedin size={30} className="SNicon Linkedin"/></a></li>
                            <li><a href="https://github.com/LuisF1203" target="_blank"><FaGithubAlt size={30} className="SNicon Github"/></a></li>
                            <li><a href="mailto:luisfer.montesblanco@Outlook.com" target="_blank"><SiMicrosoftoutlook size={30} className="SNicon Outlook"/></a></li>
                        </ul>
                </div>
                
                {/* 
                starts main
                */}
                <main>
                {children}
                </main>
                {/* 
                end of main    
                */}

            </div>
        )
    }

}

export default Layout