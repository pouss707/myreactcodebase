import React from 'react'
import { Link } from 'react-router-dom'

function Usersrendering() {
    const users = [
        { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
        { id: 2, name: "Jane Smith", age: 30, email: "jane@example.com" },
        { id: 3, name: "Alice Brown", age: 22, email: "alice@example.com" },
        { id: 4, name: "A Person", age: 33, email: "person@gmail.com" }
    ];

    return (
        <div>
            <header className="bg-blue-400 text-black flex justify-between items-center p-[10px] h-[60px] shadow-[0_0_0_0.05_black] font-bold">
                <h1 className='text-[24px]' >MyReactCodeBase</h1>
                <nav className='mr-[10px] p-[10px]'>
                    <ul className="flex gap-[10px]  list-image-none ">
                        <li className='
                        rounded-[5px]
                        border-[2px]
                        border-black
                        bg-white
                        shadow-[4px_4px_black]
                        text-[16px]
                        font-black
                        cursor-pointer
                        transition-all
                        duration-250
                        position:relative
                        overflow-hidden
                        z-10
                        m-0
                        p-[5px]
                         '><Link to={"/"}>Home</Link></li>
                        <li className='
                        rounded-[5px]
                        border-[2px]
                        border-black
                        bg-white
                        shadow-[4px_4px_black]
                        text-[16px]
                        font-black
                        cursor-pointer
                        transition-all
                        duration-250
                        position:relative
                        overflow-hidden
                        z-10
                        m-0
                        p-[5px]
                         '><Link to={"/Postsharing"}>Posts</Link></li>
                        <li className='
                        rounded-[5px]
                        border-[2px]
                        border-black
                        bg-white
                        shadow-[4px_4px_black]
                        text-[16px]
                        font-black
                        cursor-pointer
                        transition-all
                        duration-250
                        position:relative
                        overflow-hidden
                        z-10
                        m-0
                        p-[5px]
                         '><Link to={"/BodyMassIndex"}>Bmi</Link></li>
                        <li className='
                        rounded-[5px]
                        border-[2px]
                        border-black
                        bg-white
                        shadow-[4px_4px_black]
                        text-[16px]
                        font-black
                        cursor-pointer
                        transition-all
                        duration-250
                        position:relative
                        overflow-hidden
                        z-10
                        m-0
                        p-[5px]
                         '><Link to={"/Calculator"}>Calc</Link></li>
                    </ul>
                </nav>
            </header>
            <div className='flex justify-center items-center h-screen w-screen bg-white'>
                <div className='flex flex-col items-center justify-center bg-blue-400 h-[350px] w-[550px] rounded-[10px] shadow-[4px_4px_black] p-[10px]'>
                    <h1 className='text-black font-bold text-[20px] absolute mb-[270px]'>Users List</h1>
                    <table className='border-black border-[5px] bg-white text-black mt-[30px] '>
                        <thead>
                            <tr>
                                <th className='border-black border-[5px] p-[10px] w-[150px]'>Name</th>
                                <th className='border-black border-[5px] p-[10px] w-[150px]'>Age</th>
                                <th className='border-black border-[5px] p-[10px] w-[150px]'>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td className='border-black border-[5px] p-[10px] w-[150px]'>{user.name}</td>
                                    <td className='border-black border-[5px] p-[10px] w-[150px]'>{user.age}</td>
                                    <td className='border-black border-[5px] p-[10px] w-[150px]'>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Usersrendering