import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import YodlrApi from '../YodlrApi';
import '../App.css';

const Edit = () => {
    const [data, setData] = useState([]);
    const history = useHistory();
    const {id} = useParams();
    
    const handleChange = evt => {
        const {name, value} = evt.target;
        setData(data => ({...data, [name]: value}));
    };

    const handleSubmit = async evt => {
        evt.preventDefault();
        await YodlrApi.updateUser(data);
        history.push('/admin');
    }

    // useEffect(() => {
    //     async function getUserToEdit(id) {
    //         const user = await YodlrApi.getUser(id);
    //         setData(user);
    //     }
    //     getUserToEdit(id);
    // }, [id]);

    return (
        <div className='Edit'>
            <p className='Edit-header'>Edit User Here:</p>
            <form onSubmit={handleSubmit} className='Edit-form'>
                <label htmlFor='firstName'>First Name: </label>
                <input 
                    name="firstName"
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={data.firstName}
                    onChange={handleChange}>
                </input>
                <br></br>
                <label htmlFor='lastName'>Last Name: </label>
                <input 
                    name="lastName"
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={data.lastName}
                    onChange={handleChange}>
                </input>
                <br></br>
                <label htmlFor='email'>Email: </label>
                <input 
                    name="email"
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    value={data.email}
                    onChange={handleChange}>
                </input>
                <br></br>
                <br></br>
                <button type='submit' className='Edit-button'>Save changes</button>
            </form>
        </div>
    );
}

export default Edit;