import React, { useState } from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    const [stateAge, setAge] = useState(age);
    
    const handleClick = () => {
        setAge(stateAge + 1);
    }

    return (
        <div>
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { stateAge }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ handleClick }>{ firstName } { lastName }'s' Age Button</button>
        </div>
    )
}

export default PersonCard;