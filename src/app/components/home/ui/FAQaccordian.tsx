import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  const faqs = [
    {
      question: "What is included in the annual subscription?",
      answer:
        `The annual subscription includes various benefits such as 
Personalized Business Page with all of your business information- contact info, operating hours, services, and images available at your business webpage. 


You can also use Pintude's platform to connect directly with your audience, share promotions, updates, and news via broadcasts.`,
    },
    {
      question: "How do I get my business verified?",
      answer: `We have double verification for all businesses who signup with PinTude.
First verification requires submission of business credentials such as GST Certificate , UDYAM etc. 

The second verification is based on location of the business that is operated and processing through our system. You have to be present at the location of your business for the location verification.`,
    },
    {
      question: "Can I update my business information after signing up?",
      answer:
        "Yes, you can update your business information anytime by accessing your account settings.",
    },
    {
      question: "How do I get my business verified?",
      answer:
        "Verification requires submission of business credentials and processing through our system.",
    },
  ];

  return (
    <div className="max-w-[660px] mx-auto">
      <Accordion type="single" collapsible defaultValue="item-0">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className="mb-2 rounded-[23px] border border-[#c6e7f4] bg-[#f5fcfe] px-2"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex ">
                <span className="font-bold text-2xl text-gray-700 pr-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-semibold text-left">
                  {faq.question}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
