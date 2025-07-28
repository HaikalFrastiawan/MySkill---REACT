import { useState } from "react";
function TextArea () {
    const [text,setText] = useState("")

const handleChange = (event) =>{
    setText(event.target.value)
}

return (
    <form>

        <textarea 
        rows="4"
        cols="50"
        
        value={text} onChange={handleChange} 
        placeholder="Ketik Sesuatu"/>
        <p>
            jumlah Karakter: {text.length}
        </p>

    </form>
)


}

export default  TextArea