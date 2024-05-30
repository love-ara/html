import Illustration from "../../../asset/Illustration.png"
import style from "./index.module.css"
import CarouselComponent from "../../../Component/carousel";

const Hero = () =>{
    return(
        <>
            <div className={style.heroSection}>
                <div>
                    <h1 className={style.h1}>Lessons and insights <span style={{color: "#4caf4f", display: "block"}}>from 8 years</span></h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button
                        style={{color: "white", background: "#4caf4f", border: "none", borderRadius: "5px", padding: "15px 30px"}}>
                        Register
                    </button>
                </div>
                <img src={Illustration} alt="illustration"/>
            </div>
            {/*<div style={{display: "flex", justifyContent: "center", color: "#4caf4f"}}>*/}
            {/*    <CarouselComponent/>*/}
            {/*</div>*/}
        </>
    )
}

export default Hero;