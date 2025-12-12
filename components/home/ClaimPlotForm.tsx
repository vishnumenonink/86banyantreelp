"use client";

import React, { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { useRouter } from "next/navigation";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const ClaimPlotForm: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Fire and forget – we don't care what comes back
      await fetch("/api/claim-plot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      // Log only for yourself in the console
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      // Optional: reset form before redirect
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
      });
      // Redirect to thank you page
      router.push("/thank-you");
    }
  };

  return (
    <section id="enquiry">
      <div className="relative w-full min-h-screen flex items-center justify-center p-4 md:p-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/formimg.jpg)",
          }}
        ></div>

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-3xl">
          <h2
            className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-white text-center mb-16`}
          >
            Claim Your Plot Today
          </h2>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Full name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Phone number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    required
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-full transition-colors duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimPlotForm;
