import Link from 'next/link';
import React from 'react';

const Header = ({themeOption}) => {


    return (
        <div className='relative'>
            <div className="navbar bg-blue-900 dark:bg-neutral text-neutral-content">
                <div className="navbar">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <div className='flex items-center'>
                            <span className='mr-2 text-white dark:text-orange-400'>Theme Change:</span>
                            <input type="checkbox" className="toggle" onChange={themeOption} />
                        </div>
                        <li><a className='text-white dark:text-orange-400'>Item 1</a></li>
                        <li>
                            <a className='text-white dark:text-orange-400'>Parent</a>
                            <ul className="p-2">
                                <li><a className="text-white dark:text-orange-400">Submenu 1</a></li>
                                <li><a className="text-white dark:text-orange-400">Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a className="text-white dark:text-orange-400">Item 3</a></li>
                    </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl text-white dark:text-orange-400" href="/">Countries</Link>
                </div>
                {/* desktop menu starts */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link href="/" className='text-white dark:text-orange-400'>All Countries</Link></li>
                    <li tabIndex={0}>
                        <details>
                        <summary className='text-white dark:text-orange-400'>Parent</summary>
                        <ul className="p-2">
                            <li><a className="text-white dark:text-orange-400">Submenu 1</a></li>
                            <li><a className="text-white dark:text-orange-400">Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a className="text-white dark:text-orange-400">Item 3</a></li>
                    </ul>
                    <div className='flex items-center'>
                        <span className='mr-2 text-white dark:text-orange-400'>Theme Change:</span>
                        <input type="checkbox" className="toggle" onChange={themeOption} />
                    </div>
                </div>
                 {/* desktop menu ends */}
            </div>
        </div>
    );
};

export default Header;