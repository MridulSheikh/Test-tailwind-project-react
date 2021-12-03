import React from 'react';
import "./style.css"
const ServiceHome = () => {
    return (
        <div className="text-center text-white">
        <div className="my-20">
        <h1 className="text-5xl">We are a full-service agency <br /> with a special focus on <br /> customer experience </h1>
        </div>
        <div className="overflow-hidden">
        <div className="grid md:grid-cols-4  gap-4" >
        <div className="bg-red-900  text-white py-6 rounded-full">
        <h1 className="text-4xl">Development</h1>
        </div>
        <div className="bg-yellow-600 text-black py-5 rounded-full">
        <h1 className="text-4xl">Digital strategy</h1>
        </div>
        <div className="bg-green-900 text-white py-5 rounded-full">
        <h1 className="text-2xl">Digital transformation</h1>
        </div>
        <div className="bg-black text-white py-5 rounded-full border-4 border-white border-opacity-100">
        <h1 className="text-4xl">Elements</h1>
        </div>
        </div>
        <div className="grid md:grid-cols-3  gap-4 mt-6">
        <div className="bg-black text-white py-5 rounded-full border-4 border-white border-opacity-100">
        <h1 className="text-3xl">Markating + Advertising</h1>
        </div>
        <div className="bg-green-200 text-black py-5 rounded-full">
        <h1 className="text-3xl">Customer journey making</h1>
        </div>
        <div  className="bg-red-900  text-white py-6 rounded-full">
        <h1 className="text-3xl">Merkating Automation</h1>
        </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-6 -mr-60">
        <div className="bg-green-900 text-white py-5 rounded-full">
        <h1 className="text-3xl">E-Commerce</h1>
        </div>
        <div className="bg-black text-white py-5 rounded-full border-4 border-white border-opacity-100">
        <h1 className="text-3xl">UX-Desing</h1>
        </div>
        <div className="bg-yellow-600 text-black py-5 rounded-full">
        <h1 className="text-4xl">Workshop Facilitation</h1>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ServiceHome;