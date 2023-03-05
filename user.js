import React, { useEffect, useState } from "react";
const User = (props) => {
    //Value
    //the function to update state
    const [planet, setPlanet] = useState("earth");

    // componentDidMount
    useEffect(() => {
        // setPlanet("Jupite");
        console.log("Component Mounting");
    }, []);

    //componentDidUpdate
    useEffect(() => {
        console.log("Planet Changes");
    },[planet]);

    console.log(planet);
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button onClick={() => setPlanet("Pluto")}>{planet}</button>
        </div>
    );
}



export default User;