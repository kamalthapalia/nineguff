import React from 'react';
import {AiOutlineEye, AiOutlineHeart} from "react-icons/ai";

function ImagePostCard() {
    return (
        <div className={`px-3 py-4 rounded-xl border border-gray-400/50`}>
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
            <div className={`py-6 flex flex-col gap-3`}>
                <img
                    className={`rounded-xl w-full h-96 object-cover`}
                    src="https://images.pexels.com/photos/18965342/pexels-photo-18965342/free-photo-of-a-flower-on-a-white-background-with-a-rainbow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                <p className={``}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                    adipisci aliquid amet asperiores
                    dignissimos eos fuga modi molestiae nam necessitatibus provident quibusdam, quisquam repellat
                    voluptatibus?
                </p>
            </div>
            <div className={`flex justify-between text-sm`}>
                <div className={`flex gap-1.5 items-center`}>
                    <AiOutlineHeart/>
                    <p>12 Reactions</p>
                </div>
                <div>
                    <p className={`font-light text-sm`}>12 mins ago</p>
                </div>
            </div>
        </div>
    );
}

export default ImagePostCard;