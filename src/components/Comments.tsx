import React from 'react';
import Comment from "./Comment";
import {BsArrowRightCircle} from "react-icons/bs";

function Comments() {
    return (
        <div className={`flex flex-col gap-3`}>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <div className={`flex justify-center`}>
                <input className={`flex-grow`} type="text" name="" id=""/>
                <BsArrowRightCircle size={``}/>
            </div>
        </div>
    );
}

export default Comments;