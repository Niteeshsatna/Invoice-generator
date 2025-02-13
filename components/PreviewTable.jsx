import React from 'react'

export default function PreviewTable({tableData}) {

  const totalSum = tableData?.reduce((accumulator, currentItem) => {
  console.log(currentItem.amount);
  return accumulator + Number(currentItem.amount);
}, 0); 

  console.log(totalSum)
  return (
   

<div className="overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-700">
    <thead className="text-xs text-gray-800 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Item Description
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Rate
            </th>
            <th scope="col" className="px-6 py-3">
              TAX %
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            
          </tr>
        </thead>
        <tbody>
          {
            tableData?.map((row,i)=>{
              const{itemDescription,qty,rate,tax,amount}=row
              return(
                <tr key={i} className="bg-white border-b text-wrap">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-wrap w-1/2">
                    {itemDescription}
                </th>
                <td className="px-6 py-4">
                    {qty}
                </td>
                <td className="px-6 py-4">
                    {rate}
                </td>
                <td className="px-6 py-4">
                    {tax}
                </td>
                <td className="px-6 py-4">
                    {amount}
                </td>
                
            </tr>
              );
            })
          }
        </tbody>
    </table>
</div>

  )
}
