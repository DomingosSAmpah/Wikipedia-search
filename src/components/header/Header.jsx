import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Header } from '../../data/data'
import Link from 'next/link'
import { 
    AiOutlineAppstore, AiFillAppstore
} from 'react-icons/ai'
import { FaWikipediaW } from 'react-icons/fa'

// style
import style from './header.module.css'

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className={`${style.navbar}`}>
        <div className={`${style.nav_icon}`} onClick={() => openSidebar()}>
            <i aria-hidden='true'>
                <FaBars />
            </i>
        </div>
        <div className={`${style.navbar_left}`}>
            <Link href={'/'}><AiOutlineAppstore className={`${style.ico}`}/></Link>
            <Link href={'/'} className={`${style.active_link}`}>Search Engineer</Link>
        </div>
        <div className={`${style.navbar_right}`}>
            {Header.map((list, index) => (
                <Link href={list.path} key={index}>
                    <i>{list.icon}</i>
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar