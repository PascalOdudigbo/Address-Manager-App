import { Link } from "react-router-dom";
import Address from "./Address";

function AddressList({addresses}){
    console.log(addresses);
    
    return(
        <div>
            <h2>Address List</h2>
            <table className="ui celled striped padded table">
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
                    edit={<Link to={`editAddress/${address.id}`}>Edit</Link>}
                    />)}
                </tbody>
            </table>
        </div>
    );
}
export default AddressList;