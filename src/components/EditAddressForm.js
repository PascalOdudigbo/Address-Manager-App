import React, { useState } from "react";

function EditAddressForm({targetAddress, handleDataEdit}) {
    //console.log(addresses);
    const[name, setName] = useState(targetAddress.name);
    const[work, setWork] = useState(targetAddress.work);
    const[cell, setCell] = useState(targetAddress.cell);
    const[address, setAddress] = useState(targetAddress.address);
    const[email, setEmail] = useState(targetAddress.email);
    
    function handleOnChange(event){
        if(event.target.name === "name"){
            setName(event.target.value);
        }
        else if (event.target.name === "work"){
            setWork(event.target.value);
        }
        else if (event.target.name === "cell"){
            setCell(event.target.value);
        }
        else if (event.target.name === "address"){
            setAddress(event.target.value);
        }
        else{
            setEmail(event.target.value);
        }
       
    }

    function handleOnSubmit(event){
        event.preventDefault();
        const editedData = {
            name: name,
            work: work,
            cell: cell,
            address: address, 
            email: email
        } 
        fetch(`http://localhost:8001/addresses/${targetAddress.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedData)
        })
        .then(response=>response.json())
        .then(()=> handleDataEdit());
    }
    return (
    <div className="ui segment">
        <h2>EDIT {name.toUpperCase()}'s ADDRESS DETAILS</h2>
        <form className={"form"} onSubmit={handleOnSubmit}>
            <input type="text" name="name" placeholder="Name" value={name} onChange={handleOnChange}/>
            <input type="text" name="work" placeholder="Work" value={work} onChange={handleOnChange}/>
            <input type="text" name="cell" placeholder="Cell" value={cell} onChange={handleOnChange}/>
            <input type="text" name="address" placeholder="address" value={address} onChange={handleOnChange}/>
            <input type="email" name="email" placeholder="email" value={email} onChange={handleOnChange}/>
            <button className="ui button" type="submit">
                Edit Address
            </button>
        </form>
    </div>
    );
}

export default EditAddressForm;
