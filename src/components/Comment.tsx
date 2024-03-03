import React from 'react';

function Comment() {
    return (
        <div className={`flex justify-center gap-1`}>
            <img
                className={`rounded-full imggg flex-grow object-cover`}
                src="https://images.pexels.com/photos/20331087/pexels-photo-20331087/free-photo-of-girls-in-dresses-sitting-on-a-meadow-in-a-forest-holding-a-book-and-a-small-mirror.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""/>
            <div className={` flex flex-col gap-2`}>
                <div className={`bg-dark2 p-3 flex flex-col gap-1 rounded-xl`}>
                    <p className={`font-semibold`}>XXniggerballsXX</p>
                    <p className={`font-light`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minima optio
                        velit!.</p>
                </div>
                <div className={`flex justify-end gap-3 text-sm`}>
                    <p>Reply</p>
                    <p>18 hrs ago</p>
                </div>
            </div>

        </div>
    );
}

export default Comment;