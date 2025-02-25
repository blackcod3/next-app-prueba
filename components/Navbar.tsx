import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import ActiveLink from './active-link/ActiveLink'

const navItems = [
    {path: '/about', text: 'About'},
    {path: '/contact', text: 'Contact'},
    {path: '/pricing', text:'Pricing'},
]

export const Navbar = async () => {

    return (
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
            <Link className='flex items-center' href="/">
            <HomeIcon className='mr-2'/>
            Home</Link>

            <div className='flex flex-1'></div>

            { 
                //Itera el cabezal de la pag
                navItems.map(navItem => (
                    <ActiveLink key={navItem.path} {...navItem}/>
                ))
            }

        </nav>
    )
}
