import React from "react";
import { useParams } from "react-router-dom";

function Posted() {
    const { postId } = useParams();

    return (
        <>
            <h1>Old Post {postId}</h1>
        </>
    );
}

export default Posted;