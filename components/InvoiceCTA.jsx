import React from 'react'
import { TheamLink } from './TheamLink'
// import InvoiceImg from "../public/images/invo-CTA"
export default function InvoiceCTA() {
  return (
    <div className="Invoice-CTA flex items-center justify-center">
       <div className=" flex items-center py-20 px-16 bg-white shadow-2xl rounded-md">
       < TheamLink className = " " title= "Create Your Invoice " href="/invoice/new"
       /> 
       
       </div>
    </div>
  )      
}
