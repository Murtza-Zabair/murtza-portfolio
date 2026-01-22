'use client';

import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MapPin,
  Phone,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoaded, setIsLoaded] = useState(false);
  const [copiedItem, setCopiedItem] = useState('');

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(label);
      setTimeout(() => setCopiedItem(''), 2000);
    });
  };

  const socialLinks = [
    {
      icon: Github,
      link: 'https://github.com/Murtza-Zabair',
      label: 'GitHub',
      color: 'from-slate-400 to-slate-600',
    },
    {
      icon: Linkedin,
      link: 'https://linkedin.com/in/murtza-zabair',
      label: 'LinkedIn',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Mail,
      link: 'mailto:murtzazabair@gmail.com',
      label: 'Email',
      color: 'from-cyan-400 to-blue-500',
    },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'murtzazabair@gmail.com', color: 'blue' },
    { icon: MapPin, label: 'Location', value: 'Sialkot, Punjab, Pakistan', color: 'slate' },
    { icon: Phone, label: 'Phone', value: '+92 (305) 4992 490', color: 'cyan' },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Let's Connect</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-linear-to-r from-blue-400 via-slate-300 to-blue-300 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Drop me a
            message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-slate-500 rounded-2xl blur-xl opacity-20" />

              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="group relative w-full px-8 py-4 bg-linear-to-r from-blue-600 to-slate-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Contact Information Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const isCopied = copiedItem === info.label;
                return (
                  <div
                    key={info.label}
                    className="group relative cursor-pointer"
                    onClick={() => copyToClipboard(info.value, info.label)}
                  >
                    <div
                      className={`absolute -inset-0.5 bg-linear-to-r from-${info.color}-500 to-slate-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
                    />

                    <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex items-start gap-4 group-hover:border-slate-600 transition-all">
                      <div className={`p-3 bg-${info.color}-500/10 rounded-lg`}>
                        <Icon className={`w-6 h-6 text-${info.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">{info.label}</h4>
                        <p className="text-slate-400">{info.value}</p>
                      </div>
                      <div className="flex items-center justify-center w-8 h-8">
                        {isCopied ? (
                          <Check className="w-5 h-5 text-green-400" />
                        ) : (
                          <Copy className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div
                        className={`absolute -inset-0.5 bg-linear-to-r ${social.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500`}
                      />

                      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex flex-col items-center gap-3 group-hover:border-slate-600 transition-all group-hover:scale-105">
                        <Icon className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors" />
                        <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                          {social.label}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-linear-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-20" />

              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <h4 className="font-semibold text-white">Available for Work</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  I'm currently available for freelance projects and full-time opportunities. Let's
                  build something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
