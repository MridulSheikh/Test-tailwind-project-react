import React from 'react';

const HomeContect = () => {
    return (
        <div className="text-white flex justify-center md:mt-36 pb-5">
            <div>
            <h1 className="md:text-7xl">Is your business <br />ready to take off?<br /> Let's Chat.</h1>
            <div className="flex">
            <button className="bg-yellow-600 text-black py-5 rounded-full text-2xl px-10 mt-10 mr-5">GET IN CONTACT</button>
            <button className="bg-green-100 text-black py-5 rounded-full text-2xl px-10 mt-10">02 9745 9864</button>
            </div>
            <button className="bg-black text-white py-5 rounded-full border-2 md:w-96 mt-5 border-white border-opacity-100">HELLO@COMET.CX</button>
            </div>
        </div>
    );
};

export default HomeContect;