import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { Drawer } from '@mui/material';
import { Link } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import Person4Icon from '@mui/icons-material/Person4';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import 'animate.css';


function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    function toggleNavbar() {
        setIsOpen((prevlyOpen) => { return !prevlyOpen });
    }

    return <>

        <div className='flex items-center justify-between px-5 md:px-10 my-1 shadow-lg z-10'>
            <div className='text-2xl text-primary font-protest animate__animated  animate__backInLeft'>
                <Link to="/">
                    Shreshth Gupta
                </Link>

            </div>

            <div className=''>
                <ul className='flex items-center animate__animated animate__backInRight'>
                    <li className='mx-4 navHide'> <Link to="/">  Home  </Link>          </li>
                    <li className='mx-4 navHide'> <Link to="/about"> About Me </Link>   </li>
                    <li className='mx-4 navHide'> <Link to="/project"> Project </Link>  </li>
                    <li className='mx-4 navHide'> <Link to="/contact"> Contact Me </Link>  </li>

                    <li><a className="link-dec mx-4 navHide"
                        href="https://drive.google.com/file/d/1EBp4NySmyObEu_ETGGVfqQWMzZmMWw-3/view?usp=sharing" target='blank'>
                        Resume
                    </a></li>
                </ul>


                <div className="md:hidden">
                    <button onClick={toggleNavbar} className="btn">
                        <RiMenu3Fill></RiMenu3Fill>
                    </button>

                    <Drawer open={isOpen} onClose={toggleNavbar} anchor="right"
                        className='flex-col justify-between'>
                        <ul className=''>
                            <li className='mt-4 ml-4'>
                                <GiCrossMark
                                    className="cursor-pointer hover:text-primary duration-300"
                                    onClick={() => setIsOpen(!isOpen)}
                                ></GiCrossMark>
                            </li>
                            <li className='m-4'>
                                <span className=''><HomeIcon /></span>
                                <span className='mr-4 ml-6'><Link to="/">  Home  </Link></span>
                            </li>

                            <li className='m-4'>
                                <span className=''><Person4Icon /></span>
                                <span className='mr-4 ml-6'><Link to="/about"> About Me </Link></span>
                            </li>

                            <li className='m-4'>
                                <span className=''><AssignmentIcon /></span>
                                <span className='mr-4 ml-6'><Link to="/project"> Project </Link></span>
                            </li>

                            <li className='m-4'>
                                <span className=''><ConnectWithoutContactIcon /></span>
                                <span className='mr-4 ml-6'><Link to="/contact"> Contact Me </Link></span>
                            </li>

                            <li className='m-4'>
                                <span className=''><CloudDownloadIcon /></span>
                                <span className='mr-4 ml-6'> <a href="https://drive.google.com/file/d/1FvTHSiEkfom90D7WNTH8cpKanoQPMX1-/view?usp=drive_link" target='blank'> Resume </a> </span>
                            </li>

                        </ul>
                    </Drawer>
                </div>

            </div>
        </div>

    </>
}

export default Header;