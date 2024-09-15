import React, { useState } from "react"

const Mohit = (props) => {

    

    const [person, setPerson] = useState({name: "mohit", age: 29})
    const [flag, setFlag] = useState(false)

    function changeName(){
        
        if(flag){
            setPerson({name: "Deepak", age: 30})
            setFlag(false)
        }else{
            setPerson({name: "Mohit", age: 29})
            setFlag(true)
        }
    }

    return(
        <>
            <h2>My name is {person.name}</h2>
            <h5>My age is {person.age}</h5>
            <button onClick={changeName}>change name</button>
        </>
    ) 
}

export default Mohit;