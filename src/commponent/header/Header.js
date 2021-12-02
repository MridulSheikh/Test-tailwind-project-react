import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className="flex justify-between  px-4 text-2xl text-white pt-3 sticky top-0 z-40">
            <div>
            <ul className="list-none ">
            <li><NavLink to="/">Service</NavLink></li>
            <li className="mt-1"><NavLink to="/">The Write up</NavLink></li>
            <li className="mt-1"><NavLink to="/">Contect</NavLink></li>
            </ul>
            </div>
            <div>  </div>
        </div>
        <div className="text-white top-3 right-5 text-3xl fixed z-40">
        <Link to="/"><i className="fas fa-home "></i></Link>
        </div>
        </>
    );
};

export default Header;