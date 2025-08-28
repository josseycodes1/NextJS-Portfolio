// components/ContactSection.tsx
'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">

         <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-700">Contact Me</h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-2 text-josseypink1">EMAIL</h3>
            <p className="text-gray-700 mb-6">adewumijosephinel@gmail.com</p>

            <h3 className="text-lg font-semibold mb-2 text-josseypink1">PHONE</h3>
            <p className="text-gray-700 mb-6">+234-813-037-553</p>

            <h3 className="text-lg font-semibold mb-2 text-josseypink1">ADDRESS</h3>
            <p className="text-gray-700">Ibadan, Nigeria</p>
          </div>

          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3F3B6C]" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3F3B6C]" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea 
                name="message" 
                placeholder="Your message"
                rows={5} 
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3F3B6C] mb-4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="bg-josseypink1 hover:bg-josseypink2 text-white px-6 py-2 rounded-md transition-colors">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;