import './App.css';
import UserTable from "./components/usersTable/UsersTable";
import UserForm from "./components/usersForm/UserForm";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers()    ;
    }, []);

    return (
        <div>
            <h1>Таблица пользователей</h1>
            <UserForm fetchUsers={fetchUsers} />
            <UserTable users={users} fetchUsers={fetchUsers} />
        </div>
    );
};

export default App;

