import React from "react";

const ContactUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          Left Side - Contact Form
          <form className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-sm">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col justify-center bg-gray-50 p-8 rounded-lg shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
              <p className="text-gray-600 mt-2">
                123 Travel Street, New Delhi, India
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600 mt-2">support@travelblog.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600 mt-2">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
