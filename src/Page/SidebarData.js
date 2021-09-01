import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData =[
    {
        title:'Home',
        path: '/',
        icons: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },

    {
    
        title:'Girls Clothes',
        path: '/Desktop9',
        icons: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },

    {
        title:'Boys Clothes', 
        path: '/BoyClothes',
        icons: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    

    {
        title:'Toys',
        path: '/Desktop10',
        icons: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
   
    {
        title:'Shoes',
        path: '/Shoes',
        icons: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },

    
    {
        title:' ProductDetails',
        path: '/ProductDetails',
        icons: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text',
        

        
    },


    
]