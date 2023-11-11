import {AiFillLinkedin, AiOutlineTwitter, AiFillGithub} from "react-icons/ai"
import { useParams ,Link ,NavLink} from "react-router-dom"
import "./Footer.css"
export const Footer = () =>{
    return  <>
<div className="footer-section" >
<h2>Connect with us</h2> 


 <div className="connect-icons-wrapper">     

< a   target="_blank"  href=  "https://www.linkedin.com/in/shweta-jha-8094721b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" > 
<AiFillLinkedin  style = {{color:"black",  fontSize :"25px"}}/>
</a>

 <AiOutlineTwitter size = "20"/>


 <a   target="_blank" href = "https://github.com/Shwetaaaa2899" >
 < AiFillGithub style = {{color:"black",  fontSize :"25px"}}/>
 </a>
 </div>
 </div>
 </>
}