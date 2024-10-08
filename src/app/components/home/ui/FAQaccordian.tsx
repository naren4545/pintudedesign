"use client"

import React, { useState } from 'react';

const FAQAccordion: React.FC = () => {
  // Define the state to accept either a number (index) or null
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Add typing to the index parameter
  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I create a business account on PinTude?",
      answer: "Simply click on 'Sign Up' at the top right, fill in your business details, and follow the prompts to complete registration."
    },
    {
      question: "What is included in the annual subscription?",
      answer: "The annual subscription includes various benefits such as XYZ."
    },
    {
      question: "Can I update my business information after signing up?",
      answer: "Yes, you can update your business information anytime by accessing your account settings."
    },
    {
      question: "How do I get my business verified?",
      answer: "Verification requires submission of business credentials and processing through our system."
    },
  ];

  return (
    <div className="max-w-[660px] mx-auto rounded-lg">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2 border-b last:border-b-0">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex  justify-between p-4 bg-[#f5fcfe] border border-[#c6e7f4] rounded-[23px] shadow-lg"
          >
            <div className="flex">
              <span className="font-bold text-2xl text-gray-700 pr-4">{String(index + 1).padStart(2, '0')}</span>
            <div>  <p className="ml-4 text-lg font-semibold text-left">{faq.question}</p>
            
            {openIndex === index && (
            <div  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100 p-4 bg-gray-50' : 'max-h-0 opacity-0'
              }`}>
              <p className="text-gray-600 text-left">{faq.answer}</p>
            </div>
          )}
            
            </div>
            </div>
            <span className="text-xl">{openIndex === index ? <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.242 7.78973L7.48837 1.6421C7.62465 1.50727 7.80863 1.43164 8.00034 1.43164C8.19206 1.43164 8.37603 1.50727 8.51232 1.6421L14.7587 7.7884C14.8958 7.92316 15.0804 7.99867 15.2727 7.99867C15.4649 7.99867 15.6495 7.92316 15.7866 7.7884C15.8542 7.72256 15.9078 7.64388 15.9445 7.55698C15.9811 7.47009 16 7.37673 16 7.28243C16 7.18812 15.9811 7.09477 15.9445 7.00787C15.9078 6.92097 15.8542 6.84229 15.7866 6.77646L9.5416 0.630156C9.13026 0.226279 8.57682 0 8.00034 0C7.42387 0 6.87042 0.226279 6.45908 0.630156L0.214045 6.77646C0.146312 6.84231 0.0924715 6.92107 0.0557069 7.0081C0.0189423 7.09512 0 7.18863 0 7.28309C0 7.37756 0.0189423 7.47107 0.0557069 7.55809C0.0924715 7.64511 0.146312 7.72388 0.214045 7.78973C0.351179 7.92449 0.535754 8 0.72802 8C0.920286 8 1.10486 7.92449 1.242 7.78973Z" fill="black"/>
</svg>
 : <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.242 0.21027L7.48837 6.3579C7.62465 6.49273 7.80863 6.56836 8.00034 6.56836C8.19206 6.56836 8.37603 6.49273 8.51232 6.3579L14.7587 0.211604C14.8958 0.0768442 15.0804 0.00133371 15.2727 0.00133371C15.4649 0.00133371 15.6495 0.0768442 15.7866 0.211604C15.8542 0.277436 15.9078 0.356119 15.9445 0.443017C15.9811 0.529913 16 0.623267 16 0.717574C16 0.811882 15.9811 0.905234 15.9445 0.992131C15.9078 1.07903 15.8542 1.15771 15.7866 1.22354L9.5416 7.36984C9.13026 7.77372 8.57682 8 8.00034 8C7.42387 8 6.87042 7.77372 6.45908 7.36984L0.214045 1.22354C0.146312 1.15769 0.0924715 1.07893 0.0557069 0.991905C0.0189423 0.904884 0 0.811375 0 0.716907C0 0.622439 0.0189423 0.528931 0.0557069 0.44191C0.0924715 0.354889 0.146312 0.276123 0.214045 0.21027C0.351179 0.0755105 0.535754 0 0.72802 0C0.920286 0 1.10486 0.0755105 1.242 0.21027Z" fill="black"/>
</svg>
}</span>
          </button>

         
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
