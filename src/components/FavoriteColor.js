import { useState } from "react"

function FavoriteColor() {
    const [color, setColor] = useState("Red")
    function updateColor() {
        setColor('Blue')
    }
    return <>
        <h1>My Favorite Color is {color}</h1>
        <button onClick={updateColor}>Change color</button>
    </>
}

export default FavoriteColor;