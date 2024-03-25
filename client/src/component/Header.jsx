import { Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { Button } from 'flowbite-react';
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import demobook from '../img/demobkimg.jpg'
export default function Header() {
    const path=useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <img src={demobook} alt="" className='rounded w-12 h-12'/>
        </Link>
        <form action="">
            <TextInput type='text' placeholder='Search' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch/>
        </Button>

        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon/>
            </Button>
            <Link to='/sign-in'>
                <Button gradientDuoTone="purpleToBlue" outline>Sign Up</Button>
            </Link>
            <Link to='/sign-in'>
                <Button gradientDuoTone="purpleToBlue" outline>Sign In</Button>
            </Link>
            <Navbar.Toggle/>
            
        </div>
        <Navbar.Collapse>
                <Navbar.Link active={path ==='/'} as={'div'}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path ==='/about'} as={'div'}>
                    <Link to='/about'>About</Link>
                </Navbar.Link>
                <Navbar.Link active={path ==='/projects'} as={'div'}>
                    <Link to='/shop'>Shop</Link>
                </Navbar.Link>
                <Navbar.Link active={path ==='/video'} as={'div'}>
                    <Link to='/video'>Sell Your Book</Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}
