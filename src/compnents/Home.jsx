import React from 'react'
import { Link } from 'react-router-dom'
import logocalculator from '../assets/calculator.png'
import logobmi from '../assets/bmi.png'
import logousers from '../assets/users.png'
import postsharinglogo from '../assets/postsharing.png'
function Home() {
    return (
        <div className='bg-white'>
            <section className='flex justify-center items-center h-screen bg-blue-400'>
                <span className='text-black m-0 text-[400%] text-center leading-none block font'>Hello World!!!</span>
            </section>
            <div className='bg-white h-screen flex flex-wrap mr-[20px] gap-x-4 gap-y-4 mt-[30px] '>
                <Link to="/Postsharing"><img className='w-[400px]  ' src={postsharinglogo} alt="post" /></Link>
                <Link to="/BodyMassIndex"><img className='w-[400px]  ' src={logobmi} alt="bmi" /></Link>
                <Link to="/Usersrendering"><img className='w-[400px] ' src={logousers} alt="users" /></Link>
                <Link to="/Calculator"><img className='w-[400px] ' src={logocalculator} alt="calculator" /></Link>
            </div>
        </div>
    )
}

export default Home