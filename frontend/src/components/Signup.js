import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import YodlrApi from '../YodlrApi';


const Signup = () => {
    const initialState = {firstName: "", lastName: "", email: ""};
    const [formData, setFormData] = useState(initialState);
    const history = useHistory()
    

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = async (evt) => {
        try {
            await YodlrApi.registerUser(formData);
            history.push('/admin')
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    

    return (
        <div className='Signup'>
            <p className='Signup-header'>Register Here:</p>
            <form onSubmit={handleSubmit} className='Signup-form' >
                <label htmlFor="firstName">First Name: </label>
                <input  className="RegistrationForm-firstNameInput"
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}>
                </input>
                <br></br>
                <label htmlFor="lastName">Last Name: </label>
                <input  className="Signup-lastNameInput"
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}>
                </input>
                <br></br>
                <label htmlFor="email">Email: </label>
                <input  className="Signup-emailInput"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}>
                </input>
                <br></br>
                <br></br>
                <Link to='/admin'><button type="submit" className='Signup-button' onSubmit={handleSubmit}>Register!</button></Link>
            </form>
        </div>
    );
}

export default Signup;