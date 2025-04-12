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
            {newpost.posts.length > 0 ? (
                newpost.posts.map((post) => (
                    <div key={post.id} className="w-[350px] bg-indigo-500 rounded-[5px] flex justify-center items-center p-[10px] m-[20px] ">
                        <div className='flex flex-col items-center ml-[15px] text-black'>
                            {post.gender === 'male' ? <img className='w-[130px] h-[130px] rounder-[8px] object-cover' src={logo1} alt="male" /> : <img className='w-[130px] h-[130px] rounder-[8px] object-cover' src={logo2} alt="female" />}
                            <h3 className='mt-[10px] font-bold text-center'>Name: {post.name}</h3>
                        </div>
                        <br />
                        <div>
                            <div className='text-black text-[15px] font-bold flex justify-start flex-col gap-[10px] ml-[40px]'>
                                <p>Email: {post.email}</p>
                                <p>Gender: {post.gender}</p>
                                <p>Country: {post.country}</p>
                                <p>Level: {post.level}</p>
                            </div>
                            <button className="
                        relative ml-[150px] mt-[5px] z-10 flex items-center justify-center
                        w-[60px] h-[30px] p-2  rounded-[5px] border-2
                        border-black bg-white 
                        text-black text-[16px] font-semibold cursor-pointer
                        transition-all duration-250 hover:text-white
                        before:content-[''] before:absolute before:top-0
                        before:left-0 before:h-full before:w-0 before:bg-[#212121]
                        before:-z-10 before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)]
                        before:transition-all before:duration-250 hover:before:w-full" onClick={() => onDelete(post.id)}>Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <p className='mt-[10px]'>No posts yet.</p>
            )}
        </div>
    );
}

export default Handlenewpost;
