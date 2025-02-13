"use client"
import Link from 'next/link';
import React from "react";
import ThemeLink from "./TheamLink";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {signOut, useSession} from "next-auth/react";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Loading  from "@/app/loading"

export const Navbar = () => {

    const{data: session, status} = useSession();
    console.log(session);
    const [show,setShow] = useState(false);
    // console.log(show)
    const pathname = usePathname();
    if (pathname.startsWith("/invoice/") && pathname !== "/invoice/new") {
        return null;
    }
    if(status === "loading"){
        return <Loading/>
    }

    function getInitials(fullName) {
        // Split the full name into words
        const words = fullName.split(" ");
    
        let initials = "";
        for (let i = 0; i < words.length; i++) {
          initials += words[i][0];
        }
        initials = initials.toUpperCase();
    
        return initials;
      }
    
      const initials = getInitials(session?.user?.name ?? "John Doe");

    return (
        <>
        
        <header className = "bg-violet-600 fixed top-0 right-0 w-full left-0 h-15 flex items-center justify-between py-4 md:px-16 text-slate-50 z-50">
            <Link className="font-bold text-2xl md:text-2xl ml-8 " href = "/">
            The1Gen.
            </Link>

            <nav className=" hidden sm:flex items-center gap-3">
                <Link href="/">Features</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Free Tools</Link>
            </nav>

            {status === "authenticated" ? (

                <div className="flex items-center gap-4">
                <div className="flex items-center space-x-4">
                  <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                      {initials}
                    </span>
                  </div>
    
                  <div className="font-medium dark:text-white">
                    <div>{session.user.name}</div>
                    <div className="text-sm text-slate-50 dark:text-slate-400">
                      {session.user.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => signOut()}
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2"
                >
                  Logout
                </button>
              </div>
            ):(
            <div className="hidden sm:flex items-center gap-5">
                <Link href="/login" className=""> Login</Link>
                <Link href="/register" className='text-white hover:text-white border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center me-2 mb-.8 dark:border-blue-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-rose-700 dark:focus:ring-blue-700'> Register</Link>

            </div>
            )}

            {/* humberg meau */}
            <button onClick={() => setShow(true)} className='sm:hidden mr-8 text-3xl'>
                <IoIosMenu/>
            </button>
        </header>
        <div className= {show?" sm:hidden fixed w-40 bg-slate-800 h-screen right-0 z-50 bg-opacity-100 top-0 p-4 text-slate-50" : "hidden sm:hidden fixed w-40 bg-slate-800 h-screen right-0 z-50 bg-opacity-100 top-0 p-4 text-slate-50"}>
            <div className="flex justify-between items-center mb-10">
                <h2 className="font-bold">The1Gen.</h2>
                <button onClick={()=> setShow(false)}>
                    <IoClose className="text-2xl"/>
                </button>
            </div>
            <nav className="flex flex-col items-start gap-5 mb-10">
                
                <Link href="/">Features</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Free Tools</Link>

                
            </nav>
            <div className="flex flex-col items-center gap-5">
                <Link href="/login" className="text-semibold"> Login</Link>
                <Link href="/register" className='text-white hover:text-white hover:bg-blue-900 border-blue-700 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2 text-center me-2 mb-.8 '> Register</Link>

            </div>

        </div>  


        </>
    );
}


