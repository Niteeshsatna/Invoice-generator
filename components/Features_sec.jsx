import React from 'react'
import { LiaFileInvoiceDollarSolid} from "react-icons/lia";
import {IoCloudDoneOutline } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { PiListStarDuotone } from "react-icons/pi";
import { TbLayoutGridAdd } from "react-icons/tb";
import {TheamLink} from '../components/TheamLink'

export default function features () {
    const features = [
        {
            icon: LiaFileInvoiceDollarSolid ,
            title:" Easy Tax Invoic" ,
            description: "Easily create, manage, send, and track tax invoices with no hassle.",
        },
        {
            icon:TbLayoutGridAdd,
            title:" Column Customization " ,
            description: "Flexible invoice template allowing for additional details and columns.",
        },
        {
            icon:PiListStarDuotone,
            title:"Create a Branded Invoice" ,
            description: "Quickly insert your business logo and modify the invoice color in a single click. No watermarks. Ad-free.",
        },
        {
            icon: HiOutlineDocumentText ,
            title:"Invoice Templates" ,
            description: "Elegantly crafted and fully customizable invoice templates featuring a dynamic color option.",
        },
        {
            icon:  RiMailSendLine,
            title:"Email & Manage Invoices" ,
            description: "Email invoices and receive notifications when they are opened.",
        },
        {
            icon: HiOutlineReceiptRefund ,
            title:"Repeat Invoices" ,
            description: "Refrens invoice generator automatically produces repeat invoices at scheduled intervals.",
        },
        {
            icon: GiProgression ,
            title:"Detailed Reports" ,
            description: "Access pre-made key reports to assess your business and client data.",
        },
        {
            icon: IoCloudDoneOutline ,
            title:"Easy Access Anywhere" ,
            description: "User-friendly dashboard for both mobile and desktop with real-time email notifications.",
        }
        
    ];
  return (


    <div id="testimonies" className="pt-20 pb-10 bg-slate-900">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">

        <div className=" ">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                
                <h1 className="mb-5 text-3xl font-semibold text-white text-center md:text-5xl">
                Features of Invoice Generater
                </h1>
            </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

            {
                features.map((feature,i) => {
                    const Icon = feature.icon
                    return(
                     <div key={i}>
                            <div className="text-sm">
                            <div
                                className="p-6 space-y-6 leading-none rounded-lg bg-slate-800 ">
                                <div className="items-center">

                                <Icon color='#7c3aed' className="w-14 h-14 items-center mb-5 " alt="invoice"/>
                                    
                                    <div>
                                        <h3 className="text-lg font-semibold text-white text" >{feature.title}</h3>
                                        
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">{feature.description}</p>
                            </div>
                        
                    </div>
            </div>
                    )
                })
            }
        </div>

        <div className=" md:mb-2 text-center mt-12">
                <TheamLink href="/invoice/new"
                    className="inline-block px-5 py-3 text-sm 
                    font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#354d85] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40 " title="Create Your Invoice Now.">
                    
                </TheamLink >
                </div>
        
        
        </div>
        </div>
    
  ) 
}
