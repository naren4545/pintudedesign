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
      question: "What form of payments are accepted at Pintude?",
      answer:
        "Pintude only accepts UPI payments. All major UPI payment is accepted for a seamless and quick transaction experience.",
    },
    {
      question: "What is included in the annual subscription?",
      answer: "The annual subscription includes various benefits such as XYZ.",
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
              <div className="flex items-center">
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
