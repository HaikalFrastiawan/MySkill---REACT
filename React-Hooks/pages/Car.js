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

    return (
        <>
        <h2>
            My {car.brand}
        </h2>

        <p>
            it a {car.Color} {car.model} from {car.years}

        </p>
        </>
    )

}

export default Car
