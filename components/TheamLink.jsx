import Link from 'next/link'
import React from 'react'
// import { TiArrowDownThick } from "react-icons/ti";




export const TheamLink = ({className,href,title,icon}) => {
  return (
    <button>
    <Link href={href} className= {`text align-middle focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex items-center${className}`}>
        {title}
        {icon}
    </Link>
    </button>
  )
}


 
