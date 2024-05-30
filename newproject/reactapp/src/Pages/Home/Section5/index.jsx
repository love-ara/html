
import style from "./index.module.css"
import image9 from "../../../asset/image9.png"
import {members} from "./data";

const Section5= ()=>{
    return(
        <>
            <div className={style.section5}>
                <img src={image9} alt={"landing page"}/>
                <div>
                    <p>We have enjoyed working with the JustGo system to setup and go live with our new membership
                        platform.<br/>
                        The initial effort to organise it along the lines of how our sport currently works was quick and
                        relatively easy.<br/>
                        The new system has already massively improved the time and effort it takes to setup and process
                        member and<br/> club applications. It will help us to communicate with people in our sport in a
                        much more effective way, and collect <br/>data to help us improve how our sport is governed.
                    </p>
                    <h3 style={{color: "#4caf4f"}}>Tim Smith</h3>
                    <h5>British Dragon Boat Racing Association</h5>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "3px"}}>
                        {  members.map((value, index) =>
                            <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <img src={value.image} alt={""}/>
                                <p style={{width: "100%", textAlign: "center", color: "#4caf4f"}}>
                                    {value.text}
                                </p>
                            </div>
                        )}
                </div>
            </div>
        </div>
</>
)
}

export default Section5;