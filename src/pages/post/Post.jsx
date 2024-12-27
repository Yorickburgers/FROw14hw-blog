import React from 'react';
import "./Post.css"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Post() {

   // const navigate = useNavigate();
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
   const [error, toggleError] = React.useState(false);
   const [posted , togglePosted] = React.useState(false);
   const [newPostId, setNewPostId] = React.useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostInfo((prevPostInfo) => ({
            ...prevPostInfo,
            [name]: value
        }));
        toggleError(false);
    };

    const wordCounter = (content) => {
        const words = content.trim().split(/\s+/);
        return words.length;
    };

    async function postPost(postData) {
        togglePosted(false);
        toggleError(false);
        try {
            const response = await axios.post("http://localhost:3000/posts/", postData);
            console.log(response.data);
            console.log("Succes! De post is gepost.");
            if (response.status === 201) {
                setNewPostId(response.data.id);
                togglePosted(true);
            } else {
                togglePosted(false);
            }
            return response;
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!postInfo.title || !postInfo.subtitle || !postInfo.content || !postInfo.author) {
            toggleError(true);
            return;
        }

        try {
            const updatedPostInfo = {
                ...postInfo,
                created: new Date().toISOString(),
                readTime: Math.ceil(wordCounter(postInfo.content) / 100 * 0.3),
            };
            await postPost(updatedPostInfo);
            toggleError(false);
            // navigate("/posts");
        } catch (e) {
            console.error("Het is niet gelukt...", e);
            toggleError(true);
        }
    }

    return (
        posted ? (
            <>
            <h3>De blogpost is succesvol toegevoegd. Je kunt deze <Link to={`/posts/${newPostId}`}>hier</Link> bekijken.</h3>
            </>
            ) : (<>
            <h1>Post</h1>
            <form className="post-form-container" onSubmit={onFormSubmit}>
                <div className="post-form">
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Typ hier je titel"
                        required
                        value={postInfo.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        placeholder="Typ hier je subtitel"
                        required
                        value={postInfo.subtitle}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="author"
                        name="author"
                        placeholder="Typ hier je naam"
                        required
                        value={postInfo.author}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                    >Post!</button>
                </div>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Typ hier je bericht"
                        required
                        minLength="300"
                        maxLength="2000"
                        value={postInfo.content}
                        onChange={handleChange}
                    />
            </form>
            {error && <h3 className="error-message"> Er is iets misgegaan</h3>}
        </>)
    );
}

export default Post;