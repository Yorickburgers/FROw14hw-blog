import React from 'react';
import "./PostTeaser.css"
import {Link} from "react-router-dom";

function PostTeaser({title, author, numberOfReactions, shareCount, postId,  key}) {
    return (
        <li className="postTeaser-container" key={key}>
            <p><Link to={`/posts/${postId}`}>{title}</Link> ({author})</p>
            <p>{numberOfReactions} reacties - {shareCount} keer gedeeld</p>
        </li>
    );
}
export default PostTeaser;