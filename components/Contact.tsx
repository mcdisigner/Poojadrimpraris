import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactFormState } from '../types';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    inquiryType: 'General'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We have received your inquiry.`);
    setFormData({ name: '', email: '', message: '', inquiryType: 'General' });
  };

  return (
    <section id="contact" className="py-20 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-chocolate font-bold">Contact Us</h2>
          <div className="w-16 h-1 bg-soft-pink mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-soft-pink p-10 text-chocolate flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-8">Visit Our Shop</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0" />
                  <p>123 Confectionery Lane,<br/>Sweet District, NY 10012</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <p>(212) 555-0199</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <p>hello@sweetdelights.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Opening Hours
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 9:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>10:00 AM - 6:00 PM</span></li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-10">
            <h3 className="font-serif text-2xl font-bold text-chocolate mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-sm font-bold text-chocolate mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-warm-white p-3 rounded-lg border border-chocolate/10 focus:border-soft-pink focus:outline-none"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-bold text-chocolate mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-warm-white p-3 rounded-lg border border-chocolate/10 focus:border-soft-pink focus:outline-none"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-bold text-chocolate mb-2">Inquiry Type</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full bg-warm-white p-3 rounded-lg border border-chocolate/10 focus:border-soft-pink focus:outline-none"
                >
                  <option>General Inquiry</option>
                  <option>Custom Cake Order</option>
                  <option>Wedding Consultation</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-bold text-chocolate mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-warm-white p-3 rounded-lg border border-chocolate/10 focus:border-soft-pink focus:outline-none"
                ></textarea>
              </div>
              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="bg-chocolate text-cream px-8 py-3 rounded-full font-bold hover:bg-soft-pink hover:text-chocolate transition-colors"
                >
                  SendMessage
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;