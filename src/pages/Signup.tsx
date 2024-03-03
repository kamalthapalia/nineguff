import React from 'react';

function Signup() {
    return (

        <div className={`mx-auto max-w-[600px]`}>
            <p className={`text-3xl font-bold pt-8`}>
                9GUFF
            </p>
            <div className={`py-8 md:py-16 flex flex-col gap-0.5 md:gap-2`}>
                <p className={`text-3xl md:text-5xl font-bold`}>Signup</p>

                <p className={`mt-2`}>Create your account.</p>
            </div>
            <div className={`flex flex-col gap-8 md:gap-12`}>
                <div className={`flex flex-col gap-1`}>
                    <label htmlFor="username">Username</label>
                    <input
                        placeholder={`Unique username`}
                        className={`bg-gray-300 p-2.5 placeholder:text-gray-500 placeholder:text-sm outline-none rounded-lg border-none text-gray-800 outline-secondary`}
                        type="text"
                        id="username"/>
                </div>
                <div className={`flex flex-col gap-1`}>
                    <label htmlFor="password">Pincode</label>
                    <input
                        placeholder={`4 digit pincode`}
                        className={`bg-gray-300 p-2.5 placeholder:text-gray-500 placeholder:text-sm outline-none rounded-lg border-none text-gray-800 outline-secondary`}
                        type="password" id="password"/>
                </div>
                <button className={`bg-primary py-3 rounded-lg`}>Signup</button>
            </div>
            <div className={`pt-10 text-center`}>
                <p className={`text-sm cursor-pointer`}>Login to existing account?</p>
            </div>
        </div>

    );
}

export default Signup;