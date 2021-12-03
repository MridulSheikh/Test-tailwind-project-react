import React from 'react';
import About from '../about/About';
import Blog from '../about/blog/Blog';
import Carousel from '../Carousel/Carousel';
import HomeContect from '../HomeContect/HomeContect';
import ServiceHome from '../serivehome/ServiceHome';
import Subscription from '../subscription/Subscription';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div className="bg-black">
        <h1 className="text-white  top-3 right-36 text-2xl absolute">COMET</h1>
        <div className="text-white flex items-center justify-center md:pb-20 md:pt-10">
        <div>
        <h1 className="md:text-8xl sm:text-2xl">You are fearless  <br />  companion on the  <br />  digital frontier</h1>
        <div className=" flex mt-10">
        <button className="text-black md:w-60 py-5 rounded-full bg-yellow-700 mx-4">LET'S TAKE OFF</button> <button className="bg-blue-300 text-3xl md:w-36 py-1 rounded-full"><i className="fas fa-arrow-down text-black "></i> </button>
        </div>
        </div>
        </div>
        <Carousel></Carousel>
        <About></About>
        <ServiceHome></ServiceHome>
        <Team></Team>
        <Subscription></Subscription>
        <Blog></Blog>
        <HomeContect></HomeContect>
        </div>
    );
};

export default Home;