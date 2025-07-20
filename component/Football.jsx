function Football () {
    const shoot = (a) =>{
        alert (a)
    }
    return(
        <button onClick = {() => shoot("goalll")} > Take the shoot</button>
    )
}

export default Football
