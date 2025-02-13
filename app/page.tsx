import Image from "next/image";
import {Hero} from "../components/Hero"
import {Steps} from "../components/Steps"
import InvoiceCTA from "../components/InvoiceCTA"
import Features from "../components/Features_sec"
import Pricing from "../components/Pricing"
import FAQ from "../components/FAQ"



export default function Home() {
  return (
    <main className="invoice">
      <Hero/>
      <Steps/>
      <InvoiceCTA/>
      <Steps/>
      <Features/>
      <Pricing/>
      <FAQ/>
    </main>
  );
}
