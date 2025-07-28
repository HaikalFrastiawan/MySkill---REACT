import { useState } from "react";

function FavoritColor (){
    const [color,setColor] = useState("red")

    return (
        <>
        <h1>
            my Favorit color is {color}
        </h1>

        <button type="button"
        onClick={ () => setColor("blue")}
        >Tap To Color Blue</button>
        </>
    )
}

export default FavoritColor