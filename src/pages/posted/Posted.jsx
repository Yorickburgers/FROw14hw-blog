import React from "react";
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json'
import "./Posted.css"

function Posted() {
    const { postId } = useParams();
    const post = posts[postId-1]

    const formattedDateNL = new Intl.DateTimeFormat('nl-NL', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(post.created));

    return (
        <div className="posted-container">
            <h1>{post.title} ({post.readTime} minuten)</h1>
            <h2>{post.subtitle}</h2>

            <p>Geschreven door {post.author} op {formattedDateNL}</p>

            <p>{post.content}</p>

            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>

            <p><Link to="/posts">Terug naar de overzichtspagina</Link></p>
        </div>
    );
}

export default Posted;

