
import Frame from "./../../../asset/Frame.png"
import style from "./index.module.css"


const Section2 = () =>{
    return (
        <>
            <div className={style.section2}>
                <img src={Frame}  alt={'section'}/>
                <div>
                    <h1 style={{display: "inline-block"}}>The unseen of spending three <span
                        style={{color: "#4caf4f", display: "block"}}>years at Pixelgrade</span>
                    </h1>
                    <p>When joining the JustGo Community, your success becomes our success.<br/>
                        In other words, our Customer Success team will be on hand from day one to<br/>
                        ensure we understand your requirements, share your goals and work with<br/>
                        you for a smooth adoption of our software.
                    </p>
                    <button
                        style={{
                            color: "white",
                            background: "#4caf4f",
                            border: "none",
                            borderRadius: "5px",
                            padding: "15px 30px"
                        }}>
                        Learn More
                    </button>
                </div>
            </div>


        </>
    )

}


export default Section2;