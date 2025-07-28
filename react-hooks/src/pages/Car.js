import { useState } from "react";


function Car () {
    // const [brand, setBrand] = useState('Ford')
    // const [model, setmodel] = useState('Mustang')
    // const [years, setyears] = useState('1964')
    // const [Color, setColor] = useState('red')

    const [car,setCar] = useState({
        brand: 'ford',
        model: 'Mustang',
        years: ' 1964',
        color: 'red'
    })

    
    const updateColor = () =>{
    setCar(previousState  =>{
        return {...previousState, color: 'blue'}
    })}

    const updateBrand = () =>{
        setCar(previousState =>{
            return {...previousState,brand: 'Samsung'}
        })
    }

    return (
        <>
        <h2>
            My {car.brand}
        </h2>

        <p>
            it a {car.color} {car.model} from {car.years}

        </p>
        <button type="button" onClick={updateColor}>UpdateColor</button>
        <button type="button" onClick={updateBrand}>UpdateBrand</button>
        </>
    )

}



export default Car







