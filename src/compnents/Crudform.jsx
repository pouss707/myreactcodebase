import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Crudform() {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [tasks, setTasks] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editTask, setEditTask] = useState(null)
    const [search, setSearch] = useState('');
    const [items] = useState([
        'Apple',
        'Banana',
        'Orange',
        'Grapes',
        'Pineapple',
        'Mango'
    ]);

    const filteredItems = items
        .filter(item => item.toLowerCase().includes(search.toLowerCase()))
        .reduce((acc, item) => {
            acc.push(item);
            return acc;
        }, []);


    function hundlesubmit(e) {
        e.preventDefault()
        const newTask = {
            id: new Date(),
            task: task,
            description: description
        }
        if (task === '' || description === '') {
            alert('please fill the form')
            return
        }
        setTasks([...tasks, newTask])
        setTask('')
        setDescription('')
    }
    function handleEdit(task) {
        setIsEditing(true)
        setEditTask(task)
        setTask(task.task)
        setDescription(task.description)
    }
    function handleUpdate(e) {
        e.preventDefault()
        const updatedTasks = tasks.map((task) => (task.id === editTask.id ? { ...task, task, description } : task))
        setTasks(updatedTasks)
        setIsEditing(false)
        setTask('')
        setDescription('')
    }
    function handleDelete() {
        setTasks(tasks.filter((task) => task.id !== task.id))
    }

    return (
        <div>
            <header className="bg-blue-400 text-black flex justify-between items-center p-[10px] h-[60px] shadow-[0_0_0_0.05_black] font-bold">
                <h1 className='text-[24px]' >MyReactCodeBase</h1>
                <nav className='mr-[10px] p-[10px] '>
                    <ul className="flex gap-[10px]  list-image-none ">
                        <li className='rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative  overflow-hidden z-10  m-0 p-[5px]'><Link to={"/"}>Home</Link></li>
                        <li className=' rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/Postsharing"}>Posts</Link></li>
                        <li className=' rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/BodyMassIndex"}>Bmi</Link></li>
                        <li className=' rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/Usersrendering"}>Users</Link></li>
                        <li className='rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/Calculator"}>Calc</Link></li>
                    </ul>
                </nav>
            </header>
            <div className='flex justify-center items-center h-screen w-screen bg-white'>
                <div className='flex flex-col items-center justify-center bg-blue-400 h-[350px] w-[550px] rounded-[10px] shadow-[4px_4px_black] p-[10px]'>
                    <div style={{ padding: '20px' }}>
                        <input
                            type="text"
                            placeholder="Search fruits..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <ul>
                            {filteredItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <form onSubmit={isEditing ? handleUpdate : hundlesubmit}>
                        <input
                            className='border-[2px] border-black rounded-[5px] shadow-[4px_4px_black] p-[5px] m-[5px]'
                            type="text"
                            placeholder='task'
                            value={task}
                            onChange={(e) => { setTask(e.target.value) }} />
                        <input
                            className='border-[2px] border-black rounded-[5px] shadow-[4px_4px_black] p-[5px] m-[5px]'
                            type="text"
                            placeholder='description'
                            onChange={(e) => { setDescription(e.target.value) }} />
                        <button className='border-[2px] border-black rounded-[5px] shadow-[4px_4px_black] p-[5px] m-[5px]' type='submit'>submit</button>
                    </form>
                    {tasks.map((task) => (
                        <li key={task.id} className='border-[2px] border-black rounded-[5px] shadow-[4px_4px_black] p-[5px] m-[5px]'>
                            <h1>{task.task}</h1>
                            <p>{task.description}</p>
                            <button className='border-[2px] border-black rounded-[5px] shadow-[4px_4px_black] p-[5px] m-[5px]' onClick={() => { handleDelete(task) }}>delete</button>
                            <button className='border-[2px] border-black rounded-[5px] shadow-[4px_4px_black] p-[5px] m-[5px]' onClick={() => handleEdit(task)}>edit</button>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Crudform