import React from 'react';

const InquiryForm = () => {
  return (
    <div className="max-w-[506px] mx-auto p-6 py-16 bg-white rounded-xl text-black shadow-md border border-blue-500">
      <h2 className="text-2xl font-semibold text-center">Submit Your Inquiry</h2>
      <p className="text-center  font-light mb-6">We'll get back to you as soon as possible!</p>

      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3  bg-[#F1F8FA] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black"
          />
        </div>
        <div className="mb-4">
          <input
           type="tel"
            pattern="[0-9]{10}"
            placeholder="Contact Number"
            className="w-full p-3 bg-[#F1F8FA] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black"
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Type your message / request"
           
            className="w-full p-3 bg-[#F1F8FA] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black "
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="p-5 bg-[#E78B01] shadow-[0_8px_15px_rgba(234,152,15,0.3)] text-white font-semibold py-3  hover:bg-orange-600 transition duration-300 placeholder:text-black"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
