import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
// import posts from '../../constants/data.json'
import "./Posted.css"
import axios from "axios";

function Posted() {
    const { postId } = useParams();
    const [ blogpost, setBlogpost] = useState({})

    async function fetchPost() {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${postId}`);
            setBlogpost(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchPost();
        }, [postId]);


    const formattedDateNL = blogpost.created
        ? new Intl.DateTimeFormat('nl-NL', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(blogpost.created))
    : "Onbekende datum";

    return (
        <>
        {blogpost?.title ? (
            <div className="posted-container">
                <h1>{blogpost.title} ({blogpost.readTime} minuten)</h1>
                <h2>{blogpost.subtitle}</h2>

                <p>Geschreven door {blogpost.author} op {formattedDateNL}</p>

                <p>{blogpost.content}</p>

                <p>{blogpost.comments} reacties - {blogpost.shares} keer gedeeld</p>

                <p><Link to="/posts">Terug naar de overzichtspagina</Link></p>
            </div>
        ) : (
            <div className="posted-container">
                <h3>Deze blogpost bestaat niet, of er is iets misgegaan bij het ophalen van de blogpost. Probeer het opnieuw.</h3>
                <p><Link to="/posts">Terug naar de overzichtspagina</Link></p>
            </div>
        )}
            </>
            );
}

export default Posted;

