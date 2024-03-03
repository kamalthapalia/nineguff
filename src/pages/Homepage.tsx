import React from 'react';
import Categories from "../components/Categories";
import TextPostCard from "../components/TextPostCard";
import ImagePostCard from "../components/ImagePostCard";
import AudioPostCard from "../components/AudioPostCard";

function Homepage() {
    return (
        <div>
            <Categories/>
            <div className={`flex flex-col gap-5`}>
                <TextPostCard/>
                <ImagePostCard/>
                <AudioPostCard/>
            </div>
        </div>
    );
}

export default Homepage;