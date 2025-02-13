"use client";

import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { GrAddCircle } from "react-icons/gr";
import PreviewTable from "./PreviewTable";


export default function FormTable({ updateTableData }) {
  const [tableData, setTableData] = useState([
    {
      itemDescription: "",
      qty: "",
      rate: "",
      tax: "",
      amount: "",
    },
    {
      itemDescription: "",
      qty: "",
      rate: "",
      tax: "",
      amount: "",
    },
  ]);

// const[totalTax, setTotalTax] = useState(0);

  function addRow() {
    setTableData([
      ...tableData,
      {
        itemDescription: "",
        qty: "",
        rate: "",
        tax: "",
        amount: "",
      },
    ]);
  }

  function removeRow(index) {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  }
  function handleInputChange(index, e) {
    const { name, value } = e.target;
    const updatedData = [...tableData];
    updatedData[index][name] = value;

    if (name == "qty" || name == "rate") {
      const qty = parseFloat(updatedData[index].qty);
      const price = parseFloat(updatedData[index].rate);
      if (!isNaN(qty) && !isNaN(price)) {
        updatedData[index].amount = (qty * price).toFixed(2);
      } else {
        updatedData[index].amount = "";
      }
    }
    setTableData(updatedData);
    updateTableData(updatedData);
    console.log(updatedData);
  }

  


  return (
    <div className="overflow-x-auto shadow-sm sm:rounded-lg my-6">
      <table className="w-full text-sm text-left rtl:text-right text-gray-700">
        <thead className="text-xs text-gray-800 uppercase bg-gray-200 ">
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
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b hover:bg-gray-50 "
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <input
                    className=" bg-transparent hover:border h-7 text-base border-0 p-1 mb-2 w-11/12 placeholder:text-slate-400"
                    type="text"
                    placeholder="Item Description"
                    name="itemDescription"
                    value={row.itemDescription}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </th>
                <td className="px-5 py-4">
                  <input
                    className="bg-transparent hover:border h-7 w-24 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                    type="number"
                    max="1000000"
                    min="1"
                    placeholder="2"
                    name="qty"
                    value={row.qty}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-5 py-4">
                  <input
                    className="bg-transparent hover:border h-7 w-28 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                    type="number"
                    max="100000000"
                    min="1"
                    placeholder="5"
                    name="rate"
                    value={row.rate}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-5 py-4">
                  <input
                    className="bg-transparent hover:border h-7 w-16 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                    type="number"
                    min="0"
                    placeholder="18%"
                    name="tax"
                    value={row.tax}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-5 py-4">
                  <input
                    className="bg-transparent hover:border h-7 w-32 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                    type="number"
                    min="1"
                    
                    placeholder="4000"
                    name="amount"
                    value={row.amount}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-3 py-4 text-right">
                  <button onClick={() => removeRow(index)} type="button">
                    <CgCloseO className="text-base text-red-600" />
                  </button>
                </td>
              </tr>
            );
          })}
          </tbody>
          </table>
        
          <button
            onClick={addRow}
            type="button"
            className="my-3 flex items-center space-x-2 text-purple-600 font-bold"
          >
            <GrAddCircle className="font-bold text-base" />

            <span>Add line item</span>
          </button>
    </div>
  );
}
