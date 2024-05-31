
import style from "./index.module.css"
import Panel from "../../../asset/Panel.png"

const Section4= ()=>{
    return(
        <>
            <div className={style.section4}>
                <img src={Panel} alt={"landing page"}/>
                <div>
                    <h1 style={{justifyContent: "center", alignItems: "center", color: "#4d4d4d"}}>How to design your site footer like we did <span
                        style={{display: "block"}}> like we did </span></h1>
                    <p style={{color: "#4d4d4d"}}>One event calendar shared across National, Regional and Club events to simplify your event experience.<br/>
                        Allowing you to create waiting lists, share data capture,
                        issue credential for course completion, apply<br/>
                        smart purchasing rules and much more.</p>
                    <button
                        style={{color: "white", background: "#4caf4f", border: "none", borderRadius: "5px", padding: "15px 30px"}}>
                        Learn More
                    </button>
                </div>
            </div>
        </>
    )
}

export default Section4;