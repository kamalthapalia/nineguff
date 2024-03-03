import React from 'react';
import TextPostCard from "../components/TextPostCard";
import {BiLaugh} from "react-icons/bi";
import Comments from "../components/Comments";
import ImagePostCard from "../components/ImagePostCard";

function ImagePostPage() {
    return (
        <div className={`flex gap-8 flex-col`}>
            <ImagePostCard/>
            <div className={`flex gap-3`}>
                <div className={`flex items-center gap-1.5 text-sm bg-dark2 p-2 px-3 rounded-3xl`}>
                    <BiLaugh className={`text-xl`}/>
                    <p>Haha</p>
                </div>
                <div className={`flex items-center gap-1.5 text-sm bg-dark2 p-2 px-3 rounded-3xl`}>
                    <BiLaugh className={`text-xl`}/>
                    <p>Haha</p>
                </div>
                <div className={`flex items-center gap-1.5 text-sm bg-dark2 p-2 px-3 rounded-3xl`}>
                    <BiLaugh className={`text-xl`}/>
                    <p>Haha</p>
                </div>
            </div>
            <Comments/>
        </div>
    );
}

export default ImagePostPage;