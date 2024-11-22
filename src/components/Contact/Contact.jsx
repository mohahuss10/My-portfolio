// src/components/Contact.js
import React from 'react';

const Contact = () => (
  <section id="contact" className="py-16 px-4 bg-white">
    <h2 className="text-3xl font-bold text-center text-gray-800">Contact Me</h2>
    <form className="max-w-xl mx-auto mt-8">
      <label className="block text-gray-700">Name:</label>
      <input type="text" name="name" className="w-full p-3 mt-2 border border-gray-300 rounded" />
      
      <label className="block text-gray-700 mt-4">Email:</label>
      <input type="email" name="email" className="w-full p-3 mt-2 border border-gray-300 rounded" />
      
      <label className="block text-gray-700 mt-4">Message:</label>
      <textarea name="message" className="w-full p-3 mt-2 border border-gray-300 rounded"></textarea>
      
      <button type="submit" className="mt-6 w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
        Send Message
      </button>

      <div className="flex justify-center space-x-6 mt-6">
  <a href="https://github.com/mohahuss10" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Github</a>
  <a href="https://www.linkedin.com/in/mohameddek-hussein-b19ba8283/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Linkedn</a>
</div>

    </form>
  </section>
);

export default Contact;
