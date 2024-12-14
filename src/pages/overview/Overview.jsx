import React from 'react';
import posts from '../../constants/data.json'
import PostTeaser from "../../components/postTeaser/PostTeaser.jsx";
import "./Overview.css"

function Overview() {
    return (
        <>
            <h1>Alle posts</h1>
            <h2>Er zijn {posts.length} blogposts beschikbaar</h2>
            <ul className="post-list">
            {posts.map(post => (
                <PostTeaser
                    title={post.title}
                    numberOfReactions={post.comments}
                    shareCount={post.shares}
                    author={post.author}
                    key={post.id.toString()}
                    postId={post.id.toString()}
                />
                )
            )}
            </ul>
        </>
    );
}

export default Overview;