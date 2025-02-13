"use client";
import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    
    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b "
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-300 font-medium">
                {faqsList.title}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-400">
                        {faqsList.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function AccordionFloat () {

    const faqs = [
        {
          title: " How can I make an invoice for free?",
          description:
            "The1Gen. invoice generator allows you to create invoices for free without taking much time. Head over to The1Gen. invoice generator and start creating invoices using pre-formatted invoice templates. You can add your logo, brand colors, and multiple invoice templates and use many more such features to keep your brand consistent.",
        },
        {
          title: "Which is the best free invoice generator?",
          description:
            "The1Gen is one of the top free invoice generators available today. It offers a range of features designed to meet the needs of freelancers, small businesses, and startups. With The1Gen, you can easily create and customize invoices, track payments, and manage client information. Its intuitive interface and robust functionality make it an excellent choice for anyone looking for a reliable and user-friendly invoicing tool. Plus, it's completely free, providing exceptional value without compromising on quality.",
        },
        {
          title: "Can I generate a PDF invoice using this invoice generator?",
          description:
            "Yes, it is easy to download the PDF invoice using The1Gen. invoice maker. , clicking on the option of Download PDF will make your invoice in PDF format. Moreover, you can also email the invoice, print the invoice, and send the invoice via WhatsApp or schedule for future dates.",
        },
        {
          title: "Can I Email the invoice directly using this invoice generator?",
          description:
            "Yes, with The1Gen, you can easily email invoices directly to your clients from within the platform. This feature streamlines the invoicing process by allowing you to send professional-looking invoices with just a few clicks. You can also customize the email message and track when the invoice has been viewed, ensuring clear communication with your clients.",
        },
        


      ];
  
    return (
        
            
            <div className="mt-6 md:mt-10 max-w-3xl mx-auto">
                {
                    faqs.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        
    )
}