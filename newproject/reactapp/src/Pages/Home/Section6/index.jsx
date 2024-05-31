import {members} from "./data"


const Section6 = () => {
    return(
        <>
            <div style={{width: "100%"}}>
                <div style={{
                    display: "grid",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: "29px",
                    color: "#595959"
                }}>
                    <h2 style={{fontSize: "58px", textAlign: "center"}}>Caring is the new marketing<br/></h2>
                    <p style={{marginTop: "-25px", fontSize: "26px", textAlign: "center"}}>The Nexcent blog is the best place to read about
                        the latest membership insights, <br/>
                        trends and more. See who's joining the community, read about how our community<br/>
                        are increasing their membership income and lot's more.</p>
                </div>
                <div>
                    <div style={{display: "flex", justifyContent: "space-evenly"}}>{
                        members.map((value, index) =>
                            <div key={index}>
                                <div style={{
                                    display: "grid",
                                    alignItems: "center",
                                    gridTemplateColumns: "1fr",
                                    marginBottom: "20px"
                                }}>
                                    <img src={value.image} alt={""} width={"486px"} height={"369px"}/>
                                </div>

                                <div style={{
                                    background: "#f5f7fa",
                                    color: "#868686",
                                    width: "420px",
                                    height: "170px",
                                    borderRadius: "10px",
                                    padding: "15px 15px",
                                    marginTop: "-100px",
                                    marginLeft: "10px",
                                    // margin: "10px 12px 10px 12px",
                                    position: "relative"
                                }}>

                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <h1 style={{textAlign: "center", fontSize: "20px", fontWeight: "600", fontFamily: "inter, sans-serif"}}>{value.text}</h1>
                                    </div>

                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <h4 style={{textAlign: "center", fontSize: "20px", fontWeight: "600", fontFamily: "inter, sans-serif", color: "#4caf4f"}}>{value.link} &#8594;</h4>
                                    </div>
                                </div>

                            </div>
                        )

                    }

                    </div>

                </div>


            </div>


        </>
    )
}

export default Section6;