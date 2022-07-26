import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EditAddressForm({addresses}) {
    console.log(addresses);
    const params = useParams();
    const editTarget = addresses.filter(address=> address.id === params.addressId)
    const[name, setName] = useState(editTarget.name);
    const[work, setWork] = useState(editTarget.work);
    const[cell, setCell] = useState(editTarget.cell);
    const[address, setAddress] = useState(editTarget.address);
    const[email, setEmail] = useState(editTarget.email);
    
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
    return (
    <div className="ui segment">
        <h1>Hello Edit</h1>
        <form className="ui form" onChange={handleOnChange}>
        <div className="inline fields">
            <input type="text" name="name" value={name}/>
            <input type="text" name="work" value={work} />
            <input type="text" name="cell" value={cell} />
            <input type="text" name="address" value={address}/>
            <input type="email" name="email" value={email}/>
        </div>
        <button className="ui button" type="submit">
            Edit Address
        </button>
        </form>
    </div>
    );
}

export default EditAddressForm;
