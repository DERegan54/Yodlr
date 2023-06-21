import React, {useState, useEffect, useContext} from 'react'
import YodlrApi from './YodlrApi';
import User from './User';

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        async function getAllUsers() {
            let users = await YodlrApi.getAllUsers();
            setUsers(users);
        }           
        getAllUsers();
    }, []);

    console.log(users);

    
    return (
        <div className='Admin'>
            <h1>Admin</h1>
            <h3>All Yodlr Users:</h3>
            {users.map((u) => (
                <User
                    key={u.id}
                    firstName={u.firstName} 
                    lastName={u.lastName}
                    email={u.email}
                    state={u.state}
                />  
            ))} 
        </div>
    );
}

export default Admin;