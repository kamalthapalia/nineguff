import React from 'react';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import {Route, Routes} from "react-router-dom";
import ImagePostPage from "./pages/ImagePostPage";
import TextPostPage from "./pages/TextPostPage";

function App() {
    return (
        <div className="bg-background min-h-screen text-gray-50 px-3">
            {/*<Login/>*/}
            {/*<Signup/>*/}
            <Navbar/>
            {/*<Comments/>*/}
            {/*<Homepage/>*/}
            {/*<ImagePostPage/>*/}

            <Routes>
                <Route path={`/`} element={<Homepage/>}/>
                <Route path={`/image`} element={<ImagePostPage/>}/>
                <Route path={`/text`} element={<TextPostPage/>}/>
                <Route path={`/login`} element={<Login/>}/>
                <Route path={`/signup`} element={<Signup/>}/>

            </Routes>

        </div>
    );
}

export default App;
