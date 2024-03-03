import React from 'react';

function Login() {
    return (
        <div className={`mx-auto max-w-[600px]`}>
            <p className={`text-3xl font-bold pt-8`}>
                9GUFF
            </p>
            <div className={`py-8 md:py-16 flex flex-col gap-0.5 md:gap-2`}>
                <p className={`text-3xl md:text-5xl font-bold`}>WELCOME</p>
                <p className={`text-primary text-3xl md:text-5xl font-bold`}>Ladies</p>
                <p className={`mt-2`}>Login to your account.</p>
            </div>
            <div className={`flex flex-col gap-8 md:gap-12`}>
                <div className={`flex flex-col gap-1`}>
                    <label htmlFor="username">Username(DoB)</label>
                    <input
                        className={`bg-gray-300 p-2.5 outline-none rounded-lg border-none text-gray-800 outline-secondary`}
                        type="text"
                        id="username"/>
                </div>
                <div className={`flex flex-col gap-1`}>
                    <label htmlFor="password">Pincode</label>
                    <input
                        className={`bg-gray-300 p-2.5 outline-none rounded-lg border-none text-gray-800 outline-secondary`}
                        type="password" id="password"/>
                </div>
                <button className={`bg-primary py-3 rounded-lg`}>Login</button>
            </div>
            <div className={`pt-10 text-center`}>
                <p className={`text-sm cursor-pointer`}>Create new account?</p>
            </div>
        </div>
    );
}

export default Login;