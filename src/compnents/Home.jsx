import React from 'react'
import { Link } from 'react-router-dom'
import logocalculator from '../assets/calculator.png'
import logobmi from '../assets/bmi.png'
import logousers from '../assets/users.png'
import postsharinglogo from '../assets/postsharing.png'
import weatherscreen from '../assets/weatherscreen.png'
function Home() {
    return (
        <div className='bg-white'>
            <section className='flex flex-col justify-center items-center h-screen bg-blue-400 '>
                <span className='text-black m-0 text-[400%] text-center leading-none block font'>Hello World!!!</span>
                <p className='text-[20px] text-white'>-------this is how it all started-------</p>
            </section>
            <div className='bg-white h-[100%] w-[100%] flex flex-wrap gap-[50px] p-[20px] mt-[30px] ml-[100px]'>
                <Link to="/Postsharing"><img className='w-[400px]  border-black border-[5px] rounded-[5px] shadow-[4px_4px_black]  hover:border-blue-400 hover:shadow-[0px_0px_black]' src={postsharinglogo} alt="post" /></Link>
                <Link to="/BodyMassIndex"><img className='w-[400px]  border-black border-[5px] rounded-[5px] shadow-[4px_4px_black] hover:border-blue-400 hover:shadow-[0px_0px_black] ' src={logobmi} alt="bmi" /></Link>
                <Link to="/Usersrendering"><img className='w-[400px]  border-black border-[5px] rounded-[5px] shadow-[4px_4px_black] hover:border-blue-400 hover:shadow-[0px_0px_black] ' src={logousers} alt="users" /></Link>
                <Link to="/Calculator"><img className='w-[400px]  border-black border-[5px] rounded-[5px] shadow-[4px_4px_black] hover:border-blue-400 hover:shadow-[0px_0px_black] ' src={logocalculator} alt="calculator" /></Link>
                <Link to="/Weather"><img className='w-[400px]  border-black border-[5px] rounded-[5px] shadow-[4px_4px_black] hover:border-blue-400 hover:shadow-[0px_0px_black] ' src={weatherscreen} alt="weather" /></Link>
            </div>
        </div>
    )
}

export default Home