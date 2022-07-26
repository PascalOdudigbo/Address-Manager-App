import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddressList from './AddressList';
import EditAddressForm from './EditAddressForm';

function App() {
    const [addressData, setAddressData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8001/addresses")
        .then(response => response.json())
        .then(addresses => setAddressData(addresses));
    },[])
  return (
    <div className="App">
     <h1>ADDRESS MANAGER</h1>
     <Routes>
          <Route exact path="/" element={<AddressList addresses={addressData}/>}/>
          {/* <Route exact path="/addAddress" element={<AddAddressForm/>}/> */}
          <Route exact path={`:addressId`} element={<EditAddressForm addresses={addressData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
