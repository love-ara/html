import LogoN from "../../asset/LogoN.png"
import send from "../../asset/send.png"
import style from "./index.module.css"
import web from "../../asset/web.png"
import inst from "../../asset/inst.png"
import twitter from "../../asset/twitter.png"
import youtube from "../../asset/youtube.png"


function YearCopyright() {
    return  <p id="copyright-year"> Copyright © {new Date().getFullYear()} Nexcent ltd.</p>;
}


const Footer = () => {
    return(
        <>
            <div className={style.footer}>
                <div>
                    <img src={LogoN} alt="logo"/>
                    <YearCopyright/>
                    <p style={{display: "block"}}>All rights reserved</p>
                    <div>
                        <img src={web} alt=""/>
                        <img src={inst} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={youtube} alt=""/>
                    </div>
                </div>
                <div className={style.footerSide}>
                    <div  className={style.p}>
                        <div><p>Company</p></div>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div  className={style.p}>
                        <div><p>Support</p></div>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <p>Stay up to date</p>
                        <label style={{border: "none", borderRadius: "5px"}}>
                            <input placeholder="Your email address" className={style.input}/>
                            <img src={send} className={style.image} alt="image"/>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;