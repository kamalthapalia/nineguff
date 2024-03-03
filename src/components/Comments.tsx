import React from 'react';
import Comment from "./Comment";

function Comments() {
    return (
        <div className={`flex flex-col gap-3`}>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    );
}

export default Comments;