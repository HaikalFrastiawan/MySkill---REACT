import { useState } from "react";

function Select (){

    const [myName,setMyname] = useState ('Haikal')

    const handleChange = (event) =>{
        setMyname(event.target.value)
    }

    return(
        <form>
            <select value={myName} onChange={handleChange}>
            <option value={"kall"}> Kall</option>
            <option value={"frass"}> Frass</option>
            <option value={'tiawan'}> tiawan</option>
            </select>
        </form>
    )
}

export default Select