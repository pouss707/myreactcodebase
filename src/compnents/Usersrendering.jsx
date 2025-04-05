import React from 'react'
import './Usersrendering.css'; // Assuming you have a CSS file for styling
function Usersrendering() {
    const users = [
        { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
        { id: 2, name: "Jane Smith", age: 30, email: "jane@example.com" },
        { id: 3, name: "Alice Brown", age: 22, email: "alice@example.com" }
    ];
    return (
        <div className='userlist'>
            <h1 className='title'>Users List</h1>
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.name}({user.age})-{user.email}</li>
                })}
            </ul>
        </div>
    )
}

export default Usersrendering