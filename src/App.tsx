import React from 'react';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Comment from "./components/Comment";
import Comments from "./components/Comments";
import TextPostPage from "./pages/TextPostPage";
import ImagePostPage from "./pages/ImagePostPage";

function App() {
    return (
        <div className="bg-background min-h-screen text-gray-50 px-3">
            <ImagePostPage/>
        </div>
    );
}

export default App;
