import FilledButton from "../../../component/filledButton";

import {useState} from "react"
import LoginForm from "../../../component/form";

function Hero() {
    const [name, setName] = useState("your name")
    const [password, setPassword] = useState("your password")

const updateName = () => {
    setName(prevState => {
        return{
            ...prevState, password: "name"
        }
    })
}
    return(
        <>

            <LoginForm />
            {/*<FilledButton color={"purple"} text={"submit"}/>*/}
            {/*<FilledButton color={"#500060"} text={"submit"}/>*/}

            {/*<button onClick={()=>updateName("login")}>*/}
            {/*    Blue*/}
            {/*</button>*/}
            {/*<p>Hello Mavericks</p>*/}
        </>
    )
}

export default Hero;