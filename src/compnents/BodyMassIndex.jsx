import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BodyMassIndex() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const heightValue = parseFloat(height);
        const weightValue = parseFloat(weight);
        if (!heightValue || !weightValue) {
            setResult('Please fill in the necessary information');
            return;
        }
        const resultValue = weightValue / (heightValue ** 2);
        if (resultValue <= 18) {
            setResult(`${resultValue.toFixed(2)} underweight`);
        } else if (resultValue >= 18 && resultValue <= 24) {
            setResult(`${resultValue.toFixed(2)} normal weight`);
        } else if (resultValue >= 25 && resultValue <= 29) {
            setResult(`${resultValue.toFixed(2)} pre-obesity`);
        } else if (resultValue >= 30 && resultValue <= 34) {
            setResult(`${resultValue.toFixed(2)} obesity class 1`);
        } else if (resultValue >= 35 && resultValue <= 39) {
            setResult(`${resultValue.toFixed(2)} obesity class 2`);
        } else if (resultValue > 40) {
            setResult(`${resultValue.toFixed(2)} obesity class 3`);
        }
        setHeight('');
        setWeight('');
    };

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
                         '><Link to={"/Postsharing"}>Postsharing</Link></li>
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
            <div className=' flex justify-center items-center h-screen bg-white '>

                <form className="bg-blue-400 text-black grid justify-center items-center p-[30px] rounded m-10 shadow-[4px_4px_black] h-[350px] w-[550px] " onSubmit={handleSubmit}>
                    <h1 className='ml-[9px] text-[20px] font-bold'>Body Mass Index</h1>
                    <input
                        className='bg-white  border-2 border-black rounded p-2 m-2 w-[500px] h-[70px] shadow-[4px_4px_black]'
                        type="text"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Height in (m)"
                    />
                    <input
                        className='bg-white border-2 border-black rounded p-2 m-2 w-[500px] h-[70px] shadow-[4px_4px_black]'
                        type="text"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Weight in (kg)"
                    />
                    <div className="flex gap-[10px] justify-start items-center mt-[9px]">
                        <input
                            className='bg-white  border-2 border-black rounded p-2 ml-[9px]  w-[400px] h-[70px] shadow-[4px_4px_black]'
                            type="text"
                            value={result}
                            readOnly
                            style={{ pointerEvents: 'none' }}
                            placeholder="Your result"
                        />
                        <button className="
                        relative z-10 flex items-center justify-center
                        w-[90px] h-[70px] p-2  rounded-[5px] border-2
                        border-black bg-white shadow-[4px_4px_0px_black]
                        text-black text-[16px] font-semibold cursor-pointer
                        transition-all duration-250 hover:text-white
                        before:content-[''] before:absolute before:top-0
                        before:left-0 before:h-full before:w-0 before:bg-[#212121]
                        before:-z-10 before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)]
                        before:transition-all before:duration-250 hover:before:w-full"
                            type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default BodyMassIndex