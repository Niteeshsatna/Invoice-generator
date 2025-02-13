import React from "react";


import AccordionFloat from "./AccordionFloat";

export default function FAQ() {
  return (
    <div className=" bg-slate-800 flex flex-col gap-6 py-8 md:py-24 px-4 md:px-16">
      <div className=" ">
        <div className=" flex items-center justify-center flex-col">
          <h1 className="mb-12 text-3xl font-semibold text-white text-center md:mb-16 md:text-5xl">
            Frequently Asked Questions (FAQ)
          </h1>
          <div className=" ">
          <AccordionFloat/>
        </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto"></div> */
}
// max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto
