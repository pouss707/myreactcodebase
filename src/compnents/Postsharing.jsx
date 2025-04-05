import React, { useState } from 'react';
import Handlenewpost from './Handlenewpost';
import './Postsharing.css'; // Assuming you have a CSS file for styling
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
                <h1>New Post</h1>
                <label htmlFor="name">Name: </label>
                <input
                    id='name'
                    type="text"
                    value={newpost.name}
                    onChange={(e) => setNewpost({ ...newpost, name: e.target.value })}
                    placeholder="Name"
                />

                <br />
                <label htmlFor="email">Email: </label>
                <input
                    id='email'
                    type="email"
                    value={newpost.email}
                    onChange={(e) => setNewpost({ ...newpost, email: e.target.value })}
                    pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.com"
                    required
                    placeholder="example@gmail.com"
                />

                <br />
                <label htmlFor="male">Male</label>
                <input
                    id='male'
                    type="radio"
                    value="male"
                    checked={newpost.gender === 'male'}
                    onChange={(e) => setNewpost({ ...newpost, gender: e.target.value })}
                />
                <label htmlFor="female">Female</label>
                <input
                    id='female'
                    type="radio"
                    value="female"
                    checked={newpost.gender === 'female'}
                    onChange={(e) => setNewpost({ ...newpost, gender: e.target.value })}
                />
                <br />
                <select
                    value={newpost.country}
                    onChange={(e) => setNewpost({ ...newpost, country: e.target.value })}>
                    <option value="">--Please choose an option--</option>
                    <option value="morocco" >Morocco</option>
                    <option value="france" >France</option>
                    <option value="USA" >USA</option>
                    <option value="spain" >Spain</option>
                </select>
                <br />
                <label htmlFor="beginner">Beginner: </label>
                <input
                    id='beginner'
                    type="checkbox"
                    value="beginner"
                    checked={newpost.level === 'beginner'}
                    onChange={(e) => setNewpost({ ...newpost, level: e.target.value })} />
                <br />
                <label htmlFor="Intermediate">Intermediate: </label>
                <input
                    id='Intermediate'
                    type="checkbox"
                    value="Intermediate"
                    checked={newpost.level === 'Intermediate'}
                    onChange={(e) => setNewpost({ ...newpost, level: e.target.value })} />
                <br />
                <label htmlFor="Expert">Expert: </label>
                <input
                    id='Expert'
                    type="checkbox"
                    value="Expert"
                    checked={newpost.level === 'Expert'}
                    onChange={(e) => setNewpost({ ...newpost, level: e.target.value })} />
                <br />
                <button type="submit">SHARE</button>
            </form>

            <Handlenewpost newpost={newpost} setNewpost={setNewpost} />
        </div>
    );
}

export default Postsharing;
