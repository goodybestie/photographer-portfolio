'use client';

import { toast } from "sonner";

import React, { useState } from "react";

interface GetInTouchProps {
  refProp: React.RefObject<HTMLElement | null>;
}

export function GetInTouch({refProp}: GetInTouchProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        textArea: "",
    });

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
        console.log(formData)

    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

if(
    !formData.name ||
    !formData.email ||
    !formData.textArea
){
    toast.error('please field all require document')
    return;
}
setTimeout(() => {
    toast.success('message sent successfully')
    setFormData({
        name: "",
        email: "",
        textArea: "",
    })
}, 1000)

        console.log('success:', formData)
    }

    return (
       <section className="bg-[#0c0e12] text-gray-300 px-6 md:px-16 py-16">
  {/* Title */}
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-[#f0c96e] mb-2">Get In Touch</h1>
    <p className="text-gray-400">
      Ready to capture your special moments? Let's discuss your photography needs.
    </p>
  </div>

  {/* Content Grid */}
  <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
    {/* Left - Message Form */}
    <div className="bg-[#13151b] rounded-lg p-6 shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-4">Send a Message</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-[#f0c96e] focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-[#f0c96e] focus:outline-none"
        />
        <textarea
          placeholder="Tell me about your project..."
          rows={4}
          className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-[#f0c96e] focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-[#f0c96e] text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Right - Contact Info */}
    <div>
      <h2 className="text-lg font-semibold text-white mb-4">Let's Connect</h2>
      <p className="mb-6">
        I'm always excited to hear about new projects and opportunities. Whether you're
        planning a wedding, need professional headshots, or want to capture a special
        moment, I'd love to help bring your vision to life.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Email */}
        <div className="bg-[#13151b] rounded-lg p-4 flex flex-col items-center shadow-md">
          <img src="/icons/email.png" alt="Email" className="w-8 mb-2" />
          <span className="text-gray-400">Email</span>
          <span className="font-bold text-white">hello@alexjohnson.com</span>
        </div>

        {/* Phone */}
        <div className="bg-[#13151b] rounded-lg p-4 flex flex-col items-center shadow-md">
          <img src="/icons/phone.png" alt="Phone" className="w-8 mb-2" />
          <span className="text-gray-400">Phone</span>
          <span className="font-bold text-white">+1 (555) 123-4567</span>
        </div>

        {/* Location */}
        <div className="bg-[#13151b] rounded-lg p-4 flex flex-col items-center shadow-md">
          <img src="/icons/pin.png" alt="Location" className="w-8 mb-2" />
          <span className="text-gray-400">Location</span>
          <span className="font-bold text-white">San Francisco, CA</span>
        </div>

        {/* Response Time */}
        <div className="bg-[#13151b] rounded-lg p-4 flex flex-col items-center shadow-md">
          <img src="/icons/clock.png" alt="Response Time" className="w-8 mb-2" />
          <span className="text-gray-400">Response Time</span>
          <span className="font-bold text-white">Within 24 hours</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Follow My Work</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-[#1a1d23] px-4 py-2 rounded-full text-sm hover:bg-[#f0c96e] hover:text-black transition">
            Instagram
          </button>
          <button className="bg-[#1a1d23] px-4 py-2 rounded-full text-sm hover:bg-[#f0c96e] hover:text-black transition">
            Facebook
          </button>
          <button className="bg-[#1a1d23] px-4 py-2 rounded-full text-sm hover:bg-[#f0c96e] hover:text-black transition">
            LinkedIn
          </button>
          <button className="bg-[#1a1d23] px-4 py-2 rounded-full text-sm hover:bg-[#f0c96e] hover:text-black transition">
            Behance
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}
