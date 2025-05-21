// src/components/ContactForm.tsx
import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_lch8jcq',     // 🔁 Replace with your actual Service ID
        'template_cr8rf9i',    // 🔁 Replace with your actual Template ID
        form.current,
        'iurlX3i3b98Fu9i7L'      // 🔁 Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('✅ Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('❌ Failed to send message. Please try again.');
        }
      );

    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
        <textarea
          name="message"
          required
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="I'd like to discuss an internship opportunity..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg py-3 font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center"
      >
        Send Message <Mail className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
};

export default ContactForm;
