import style from "./index.module.css"
import client0 from "../../../asset/client0.png"
import client1 from "../../../asset/client1.png"
import client2 from "../../../asset/client2.png"
import client3 from "../../../asset/client3.png"
import client4 from "../../../asset/client4.png"
import client5 from "../../../asset/client5.png"
import client6 from "../../../asset/client6.png"

const Clients = () =>{

    return(
        <>
            <div className={style.client}>
                <h4>Our Clients</h4>
                <p>We have been working with some Fortune 500+ clients</p>
                <div style={{display:"flex", justifyContent: "space-evenly", width: "100%"}}>
                    <img src={client0} alt=""/>
                    <img src={client1} alt=""/>
                    <img src={client2} alt=""/>
                    <img src={client3} alt=""/>
                    <img src={client4} alt=""/>
                    <img src={client5} alt=""/>
                    <img src={client6} alt=""/>
                </div>
            </div>
        </>
    )
}
export default Clients;