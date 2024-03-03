import React from 'react';
import {AiOutlineFire, AiOutlineSearch} from "react-icons/ai";
import {FaFire} from "react-icons/fa6";
import {FaFireAlt} from "react-icons/fa";

function Navbar() {
    return (
        <div className={`flex justify-between py-4`}>
            <p className={`font-semibold`}>9Guff</p>
            <div className={`flex items-center gap-3`}>
                <AiOutlineSearch className={`text-lg`}/>
                <button className={` bg-white py-0.5 px-2 rounded-md text-gray-800`}>
                    <div className={`flex justify-center items-center`}>
                        <AiOutlineFire
                            className={`text-red-600`}/>
                        <p>Trending</p>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Navbar;