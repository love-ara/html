
import style from "./index.module.css"
const Button = () =>{
    return(
        <>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <button className={style.button}>Get a
                    Demo &#8594;</button>
            </div>
        </>
    )
}

export default Button;