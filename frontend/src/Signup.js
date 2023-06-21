import React, {useState} from 'react';
import YodlrApi from './YodlrApi';

const Signup = () => {
    const initialState = {firstName: "", lastName: "", email: ""};
    const [formData, setFormData] = useState({initialState});

    const handleSubmit = async (evt) => {
        evt.prevendDefault();
        const userResults = await YodlrApi.registerUser(formData);
        setFormData(initialState);  
    }

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}));
    }


    return (
        <div className='RegistrationForm'>
            <h3>Register:</h3>
            <form onSubmit={handleSubmit} >
                <label htmlFor="firstName">First Name: </label>
                <input  className="RegistrationForm-firstNameInput"
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        >
                </input>
                <br></br>
                <label htmlFor="lastName">Last Name: </label>
                <input  className="RegistrationForm-lastNameInput"
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        >
                </input>
                <br></br>
                <label htmlFor="email">Email: </label>
                <input  className="RegistrationForm-emailInput"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}>
                </input>
                <br></br>
                <br></br>
                <button type="submit" className='RegistrationForm-button'>Submit</button>
            </form>
        </div>
    );
}

export default Signup;