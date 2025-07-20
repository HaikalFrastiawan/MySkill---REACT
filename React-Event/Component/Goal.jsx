
function MissedGoal() {
    return <h1>Missing goal</h1>
}

function MadeGoald (){
    return <h2>Your goalll!!!</h2>
}
// if stetmen
// function Goal(props){
//     const isGoal = props.isGoal

//     if(isGoal){
//         return <MadeGoald />
//     }
//         return <MissedGoal />
    
// }




//ternary operation
function Goal(props){
     const isGoal = props.isGoal
     return(
        <>
        {isGoal ? <MadeGoald /> :<MissedGoal />}
        </>
        
     )
}

export default Goal