import React, {useEffect, useState} from 'react';
// import posts from '../../constants/data.json'
import PostTeaser from "../../components/postTeaser/PostTeaser.jsx";
import "./Overview.css"
import axios from 'axios'

function Overview() {

    const [ blogposts, setBlogposts] = useState([])


    async function fetchAllPosts() {
        try {
            const response = await axios.get("http://localhost:3000/posts");
            if (response?.data) {
                setBlogposts(response.data);
            }
        }    catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetchAllPosts();
        };

        fetchData();

    }, []);

    return (
        <>
            <h1>Alle posts</h1>
            <h2>Er zijn {blogposts.length} blogposts beschikbaar</h2>
            <ul className="post-list">
            {blogposts.length > 1 ? blogposts.map(post => (
                <PostTeaser
                    title={post.title}
                    numberOfReactions={post.comments}
                    shareCount={post.shares}
                    author={post.author}
                    key={post.id.toString()}
                    postId={post.id.toString()}
                />
                )
            ) : <h3>Er is iets misgegaan bij het ophalen van de blogposts. Probeer het opnieuw.</h3>}
            </ul>
        </>
    );
}

export default Overview;