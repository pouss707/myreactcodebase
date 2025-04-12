import React, { useState } from 'react';
import Handlenewpost from './Handlenewpost';
import { Link } from 'react-router-dom';

function Postsharing() {
    const [newpost, setNewpost] = useState({
        name: '',
        email: '',
        gender: false,
        level: '',
        country: '',
        posts: []
    });

    const handleNewPost = (e) => {
        e.preventDefault();
        if (newpost.name === '' || newpost.email === '' || newpost.gender === false || newpost.level === '' || newpost.country === '') {
            alert('Please fill in all fields');
            return;
        }

        setNewpost(prevState => ({
            ...prevState,
            posts: [...prevState.posts,
            {
                id: Date.now(),
                name: prevState.name,
                email: prevState.email,
                gender: prevState.gender,
                level: prevState.level,
                country: prevState.country
            }],
            name: '',
            email: '',
            gender: false,
            level: '',
            country: ''
        }));
    };

    return (
        <div className='bg-white h-screen w-screen'>
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
                         '><Link to={"/Usersrendering"}>Usersredering</Link></li>
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
                         '><Link to={"/Calculator"}>Calculator</Link></li>
                    </ul>
                </nav>
            </header>
            <div className='bg-white h-screen w-screen flex justify-center items-center ' >
                <div className='bg-blue-400 flex flex-col justify-center items-center text-black rounded-[5px] p-[10px] relative  '>
                    <form onSubmit={handleNewPost}>
                        <h1 className='text-black text-[20px] font-bold mt-[10px] ml-[10px]'>create a new post</h1>
                        <br />
                        <label htmlFor="name"></label>
                        <input
                            className='bg-white  border-2 border-black rounded p-2 m-2 w-[400px] h-[70px] shadow-[4px_4px_black]'
                            id='name'
                            type="text"
                            value={newpost.name}
                            onChange={(e) => setNewpost({ ...newpost, name: e.target.value })}
                            placeholder="Name" />
                        <br />
                        <label htmlFor="email"></label>
                        <input
                            className='bg-white  border-2 border-black rounded p-2 m-2 w-[400px] h-[70px] shadow-[4px_4px_black]'
                            id='email'
                            type="email"
                            value={newpost.email}
                            onChange={(e) => setNewpost({ ...newpost, email: e.target.value })}
                            pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.com"
                            required
                            placeholder="example@gmail.com" />
                        <div className='flex justify-center items-center mt-[10px]'>
                            <label htmlFor="male" className='text-[16px] font-bold text-black'>Male:</label>
                            <input
                                className='appearance-none w-[20px] h-[20px] border-[2px] border-solid border-black rounder-full bg-white relative cursor-pointer mr-[10px] mt-[4px] checked:bg-black checked:border-white'
                                id='male'
                                type="radio"
                                value="male"
                                checked={newpost.gender === 'male'}
                                onChange={(e) => setNewpost({ ...newpost, gender: e.target.value })} />
                            <label htmlFor="female" className='text-[16px] font-bold text-black'>Female:</label>
                            <input
                                className='appearance-none w-[20px] h-[20px] border-[2px] border-solid border-black rounder-[50px] bg-white relative cursor-pointer mr-[13px] mt-[4px] checked:bg-black checked:border-white transition-colors duration-200'
                                id='female'
                                type="radio"
                                value="female"
                                checked={newpost.gender === 'female'}
                                onChange={(e) => setNewpost({ ...newpost, gender: e.target.value })} />
                            <select
                                className=' text-black text-[16px] bg-white shadow-[4px_4px_black] rounded p-[10px] border-2 border-black '
                                value={newpost.country}
                                onChange={(e) => setNewpost({ ...newpost, country: e.target.value })}>
                                <option value="">--Please choose an option--</option>
                                <option value="morocco" >Morocco</option>
                                <option value="france" >France</option>
                                <option value="USA" >USA</option>
                                <option value="spain" >Spain</option>
                            </select>
                        </div>
                        <br />
                        <div className='flex flex-col ml-[300px] space-y-2 '>
                            <label className='inline-flex items-center cursor-pointer '>
                                <input
                                    className='sr-only peer '
                                    id='beginner'
                                    type="checkbox"
                                    value="beginner"
                                    checked={newpost.level === 'beginner'}
                                    onChange={(e) => setNewpost({ ...newpost, level: e.target.value })} />
                                <div class="flex justify-center items-center shadow-[4px_4px_black] font-bold w-[110px] h-[40px] border-2 rounded-[5px] p-[5px] text-black border-black bg-white peer-checked:bg-black peer-checked:border-white peer-checked:text-white transition-colors duration-200">Buiginner</div>
                            </label>
                            <br />
                            <label className='inline-flex items-center cursor-pointer '>
                                <input
                                    className='sr-only peer '
                                    id='Intermediate'
                                    type="checkbox"
                                    value="Intermediate"
                                    checked={newpost.level === 'Intermediate'}
                                    onChange={(e) => setNewpost({ ...newpost, level: e.target.value })} />
                                <div class="flex justify-center items-center shadow-[4px_4px_black] font-bold w-[110px] h-[40px] border-2 rounded-[5px] p-[5px] text-black border-black bg-white peer-checked:bg-black peer-checked:border-white peer-checked:text-white transition-colors duration-200">Intermediate</div>

                            </label>
                            <br />
                            <label htmlFor="Expert" className='inline-flex items-center cursor-pointer '>
                                <input
                                    className='sr-only peer '
                                    id='Expert'
                                    type="checkbox"
                                    value="Expert"
                                    checked={newpost.level === 'Expert'}
                                    onChange={(e) => setNewpost({ ...newpost, level: e.target.value })} />
                                <div class="flex justify-center items-center shadow-[4px_4px_black] font-bold w-[110px] h-[40px] border-2 rounded-[5px] p-[5px] text-black border-black bg-white peer-checked:bg-black peer-checked:border-white peer-checked:text-white transition-colors duration-200">Expert</div>

                            </label>
                        </div>
                        <br />
                        <button className="
                        relative ml-[150px] z-10 flex items-center justify-center
                        w-[110px] h-[40px] p-2  rounded-[5px] border-2
                        border-black bg-white shadow-[4px_4px_0px_black]
                        text-black text-[16px] font-semibold cursor-pointer
                        transition-all duration-250 hover:text-white
                        before:content-[''] before:absolute before:top-0
                        before:left-0 before:h-full before:w-0 before:bg-[#212121]
                        before:-z-10 before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)]
                        before:transition-all before:duration-250 hover:before:w-full" type="submit">SHARE</button>
                    </form>
                    <hr />
                    <div className=''>
                        <Handlenewpost setNewpost={setNewpost} newpost={newpost} />
                    </div>

                </div>

            </div>

        </div>

    );
}

export default Postsharing;
