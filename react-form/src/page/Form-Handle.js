import { use, useState } from "react";

function MyForm2 (){
    const [name, setName] = useState ('')
    const [ChangeName, setChangeName] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        setChangeName(name)
    }
    return (
        <>
         <form onSubmit={handleSubmit}>
            <label>Masukan nama kamu 
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            </label>
            <input type="submit"/>
        </form>
        {
            setChangeName && (<h1>
                The name you entered was: {ChangeName}
            </h1>)
        }

        <h1>
            Your name {name}
        </h1>
        </>
    )
}
    

export default MyForm2