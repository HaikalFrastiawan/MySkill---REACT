//list styleing
function Car (props){
  return <li>I am a {props.brand}</li>
}

function Garage2(){
    const cars= [
    {id: 1, brand:'bmw'},
    {id: 2, brand:'audi'},
    {id: 3, brand:'r3'}
    ]
    return(
        <>
        <h1>Who lives in my garage</h1>
        <ul>
            {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
        </>
    )
}

export default Garage2