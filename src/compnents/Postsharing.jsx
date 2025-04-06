import React, { useState } from 'react';
import Handlenewpost from './Handlenewpost';

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
        <div className='posts'>
            <form onSubmit={handleNewPost}>
                <h1 className='formtitle'>create a new post</h1>
                <br />
                <label htmlFor="name"></label>
                <input
                    id='name'
                    type="text"
                    value={newpost.name}
                    onChange={(e) => setNewpost({ ...newpost, name: e.target.value })}
                    placeholder="Name" />
                <br />
                <label htmlFor="email"></label>
                <input
                    id='email'
                    type="email"
                    value={newpost.email}
                    onChange={(e) => setNewpost({ ...newpost, email: e.target.value })}
                    pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.com"
                    required
                    placeholder="example@gmail.com" />
                <br />
                <div className='radio-wrapper'>
                    <label htmlFor="male" className='rlabel'>Male:</label>
                    <input
                        className='gender'
                        id='male'
                        type="radio"
                        value="male"
                        checked={newpost.gender === 'male'}
                        onChange={(e) => setNewpost({ ...newpost, gender: e.target.value })} />
                    <label htmlFor="female" className='rlabel'>Female:</label>
                    <input
                        className='gender'
                        id='female'
                        type="radio"
                        value="female"
                        checked={newpost.gender === 'female'}
                        onChange={(e) => setNewpost({ ...newpost, gender: e.target.value })} />
                    <select
                        className='drop'
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
                <div className='checkbox-wrapper'>
                    <label className='container'>
                        <span class="box">Beginner</span>
                        <input
                            id='beginner'
                            type="checkbox"
                            value="beginner"
                            checked={newpost.level === 'beginner'}
                            onChange={(e) => setNewpost({ ...newpost, level: e.target.value })} />
                        <div className='checkmark'></div>
                    </label>
                    <br />
                    <label className='container'>
                        <span class="box">Intermediate</span>
                        <input
                            id='Intermediate'
                            type="checkbox"
                            value="Intermediate"
                            checked={newpost.level === 'Intermediate'}
                            onChange={(e) => setNewpost({ ...newpost, level: e.target.value })} />
                        <div className='checkmark'></div>
                    </label>
                    <br />
                    <label htmlFor="Expert" className='container'>
                        <span class="box">Expert</span>
                        <input
                            id='Expert'
                            type="checkbox"
                            value="Expert"
                            checked={newpost.level === 'Expert'}
                            onChange={(e) => setNewpost({ ...newpost, level: e.target.value })} />
                        <div className='checkmark'></div>
                    </label>
                </div>
                <br />
                <button type="submit">SHARE</button>
            </form>

            <Handlenewpost newpost={newpost} setNewpost={setNewpost} />
        </div>
    );
}

export default Postsharing;
