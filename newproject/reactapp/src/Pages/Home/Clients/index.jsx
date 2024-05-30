import style from "./index.module.css"
import {members} from "./data";
import {membersTwo} from "./dataTwo";

const Clients = () =>{

    return(
        <>
            <div className={style.client}>
                <h4>Our Clients</h4>
                <p>We have been working with some Fortune 500+ clients</p>
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
                            <div key={index} style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
                            <img src={value.image} alt={""}/>
                                <h2>{value.title}</h2>
                                <p style={{width: "50%", textAlign: "center"}}>
                                    {value.text}
                                </p>
                        </div>
                    )}
            </div>
            </div>
        </>

)}


export default Clients;