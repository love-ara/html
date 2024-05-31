import style from "./index.module.css"
import {members} from "./data";
import {membersTwo} from "./dataTwo";

const Clients = () =>{

    return(
        <>
            <div className={style.client}>
                <h4 style={{color: "#4d4d4d", textAlign: "center", fontSize: "25px", fontFamily: "inter, sans-serif", fontWeight: "600", marginBottom: "20px"}}>Our Clients</h4>
                <p style={{marginBottom:"100px"}}>We have been working with some Fortune 500+ clients</p>
                <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                        {membersTwo.map((value, index) =>
                            <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <img src={value.image} alt={""}/>
                            </div>
                        )}
                </div>
                <div className={style.member}>
                    <p className={style.p}>Manage your entire community in a single system</p>
                    <h6>Who is Nexcent suitable for?</h6>
                </div>
                <div className={style.member2}>
                    {
                        members.map((value, index) =>
                            <div key={index} style={{display: "flex",flexDirection: "column", alignItems: "center", textAlign: "center", fontSize: "19px", color: "#4d4d4d"}}>
                            <img src={value.image} alt={""}/>
                                <h2 style={{width: "25%"}}>{value.title}</h2>
                                <p style={{width: "45%", textAlign: "center"}}>
                                    {value.text}
                                </p>
                        </div>
                    )}
            </div>
            </div>
        </>

)}


export default Clients;