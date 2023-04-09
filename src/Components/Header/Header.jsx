import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {

    const [open, setOpen] = useState(false)


    return (

        <nav className='bg-gray-300 p-5'>




            <div className='flex items-center justify-between'>
                <div> <h2 className='text-3xl font-bold'>JobZone</h2></div>


                <div>

                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <span>{open === true ? <XMarkIcon className='h-6 w-6 text-purple-600'></XMarkIcon> :
                            <Bars3Icon className='h-6 w-6  text-purple-600'></Bars3Icon>}</span>
                    </div>

                    <ul className={`md:flex md:p-0 p-5 bg-gray-300 absolute items-center  md:space-x-8  md:static duration-500  ${open ? 'top-16 right-0' : '-top-96'}`}>
                        <li className = 'mt-2 md:mt-0'>
                            <NavLink
                                to='/'
                                aria-label='Home'
                                title='Home'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className = 'mt-2 md:mt-0'>
                            <NavLink
                                to='/Statistics'
                                aria-label='Statistics'
                                title='Statistics'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Statistics
                            </NavLink>
                        </li>
                        <li className = 'mt-2 md:mt-0'>
                            <NavLink
                                to='/applied-jobs'
                                aria-label='applied-jobs'
                                title='applied-jobs'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Applied Jobs
                            </NavLink>
                        </li>
                        <li className = 'mt-2 md:mt-0'>
                            <NavLink
                                to='/blog'
                                aria-label='blog'
                                title='blog'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                blog
                            </NavLink>
                        </li>
                        <li className = 'mt-2 md:mt-0'><button className='btn-primary'>Apply Now</button></li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;