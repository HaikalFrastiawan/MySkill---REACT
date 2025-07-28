import { useState } from "react";

function MyForm3 (){
    const [inputs, setInput] = useState({})


    const handleChange = ( event) =>{
        const name = event.target.name
        const value = event.target.value
        setInput(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        alert(`your name: ${inputs.username} dan your age: ${inputs.age}`)

    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter Your Name:
            <input 
            type="text"
            name="username"
            value={inputs.username ||""}
            onChange={handleChange}/>
            </label>

            <label> Enter Your Age:
            <input 
            type="number"
            name="age"
            value={inputs.age ||""}
            onChange={handleChange}/>
            </label>

            <input type="submit" />

            

        </form>
    )
}

export default MyForm3