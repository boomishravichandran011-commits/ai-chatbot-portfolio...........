import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Contact = () => {
  const { personal } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Wire up your backend or Formspree here)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Get In Touch</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
            <div className="flex justify-center gap-8 text-sm text-foreground/70">
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-400" />{personal.email}</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400" />{personal.phone}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-2xl p-8">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-cyan-500/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-cyan-500/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-cyan-500/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            />
            <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0">
              Send Message <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
