import { execFileSync } from 'child_process';
import React from 'react'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

export const Steps = () => {
  return (
    <div className="py-8 md:py-10 px-4 md:px-16 bg-slate-50 mx-auto flex items-center justify-center">
      <div className=" ">
        
         <div className="flex items-start flex-col md:flex-row md:items-center md:gap-6"> 
          
          <div className="flex items-center mb-2 md:mb-0 gap-3">

            <p className="border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">1</p>
            <p>Invoice Details</p>
            <TbArrowBigRightLinesFilled className="hidden md:block" size={20} />
            </div>
            
          <div className="flex items-center mb-2 md:mb-0 gap-3">

              <p className="border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">2</p>
              <p>Your Bank Details<br/>(Optional) </p>
              <TbArrowBigRightLinesFilled className="hidden md:block" size={20} />
            </div>
            

      

          <div className="flex items-center mb-2 md:mb-0 gap-3">

              <p className="border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">3</p>
              <p>Select Design & Colors<br/>(Download or Email)</p>
        
          </div>
          
      
      
      </div>
            

    
     </div>
    </div>
  )
}


