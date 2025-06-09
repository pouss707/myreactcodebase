import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
function Calculator() {
    const [num, setNum] = useState(0)

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
                         '><Link to={"/Usersrendering"}>Users</Link></li>
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
                         '><Link to={"/Weather"}>weather</Link></li>
                    </ul>
                </nav>
            </header>
            <div className='flex justify-center items-center h-screen w-screen bg-white'>
                <div className=' flex justify-center items-center  text-black bg-blue-400 p-[30px] rounded m-10 h-[350px] w-[550px] shadow-[4px_4px_black] '>
                    <h1 className=' absolute text-[40px] font-bold mb-[150px]'>{num}</h1>
                    <button className='relative z-10 flex items-center justify-center
                        w-[90px] h-[70px] p-2  rounded-[5px] border-2
                        border-black bg-white shadow-[4px_4px_0px_black]
                        text-black text-[16px] font-semibold cursor-pointer
                        transition-all duration-250 hover:text-white
                        before:content-[""] before:absolute before:top-0
                        before:left-0 before:h-full before:w-0 before:bg-[#212121]
                        before:-z-10 before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)]
                        before:transition-all before:duration-250 hover:before:w-full'
                        onClick={() => setNum(num + 1)}>+</button>
                    <button className='relative z-10 flex items-center justify-center
                        w-[90px] h-[70px] p-2  rounded-[5px] border-2
                        border-black bg-white shadow-[4px_4px_0px_black]
                        text-black text-[16px] font-semibold cursor-pointer
                        transition-all duration-250 hover:text-white
                        before:content-[""] before:absolute before:top-0
                        before:left-0 before:h-full before:w-0 before:bg-[#212121]
                        before:-z-10 before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)]
                        before:transition-all before:duration-250 hover:before:w-full'
                        onClick={() => { num > 0 ? (setNum(num - 1)) : (0) }}><FontAwesomeIcon />-</button>
                </div>
            </div>
        </div>


    )
}

export default Calculator