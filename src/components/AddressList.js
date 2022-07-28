import { Link } from "react-router-dom";
import Address from "./Address";
import Search from "./Search";

function AddressList({addresses, setCurrentItem, handleFilteredData, handleDelete}){
    //console.log(addresses);
    return(
        <div>
            <Search addresses={addresses} handleSearchData={handleFilteredData} />
            <h2>ADDRESS LIST</h2>
            <table>
                <tbody>
                    <tr>
                    <th>
                        <h3 className="ui center aligned header">Name</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Work</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Cell</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Address</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Email</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Edit</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Delete</h3>
                    </th>
                    </tr>
                    {addresses.map((address)=> <Address
                    key={address.id}
                    id ={address.id}
                    name={address.name}
                    work={address.work}
                    cell={address.cell}
                    address={address.address}
                    email={address.email}
                    edit={<Link className={"editlink"} to={`editAddress`} onClick={()=>setCurrentItem(address)}>Edit</Link>}
                    deletebtn={<button className={"deletebtn"} onClick={()=>{handleDelete(address.id)}}>Delete</button>}
                    />)}
                </tbody>
            </table>
        </div>
    );
}
export default AddressList;