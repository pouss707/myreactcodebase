import React, { useState } from 'react';


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
    };

    return (
        <div>
            <form className="bmiform" onSubmit={handleSubmit}>
                <h1>Body Mass Index</h1>
                <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Height in (m)"
                />
                <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Weight in (kg)"
                />
                <div className="result">
                    <input
                        className='resultinput'
                        type="text"
                        value={result}
                        readOnly
                        style={{ pointerEvents: 'none' }}
                        placeholder="Your result"
                    />
                    <button className='resultbtn' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default BodyMassIndex