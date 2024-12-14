import './App.css'
import logo from './assets/logo-white.png'
import {Route, Routes} from "react-router-dom";
import Post from "./pages/post/Post.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Home from "./pages/home/Home.jsx";
import Overview from "./pages/overview/Overview.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Posted from "./pages/posted/Posted.jsx";

function App() {
    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Overview />} />
                <Route path="/post" element={<Post />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/posts/:postId" element={<Posted />} />
            </Routes>
        </div>
    )
}

export default App
