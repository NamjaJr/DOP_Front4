import React from 'react';
import axios from 'axios';

const UserTable = ({ users, fetchUsers }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/users/${id}`);
            fetchUsers();
            alert('Пользователь удален');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    if (users.length === 0) {
        return <p>Список пуст</p>;
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default UserTable;
