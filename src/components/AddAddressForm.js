import React, { useState } from "react";

function AddAddressForm({handleAddAddress}) {
  const[name, setName] = useState("");
  const[work, setWork] = useState("");
  const[cell, setCell] = useState("");
  const[address, setAddress] = useState("");
  const[email, setEmail] = useState("");

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
    const newAddress = {
      name: name,
      work: work,
      cell: cell,
      address: address, 
      email: email
    }
    event.preventDefault();
    fetch("http://localhost:8001/addresses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(newAddress)
    })
    .then(response => response.json())
    .then(newAddressData => handleAddAddress(newAddressData));
  }

  return (
    <div className="ui segment">
      <h2>ADD NEW ADDRESS</h2>
        <form className={"form"} onSubmit={handleOnSubmit}>
            <input type="text" name="name" placeholder="Name" value={name} onChange={handleOnChange}/>
            <input type="text" name="work" placeholder="Work" value={work} onChange={handleOnChange}/>
            <input type="text" name="cell" placeholder="Cell" value={cell} onChange={handleOnChange}/>
            <input type="text" name="address" placeholder="Address" value={address} onChange={handleOnChange}/>
            <input type="email" name="email" placeholder="Email" value={email} onChange={handleOnChange}/>
            <button className="ui button" type="submit">Add Address</button>
        </form>
    </div>
  );
}

export default AddAddressForm;
