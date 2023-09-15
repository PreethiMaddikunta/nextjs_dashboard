import React from 'react'
import css from './Sidebar.module.css';
import Link from 'next/link';
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className={css.container}>
           
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWY5rn8FaJp50KSQFUtXw78YtBXCnlstLxWw&usqp=CAU'
            alt="logo" 
            className={css.logo} />

            <div className={css.menu}>
                <Link href="/dashboard" className={css.item}> <MdSpaceDashboard size={25} title="Calendar"/> 
                </Link>
                <Link href="/calendar" className={css.item}> <AiFillCalendar size={25} /></Link>
                <Link href="/board" className={css.item}> <FaTasks size={25} /></Link>
                <Link href="/users" className={css.item}> <AiOutlineTable size={25} /></Link>
            </div>
        </div>
    )
}

export default Sidebar