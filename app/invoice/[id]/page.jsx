import React from 'react'

// import React, {useRef} from "react";
import FormPreview from '@/components/FormPreview'
import combinedData from "../new/page"
import { getInvoiceById } from '../../libs/getInvoiceById'
import ActionButton from "../../../components/ActionButton"
// import { LuMailCheck } from "react-icons/lu";
// import { MdOutlineLocalPrintshop } from "react-icons/md";
// import { useReactToPrint } from "react-to-print";



export default async function InvoicePage({params:{id}}) {
  // const invoiceRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => invoiceRef.current,
  // });

  const invoice =await getInvoiceById(id)
  // console.log(invoice)
  return (
    <div className="my-10">

     <div className="">
      <ActionButton invoiceId ={invoice.id}/>
     </div>

            <FormPreview 
            data={invoice} />
            </div>

// ref={invoiceRef} 
  )
}  