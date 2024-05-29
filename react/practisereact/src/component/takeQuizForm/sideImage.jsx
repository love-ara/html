import {Styles} from "../styles/Styles";
import React from "react";

export function SideImage() {
    return <div style={Styles.imageContainer}>
        <img src="/img/webpix.png" alt="quiz image" style={Styles.image}/>
    </div>;
}