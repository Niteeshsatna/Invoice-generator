import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {TheamLink} from '../components/TheamLink'
import Invoiceimg from "../public/images/invo-pic3.svg"
import { TiArrowDownThick } from "react-icons/ti";
export const Hero = () => {
    return (
        <div>
        <div className="md:mt-3 bg-violet-600 grid grid-cols-1 md:grid-cols-2 pt-16 py-16 px-3 md:px-16 text-slate-50 items-center gap-10" >
            <div className="flex flex-col space-y-7 items-start">
                <h2 className='text-3xl md:text-4xl font-bold'>Effortless Invoicing for Lifetime</h2>
                <p className='text-base md:text-2xl'>Your Lifetime Free Invoice Solution</p>
                <p className="text-balance">Create,Manage, and Track, Recurring Invoices,Download as PDF, Email and Print Invoices</p>

                < TheamLink className= " me-5 mb-2 gap-2" title= "Create Your First Invoice " href="/invoice/new" icon={<TiArrowDownThick/>}> </TheamLink>

            </div>

            <div className='align-top'>
                <Image src={Invoiceimg} alt="invoice-img"/>

            </div>
            
        </div>
        <div>

        <h2 className='text-2xl md:text-4xl font-semibold mb-1 pt-8 md:pt-16 px-4 md:px-16 bg-slate-50 mx-auto flex items-center justify-center'>Create your Invoice in Under 2 Minutes</h2>
        
        </div>

        </div>

        
    );
}

