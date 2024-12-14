import React from 'react';
import "./Post.css"
import { useNavigate } from "react-router-dom";

function Post() {

    const navigate = useNavigate();
   const [postInfo, setPostInfo] = React.useState({
       title: "",
       subtitle: "",
       content: "",
       author: "",
       created: "",
       readTime: 0,
       comments: 0,
       shares: 0
   });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostInfo((prevPostInfo) => ({
            ...prevPostInfo,
            [name]: value
        }));
    };

    const wordCounter = (content) => {
        const words = content.trim().split(/\s+/);
        return words.length;
    };

    function postHandler(e) {
        setPostInfo((prevPostInfo) => ({
            ...prevPostInfo,
            created: new Date().toISOString(),
            readTime: Math.ceil((wordCounter(postInfo.content)/100)*0.3)
        }));
        console.log(postInfo);

        e.preventDefault();
        navigate("/posts");
   }

    function onFormSubmit(e) {
        e.preventDefault();
        navigate("/posts");
    }

    return (
        <>
            <h1>Post</h1>
            <form className="post-form-container">
                <div className="post-form"><input type="text" id="title" name="title" placeholder="Typ hier je titel" required value={postInfo.title} onChange={handleChange}/>
                <input type="text" id="subtitle" name="subtitle" placeholder="Typ hier je subtitel" required value={postInfo.subtitle} onChange={handleChange}/>
                <input type="text" id="author" name="author" placeholder="Typ hier je naam" required value={postInfo.author} onChange={handleChange}/>
                <button type="button" onClick={postHandler}>Post!</button>
                </div>
                <textarea id="content" name="content" placeholder="Typ hier je bericht" required minLength="300" maxLength="2000" value={postInfo.content} onChange={handleChange}/>

            </form>
        </>
    );
}

export default Post;