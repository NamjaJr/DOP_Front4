import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ fetchUsers }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, username, email };

        try {
            await axios.post('http://localhost:3001/users', newUser);
            fetchUsers();
            alert('Пользователь успешно создан');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Создать пользователя</button>
        </form>
    );
};

export default UserForm;
