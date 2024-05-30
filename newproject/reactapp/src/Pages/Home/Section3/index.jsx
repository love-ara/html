import style from "./index.module.css"
import {members} from "./data";

const Section3 = () => {
    return (
        <>
            <div className={style.section3}>
                <div>
                    <p style={{marginBottom: "0", fontWeight: "bold", fontSize: "40px"}}>Helping a local <span
                        style={{color: "#4caf4f", display: "block"}}>business reinvent itself </span>
                        <span
                            style={{
                                margin: "0",
                                fontSize: "small"
                            }}>We reached here with our hard work and dedication</span>
                    </p>
                </div>
                <div className={style.new}>
                    {members.map((value, index) =>
                        <div key={index} >
                            <img src={value.image}  style={{padding: "0px 0px 0px 0px", margin: "5px 15px 5px 25px"}} alt=""/>
                            <div style={{marginTop: "-50px"}}>
                                <p>{value.number}</p>
                                <p style={{textAlign: "left", color: "#4caf4f"}}>
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