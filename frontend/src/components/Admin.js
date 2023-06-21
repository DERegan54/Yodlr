import React, {useState, useEffect} from 'react'
import {useHistory, Link } from 'react-router-dom/';
import YodlrApi from '../YodlrApi';


const Admin = () => {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect( () => {
        async function getAllUsers() {
            let users = await YodlrApi.getAllUsers();
            setUsers(users);
        }           
        getAllUsers();
    }, [history]);

    const deleteUser = async id => {
        await YodlrApi.deleteUser(id);
        setUsers(users => users.filter(user => user.id !== id));
    }; 

    console.log(users);

    
    return (
        <div className='Admin'>
            <p className='Admin-header'>Admin</p>
            <h2>All Yodlr Users:</h2>
            <div className='Admin-userList'>
                {users.map((u) => (
                    <div className='Admin-user'>
                      <p>First Name: {u.firstName}</p>
                      <p>Last Name: {u.lastName}</p>
                      <p>Email: {u.email}</p>
                      <p>State: {u.state}</p>
                      <br></br>
                      {/* <Link to={`/${u.id}`}><button type='submit'>Edit User</button></Link> */}
                      <button onClick={() => deleteUser(u.id)}>Delete User</button>
                    </div>
                ))} 
            </div>
        </div>
    );
}

export default Admin;