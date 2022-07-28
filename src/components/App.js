import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddressList from './AddressList';
import EditAddressForm from './EditAddressForm';
import AddAddressForm from './AddAddressForm';
import NavBar from './NavBar';

function App() {
    const [addressData, setAddressData] = useState([]);
    const [currentItem, setCurrentItem] = useState({});
    const history = useNavigate();

    useEffect(()=>{
        fetch("https://fathomless-garden-99838.herokuapp.com/addresses")
        .then(response => response.json())
        .then(addresses => setAddressData(addresses));
    },[]);

    function handleFilteredData(searchData){
        if(searchData === ""){
            fetch("https://fathomless-garden-99838.herokuapp.com/addresses")
            .then(response => response.json())
            .then(addresses => setAddressData(addresses));
        }else{
            const filteredAddresses = addressData.filter((address)=> address.name.toLowerCase().includes(searchData.toLowerCase()));
            setAddressData(filteredAddresses);
        }
        
    }

    function handleAddAddress(newAddressData){
        setAddressData([...addressData, newAddressData]);
        history("/allAddresses");
    }

    function handleAddressDelete(id){
        //console.log("called deletion");
        //const targetAddressId = event.target.parentNode.parentNode.id;
        fetch(`https://fathomless-garden-99838.herokuapp.com/addresses/${id}`, {
            method: "DELETE"
        })
        const newAddressData = addressData.filter(address=> address.id !== id);
        setAddressData(newAddressData);
    }
    function handleAddressEdit(){
        fetch("https://fathomless-garden-99838.herokuapp.com/addresses")
        .then(response => response.json())
        .then(addresses => setAddressData(addresses));
        history("/allAddresses");
    }
  return (
    <div className="App">
     <div className={'sitetitle'}>
        <h1>ADDRESS MANAGER ABSOLUTE</h1>
     </div>   
     <NavBar/>
     <Routes>
          <Route path="/" element={<AddressList addresses={addressData} setCurrentItem={setCurrentItem} handleFilteredData={handleFilteredData} handleDelete={handleAddressDelete}/>}/>
          <Route path="/allAddresses" element={<AddressList addresses={addressData} setCurrentItem={setCurrentItem} handleFilteredData={handleFilteredData} handleDelete={handleAddressDelete}/>}/>
          <Route path="/addAddress" element={<AddAddressForm handleAddAddress={handleAddAddress}/>}/>
          <Route path={`allAddresses/editAddress`} element={<EditAddressForm targetAddress={currentItem} handleDataEdit={handleAddressEdit}/>}/>
          <Route path={`/editAddress`} element={<EditAddressForm targetAddress={currentItem} handleDataEdit={handleAddressEdit}/>}/>
      </Routes>
    </div>
  );
}

export default App;
