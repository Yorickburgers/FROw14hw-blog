import React from 'react';
import logo from "../../assets/logo-white.png";
import "./Home.css"

function Home() {
    return (
        <>
            <div className="home-container">
            <img src={logo} alt="Company logo"/>
            <h1>Home</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fuga illum libero modi officia perspiciatis praesentium suscipit. Aperiam earum facilis ipsum magnam magni nisi, perferendis reiciendis? At harum qui unde.</h2>
            </div>
            </>
    );
}

export default Home;