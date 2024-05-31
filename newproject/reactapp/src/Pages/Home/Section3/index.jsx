import style from "./index.module.css"
import {members} from "./data";

const Section3 = () => {
    return (
        <>
            <div className={style.section3}>
                <div>
                    <p style={{marginBottom: "0", fontWeight: "350", fontSize: "40px"}}>Helping a local <span
                        style={{color: "#4caf4f", display: "block"}}>business reinvent itself </span>
                        <span
                            style={{
                                margin: "0",
                                fontSize: "15px"
                            }}>We reached here with our hard work and dedication</span>
                    </p>
                </div>
                <div className={style.new}>
                    {members.map((value, index) =>
                        <div key={index} >
                            <img src={value.image}  style={{marginLeft: "45px", marginBottom: "-55px"}} alt=""/>
                            <div style={{marginTop: "-25px", marginBottom: "-25px"}}>
                                <p style={{fontSize: "28px", color: "#4d4d4d", marginBottom: "-20px", fontWeight:"500"}}>{value.number}</p>
                                <p style={{textAlign: "left", color: "#4d4d4d", fontSize: "15px", marginTop: "20px"}}>
                                    {value.text}
                                </p>

                            </div>

                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Section3;