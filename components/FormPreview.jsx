"use client"

import React from "react";
import PreviewTable from "./PreviewTable"
import Image from "next/image";
import { CldImage } from "next-cloudinary";

export default function FormPreview({ data }) {
  const {
    invoiceTitle,
    companyName,
    invoiceAuthor,
    companyAddress,
    companyCity,
    companyCountry,
    clientCompany,
    clientAddress,
    clientCity,
    clientCountry,
    invoiceNumber,
    invoiceDate,
    invoiceDueDate,
    notes,
    tAndC,
    logoUrl,
    tableData,
    totalSum,
    totalTax,
    totalAmountWithTax,

  } = data;
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const newInvoiceDate = new Date(invoiceDate).toLocaleDateString(undefined, options);

const newInvoiceDueDate = new Date(invoiceDueDate).toLocaleDateString(undefined, options);

  return (
    <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
      <div className="flex justify-between items-center">
        {/* image */}

        <div className="flex items-center justify-center ">
          {logoUrl && (
            <CldImage
              width="130"
              height="130"
              src={logoUrl}
              alt="Description of my image"
            />
          )}
        </div>

        <div className="flex">
          <p className="text-4xl uppercase font-semibold w-72 border-0">{invoiceTitle}</p>
        </div>
      </div>

      {/* company details */}
      <div className=" flex flex-col mt-6 text-wrap">
        
        {/* <div className="flex flex-col h-auto text-base p-1 ">
          <p className="font-bold text-base">Company Name : </p>
          <p className=" text-wrap w-4/5 ">{companyName}</p>
        </div> */}


        <div className="flex text-base p-1 ">
          <p className="font-bold text-base">Company Name : &nbsp;</p>
          <p className="text-wrap  w-4/5">{companyName}</p>
        </div>

        <div className="flex text-base p-1">
          <p className="font-bold text-base">Your Name : &nbsp;</p>
          <p className="text-wrap w-4/5">{invoiceAuthor}</p>
        </div>

        <div className="flex  text-base p-1">
          <p className="font-bold text-base">Company Address : &nbsp;</p>
          <p className="text-wrap w-4/5">{companyAddress}</p>
        </div>

        <div className="flex text-base p-1 ">
          <p className="font-bold text-base">Company City : &nbsp;</p>
          <p className="text-wrap w-4/5">{companyCity}</p>
        </div>

        <div className="flex text-base p-1 mb-2">
          <p className="font-bold text-base">Company Country : &nbsp;</p>
          <p className="text-wrap w-4/5"> {companyCountry}</p>
        </div>
      </div>

      {/* client detail */}
      <div className="flex justify-between gap-8 mb-8  ">
        <div className="flex flex-col w-11/12 mt-6 ">
          <h2 className="mb-2 font-semibold p-1">Bill To :</h2>

          <div className="flex flex-col text-base text-wrap h-auto p-1">
            <p className="font-bold text-base">Client Company:&nbsp;</p>
            <p className="text-wrap w-11/12">{clientCompany}</p>
          </div>

          <div className="flex flex-col h-auto text-base p-1 ">
            <p className="font-bold text-base">Client Address : &nbsp;</p>
            <p className="text-base">{clientAddress}</p>
          </div>

          <div className="flex flex-col text-base p-1">
            <p className="font-bold text-base">Client City : &nbsp;</p>
            <p className="text-base">{clientCity}</p>
          </div>

          <div className="flex flex-col text-base p-1">
            <p className="font-bold text-base">Client Country : &nbsp;</p>
            <p className="text-base">{clientCountry}</p>
          </div>
        </div>

        <div className="flex flex-col w-1/2 mt-16 p-1 ">
          <div className="flex gap-9 p-1 mb-2">
            <p className="text-slate-600 font-bold">
              Invoice #
            </p>
            <p>
            {invoiceNumber}
            </p>
          </div>

          <div className="flex gap-3 h-7 text-base p-1 mb-2">
            <p className="text-slate-600 font-bold">
              Invoice Date
            </p>
            <p>
            {newInvoiceDate}
            </p>
          </div>

          <div className="flex gap-9 h-7 text-base p-1 mb-2 ">
            <p className="text-slate-600 font-bold">
              Due Date
            </p>
            <p>
            {newInvoiceDueDate}
            </p>
          </div>

             

        </div>
      </div>

      {/* Table detail */}
      <PreviewTable tableData = {tableData}/>

      {/* amount claculation */}

      <div className="grid grid-row-3 gap-2 px-6 py-4 font-bold text-base text-slate-800 place-content-end mr-14">
      <div className="flex flex-row gap-9">
            <p className="text-slate-600 font-bold ">
            Subtotal :
            </p>
            <p className="ml-3 text-sm">
            {totalSum}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <p className="text-slate-600 font-bold ">
            Total Tax % :
            </p>
            <p className="ml-3 text-sm">
            {totalTax}%
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-slate-600 font-bold ">
            Total Amount  :
            </p>
            <p className="ml-3 text-sm">
            {totalAmountWithTax}
            </p>
          </div>
          
      </div>

      


      


      <div className=" grid grid-row-2 w-1/2 mt-4 mb-2">
         {/* Notes */}

         <div className="flex flex-col">
            <p className="text-slate-600 font-bold ">
            Notes
            </p>
            <p className="ml-3 text-sm block p-1.5 text-justify w-full text-gray-900 mb-4 " >
            {notes}
            </p>
          </div>

          {/* T&C */}
          <div className="flex flex-col">
            <p className="text-slate-600 font-bold">
            Terms & Conditions
            </p>
            <p className="ml-3 text-sm block p-1.5 text-justify w-full text-gray-900 mb-4">
            {tAndC}
            </p>
          </div>
      </div>
    </div>
  );
}
