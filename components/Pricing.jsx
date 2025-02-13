import React from "react";
import Link from 'next/link';
import { GoChecklist } from "react-icons/go";
import { MdWorkspacePremium } from "react-icons/md";

export default function Pricing() {
  return (
    <div className="py-20 bg-slate-700">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className=" mb-12 space-y-5 md:mb-16 md:text-center">
          <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
            Invoice Generator Pricing.
          </h1>
          <p className="text-xl text-gray-100 md:text-center md:text-xl">
            Pay only when you use premium features.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-20 sm:grid-cols-2  flex-col">

          <div className="text-sm flex">
            <div className=" px-6 py-8  leading-none rounded-lg bg-slate-800 ">
              <div className="items-center">
              <GoChecklist color='#a78bfa' className="w-14 h-14 items-center mb-5 " alt="invoice"/>
                <div>
                  <h3 className="text-lg font-semibold text-white text mb-4" >
                    Free Version
                  </h3>
                </div>
              </div>
              <p className="leading-normal text-gray-300 text-md mb-4
              6">
              Enjoy all the essential features at no cost—create, customize, and send professional invoices effortlessly.Perfect for small businesses and freelancers looking for a simple, efficient invoicing solution without the price tag.
              </p>
              <Link href="/free-invoice" className="leading-normal text-violet-400 text-md md:text-1rem "> Create Free Invoice
              </Link>
            </div>
          </div>



          <div className="text-sm leading-6">
            <div className="px-6 py-8  leading-none rounded-lg bg-slate-800 ">
              <div className="items-center">
              <MdWorkspacePremium color='#a78bfa' className="w-14 h-14 items-center mb-5 " alt="invoice"/>
                <div>
                  <h3 className="text-lg font-semibold text-white text mb-4">
                    Premium Version
                  </h3>
                </div>
              </div>
              <p className="leading-normal text-gray-300 text-md mb-4
              6">
              Upgrade to our premium plan for exclusive features! Unlock advanced tools like automated reminders, customizable templates, detailed analytics, and priority support. Elevate your invoicing experience and manage your business finances with ease and precision.
              </p>
              <Link href="/free-invoice" className="leading-normal text-violet-400 text-md md:text-1rem "> Explore Premium Features
              </Link>
            </div>
          </div>
          


        </div>
      </div>
    </div>
  );
}
