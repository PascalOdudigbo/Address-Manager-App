import React from "react";

function AddAddressForm() {
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="text" name="name" placeholder="Name"/>
          <input type="text" name="work" placeholder="Work" />
          <input type="text" name="cell" placeholder="Cell" />
          <input type="text" name="address" placeholder="Address"/>
          <input type="email" name="email" placeholder="Email"/>
        </div>
        <button className="ui button" type="submit">
          Add Address
        </button>
      </form>
    </div>
  );
}

export default AddAddressForm;
