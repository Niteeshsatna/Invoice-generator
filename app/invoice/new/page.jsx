"use client";

import React, { useState, useRef, useEffect } from "react";

import { BiShowAlt } from "react-icons/bi";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { LuMailCheck } from "react-icons/lu";
import { VscPreview } from "react-icons/vsc";
import { LuSave } from "react-icons/lu";
import { TiEdit } from "react-icons/ti";
import FormPreview from "../../../components/FormPreview";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useReactToPrint } from "react-to-print";
import FormTable from "../../../components/FormTable";
import { CldUploadButton, CldImage } from "next-cloudinary";
import toast from 'react-hot-toast';
import Link from "next/link";
import { useSession } from "next-auth/react";
import Loading from "@/app/loading";
import { TheamLink } from "@/components/TheamLink";

export default function CreateInvoice() {
  const {data:session, status} = useSession()
  const [loading, setLoading] = useState(false);
  const invoiceRef = useRef();
  const [logoUrl, setLogoUrl] = useState("");
  const [Preview, setPreview] = useState(false);
  const [formData, setFormData] = useState({
    invoiceTitle: "",
    companyName: "",
    invoiceAuthor: "",
    companyAddress: "",
    companyCity: "",
    companyCountry: "",
    clientCompany: "",
    clientAddress: "",
    clientCity: "",
    clientCountry: "",
    invoiceNumber: "",
    invoiceDate: "",
    invoiceDueDate: "",
    notes: "",
    tAndC: "",
    totalSum: "",
    totalTax: "",
    totalAmountWithTax: "",
  });

  // formpage
  const [tableData, setTableData] = useState([]);
  const [combinedData, setCombinedData] = useState({});
  const [userId, setUserId] = useState();

  // -----------------------------------------
  const [totalTax, setTotalTax] = useState(0);

  const totalSum = tableData.reduce((accumulator, currentItem) => {
    return accumulator + (parseFloat(currentItem.amount) || 0);
  }, 0);

  const totalAmountWithTax = totalSum + (totalSum * totalTax) / 100;

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      totalSum: totalSum.toFixed(2),
      totalAmountWithTax: totalAmountWithTax.toFixed(2),
    }));
  }, [totalSum, totalAmountWithTax]);

  //-------------------------------------

  function handleInputChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  }

  function handleTaxChange(e) {
    const taxValue = parseFloat(e.target.value);
    setTotalTax(isNaN(taxValue) ? 0 : taxValue);
    

    setFormData({ ...formData, totalTax: e.target.value });
    
  }

  async function handleFormSubmit(e) {
    const userId = await session?.user?.email

    setLoading(true)
    e.preventDefault();
    console.log(formData);

    const allFormData = {
      ...formData,
      logoUrl,
      userId,
      tableData,
    };
    setCombinedData(allFormData);

    try {
      const response = await fetch("http://localhost:3000/api/invoice", {
        method: "POST" ,
        headers: {
          'Content-Type' :"application/json"
        },
        body:JSON.stringify({
          invoiceData: {...formData,
            logoUrl, userId},
          tableData,
        }),
      });

      if(response.ok){
        setLoading(false)
        toast.success("Invoice Created!")
        setPreview(!Preview);
        console.log(response)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    
  }

  

  const updateTableData = (newTableData) => {
    setTableData(newTableData);
  };

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });




  if (status === "loading") {
    return <Loading />;
  }
  if (status === "unauthenticated") {
    return (
      <div className="gap-8 flex items-center h-screen justify-center flex-col">
        <h2 className="md:text-4xl text-2xl">
          Please Login to be able to create Invoice
        </h2>
        <TheamLink
          className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
          title="Click here to Login to your Account"
          href="/login"
        />
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-8 md:py-8 px-4 md:px-16 overflow-visible	">
      {/* header */}

      <div className=" flex justify-between item-center mb-7 ">
        <div className="flex gap-4">
          <button
            onClick={() => setPreview(!Preview)}
            className=" px-2 py-2 shadow rounded-sm border border-slate-400"
          >
            {Preview ? (
              <div className="flex items-center space-x-2 ">
                <TiEdit />
                <span>Edit Form</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ">
                <VscPreview />
                <span>Preview</span>
              </div>
            )}
          </button>

          <button
            onClick={handlePrint}
            className=" flex items-center space-x-2 px-2 py-2 shadow rounded-sm border border-slate-400"
          >
            <MdOutlineLocalPrintshop />
            <span>Print/Download</span>
          </button>

          {/* <button className=" flex items-center space-x-2 px-2 py-2 shadow rounded-sm border border-slate-400">
            <BiCloudDownload />
            <span> Download</span>
          </button> */}
        </div>

        <div className="flex gap-4">
          <Link
          href="/invoice"
           className=" flex items-center text-purple-700 space-x-2 px-2 py-2 shadow rounded-sm border border-purple-400 font-semibold">
            <BiShowAlt/>
            <span>View Old Invoice</span>
          </Link>

          <button className=" flex items-center text-purple-700 space-x-2 px-2 py-2 shadow rounded-sm border border-purple-400 font-semibold">
            <LuMailCheck />
            <span>Send</span>
          </button>
        </div>
      </div>

      {/* Invoice form */}

      {Preview ? (
        <div ref={invoiceRef}>
          <FormPreview data={combinedData} />
        </div>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto"
        >
          <div className="flex justify-between items-center">
            {/* image */}

            {/* -------------------somthing happen---------------------------- */}

            <div className="flex items-center justify-center ">
              {logoUrl && (
                <CldImage
                  width="130"
                  height="130"
                  src={logoUrl}
                  alt="Description of my image"
                />
              )}
              <label className="flex flex-col items-center justify-center w-36 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <IoCloudUploadOutline className="w-6 h-6 text-gray-500" />

                  <p className="mb-2 text-sm text-gray-500 ">
                    <CldUploadButton
                      onSuccess={(data) => {
                        console.log(data);
                        setLogoUrl(data.info.secure_url);
                      }}
                      uploadPreset="InvoicePreset"
                    />
                  </p>
                  <p className="text-xs text-gray-500">PNG (240x240px)</p>
                </div>
              </label>
            </div>

            {/* -------------------------------------------------------------------------- */}

            <input
              type="text"
              className="text-4xl uppercase font-semibold w-72 border-0 "
              placeholder="Invoice"
              name="invoiceTitle"
              onChange={handleInputChange}
              value={formData.invoiceTitle}
            />
          </div>

          {/* company details */}
          <div className="flex flex-col w-1/2 mt-6 ">
            <input
              className=" hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="Your Company"
              name="companyName"
              onChange={handleInputChange}
              value={formData.companyName}
            />
            <input
              className="hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="Your Name"
              name="invoiceAuthor"
              onChange={handleInputChange}
              value={formData.invoiceAuthor}
            />
            <input
              className="hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="Company Address"
              name="companyAddress"
              onChange={handleInputChange}
              value={formData.companyAddress}
            />
            <input
              className="hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="City, State zip"
              name="companyCity"
              onChange={handleInputChange}
              value={formData.companyCity}
            />
            <input
              className="hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="Country eg.USA"
              name="companyCountry"
              onChange={handleInputChange}
              value={formData.companyCountry}
            />
          </div>

          {/* client detail */}
          <div className="flex justify-between gap-8">
            <div className="flex flex-col w-1/2 mt-6 ">
              <h2 className="mb-2 font-semibold">Bill To :</h2>
              <input
                className="hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="Your Client's Company"
                name="clientCompany"
                onChange={handleInputChange}
                value={formData.clientCompany}
              />
              <input
                className="hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="Client's Address"
                name="clientAddress"
                onChange={handleInputChange}
                value={formData.clientAddress}
              />
              <input
                className="hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="City, State zip"
                name="clientCity"
                onChange={handleInputChange}
                value={formData.clientCity}
              />
              <input
                className="hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="Country eg.USA"
                name="clientCountry"
                onChange={handleInputChange}
                value={formData.clientCountry}
              />
            </div>

            <div className="flex flex-col w-1/2 mt-6 ">
              <div className="flex gap-9 ">
                <label
                  className="text-slate-600 font-bold"
                  htmlFor="invoiceNumber"
                >
                  Invoice #
                </label>
                <input
                  className="hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                  type="text"
                  placeholder="INV-200"
                  name="invoiceNumber"
                  onChange={handleInputChange}
                  value={formData.invoiceNumber}
                />
              </div>

              <div className="flex gap-2 ">
                <label
                  className="text-slate-600 font-bold"
                  htmlFor="invoiceDate"
                >
                  Invoice Date
                </label>
                <input
                  className="hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                  type="date"
                  name="invoiceDate"
                  onChange={handleInputChange}
                  value={formData.invoiceDate}
                />
              </div>

              <div className="flex gap-8 ">
                <label className="text-slate-600 font-bold" htmlFor="dueDate">
                  Due Date
                </label>
                <input
                  className="hover:border h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                  type="date"
                  name="invoiceDueDate"
                  onChange={handleInputChange}
                  value={formData.invoiceDueDate}
                />
              </div>
            </div>
          </div>

          {/* Table detail */}

          <FormTable updateTableData={updateTableData} />

          {/* calculation */}

          <div className="grid grid-row-3 ml-96 font-bold text-base text-slate-800 ">
          

              <div className="flex justify-between gap-2 mr-16 mb-3">
                <h2 className="font-semibold">Subtotal :</h2>
                <p className="text-right w-1/2">{totalSum.toFixed(2)}</p>
              </div>

              <div className="flex justify-between mr-16">
                <h2 className="font-semibold">Tax % :</h2>
                <input
                  className="bg-transparent hover:border h-7 w-16 text-base border-0 p-1 mb-2 placeholder:text-slate-400 text-right "
                  type="number"
                   min="0"
                  placeholder=" Tax"
                  name="totalTax"
                  onChange={handleTaxChange}
                  value={formData.totalTax}
                />
              </div>

              <div className="flex justify-between gap-2 mr-16">
                <h2 className="font-semibold">Total Amount :</h2>
                <p className="text-right w-1/2">
                  {totalAmountWithTax.toFixed(2)}
                </p>
              </div>


          </div>

          <div className="max-w-sm mr-auto ml-7">
            <div>
              <label
                htmlFor="t&c"
                className="block mb-2 text-sm text-gray-900 font-semibold"
              >
                Notes
              </label>
              <textarea
                className="block p-2.5 text-justify w-full text-sm text-gray-900 mb-4 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                spellCheck="true"
                placeholder="Leave a comment..."
                rows="4"
                type="text"
                name="notes"
                onChange={handleInputChange}
                value={formData.notes}
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="t&c"
                className="block my-2 text-sm text-gray-900 font-semibold"
              >
                Terms & Conditions
              </label>
              <textarea
                className="block p-2.5 w-full text-justify text-sm text-gray-900 mb-6 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" spellCheck="true"
                rows="4"
                cols="15"
                type="text"
                placeholder="Leave a comment..."
                name="tAndC"
                onChange={handleInputChange}
                value={formData.tAndC}
              ></textarea>
            </div>
          </div>

          {loading?(
            <button disabled type="button" className="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center">
            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg>
            Loading...
            </button>
          ):(
            <button
            className="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center"
            type="submit"
          >
            Submit
          </button>
          )}     

          
        </form>
      )}

      

    </div>
  );
}
