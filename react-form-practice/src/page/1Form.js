import { useState } from "react";

function MyName (){
    const [inputs, setInput] = useState({})
    

    const handleChange = ( event) =>{
        const name = event.target.name
        const value = event.target.value
        setInput(values => ({...values, [name]: value}))
    }

        const handleSubmit = (event) =>{
        event.preventDefault()
            console.log(inputs)
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

            <label>Enter Your Email:
            <input 
            type="email"
            name="email"
            value={inputs.email ||""}
            onChange={handleChange}/>
            </label>

            <label>Enter Your password:
            <input 
            type="password"
            name="password"
            value={inputs.password ||""}
            onChange={handleChange}/>
            </label>

            <label>Enter Your password again:
            <input 
            type="password"
            name="confirmpassword"
            value={inputs.confirmpassword ||""}
            onChange={handleChange}/>
            </label>
            

            
            <input type="submit"/>
        </form>

    )
}

export default MyName