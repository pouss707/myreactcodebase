import React from 'react';
import './Handlenewpost.css'; // Assuming you have a CSS file for styling

function Handlenewpost({ newpost, setNewpost }) {
    const onDelete = (id) => {
        setNewpost(prevState => ({
            ...prevState,
            posts: prevState.posts.filter(post => post.id !== id),
        }));
    };
    return (
        <div>
            <h2>Posts</h2>
            {newpost.posts.length > 0 ? (
                newpost.posts.map((post) => (
                    <div key={post.id} className="post">
                        <h3>Name: {post.name}</h3>
                        <br />
                        <p>Email: {post.email}</p>
                        <br />
                        <p>Gender: {post.gender}</p>
                        <br />
                        <p>Country: {post.country}</p>
                        <br />
                        <p>Level: {post.level}</p>
                        <button onClick={() => onDelete(post.id)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No posts yet.</p>
            )}
        </div>
    );
}

export default Handlenewpost;
