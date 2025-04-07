import React from 'react';
import logo1 from '../assets/usermale.png'
import logo2 from '../assets/userfemale.png'

function Handlenewpost({ newpost, setNewpost }) {
    const onDelete = (id) => {
        setNewpost(prevState => ({
            ...prevState,
            posts: prevState.posts.filter(post => post.id !== id),
        }));
    };
    return (
        <div>
            <h1 className='formtitle'>Posts</h1>
            {newpost.posts.length > 0 ? (
                newpost.posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className='imgname'>
                            {post.gender === 'male' ? <img src={logo1} alt="male" /> : <img src={logo2} alt="female" />}
                            <h3 className='postname'>Name: {post.name}</h3>
                        </div>
                        <br />
                        <div className='detailscontainer'>
                            <div className='postdetails'>
                                <p>Email: {post.email}</p>
                                <p>Gender: {post.gender}</p>
                                <p>Country: {post.country}</p>
                                <p>Level: {post.level}</p>
                            </div>
                            <button className='deletebtn' onClick={() => onDelete(post.id)}>Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No posts yet.</p>
            )}
        </div>
    );
}

export default Handlenewpost;
