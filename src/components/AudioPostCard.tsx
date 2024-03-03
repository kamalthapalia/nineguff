import React from 'react';
import {AiOutlineEye, AiOutlineHeart, AiOutlinePlayCircle} from "react-icons/ai";
import {Link} from "react-router-dom";

function AudioPostCard() {
    return (
        <Link to={`/audio`}>
            <div className={`px-3 py-4 rounded-xl border border-gray-400/50 mb-4`}>
                <div className={`flex justify-between items-center`}>
                    <div className={`flex items-center gap-3`}>
                        <img className={`bg-green-600 w-14 h-14 rounded-full`}
                             src="https://images.pexels.com/photos/18965342/pexels-photo-18965342/free-photo-of-a-flower-on-a-white-background-with-a-rainbow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                        <div className={`flex flex-col gap-1`}>
                            <p className={`font-semibold`}>xXniggaXx</p>
                            <p className={`rounded-3xl border text-xs text-center py-0.5 border-white `}>a
                                Feeling</p>
                        </div>
                    </div>
                    <div className={`flex items-center gap-1.5`}><AiOutlineEye size={`1.4em`}/><p
                        className={`font-medium text-sm`}>200</p></div>
                </div>
                <div className={`py-6 flex flex-col gap-5`}>
                    <p className={`text-2xl`}>Lorem ipsum dolor sit amet.</p>
                    <div className={`flex flex-col gap-1`}>
                        <div className={`h-1.5 rounded-3xl bg-gray-300`}></div>
                        <div className={`flex justify-between`}>
                            <p>0:00</p>
                            <p>4:13</p>
                        </div>
                    </div>
                    <div className={`flex justify-center`}><AiOutlinePlayCircle size={`2em`}/></div>
                </div>
                <div className={`flex justify-between text-sm`}>
                    <div className={`flex gap-1.5 items-center`}>
                        <AiOutlineHeart/>
                        <p>12 Reactions</p>
                    </div>
                    <div>
                        <p>12 mins ago</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default AudioPostCard;