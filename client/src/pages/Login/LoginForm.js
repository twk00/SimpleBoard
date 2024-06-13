import React, { useState } from 'react';
import '../../styles/login.css';  

const LoginForm = () => {
    const [formData, setFormData] = useState({
        id: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input type="id" id="id" name="id" value={formData.id} onChange={handleChange} required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
