'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-chael-bg via-white to-chael-pink/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary mb-6">
              Get in <span className="text-chael-pink">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-chael-brown/80 leading-relaxed">
              Have questions, feedback, or just want to say hello? We'd love to hear from you. 
              Our team typically responds within 24-48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="heading-tertiary mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-chael-brown font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-chael-brown/10 focus:border-chael-pink focus:outline-none text-chael-brown"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-chael-brown font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-chael-brown/10 focus:border-chael-pink focus:outline-none text-chael-brown"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-chael-brown font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-chael-brown/10 focus:border-chael-pink focus:outline-none text-chael-brown"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-chael-brown font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-chael-brown/10 focus:border-chael-pink focus:outline-none text-chael-brown resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="heading-tertiary mb-6">Other Ways to Connect</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="bg-chael-bg rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-chael-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-chael-brown" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-chael-brown mb-2">
                        Email Us
                      </h3>
                      <p className="text-chael-brown/70 mb-2">
                        For general inquiries and support
                      </p>
                      <a 
                        href="mailto:hello@chaelcollective.com"
                        className="text-chael-pink font-semibold hover:underline"
                      >
                        hello@chaelcollective.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Community */}
                <div className="bg-chael-bg rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-chael-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-chael-brown" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-chael-brown mb-2">
                        Join the Community
                      </h3>
                      <p className="text-chael-brown/70 mb-3">
                        Connect with members and get real-time support
                      </p>
                      <a 
                        href="#join"
                        className="inline-block btn-secondary text-sm px-6 py-2"
                      >
                        Join Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-gradient-to-br from-chael-pink/10 to-transparent rounded-2xl p-6 border border-chael-pink/20">
                  <h3 className="text-xl font-bold text-chael-brown mb-3">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-chael-brown/70 mb-4">
                    Many questions are answered in our FAQ section. Check there first for quick answers!
                  </p>
                  <a 
                    href="#"
                    className="text-chael-pink font-semibold hover:underline"
                  >
                    View FAQs →
                  </a>
                </div>

                {/* Response Time */}
                <div className="bg-white rounded-2xl p-6 border-2 border-chael-brown/10">
                  <h3 className="text-lg font-bold text-chael-brown mb-2">
                    Response Time
                  </h3>
                  <p className="text-chael-brown/70 text-sm">
                    We typically respond to all inquiries within 24-48 hours during business days. 
                    For urgent community support, please reach out directly through our member portal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-padding bg-chael-bg">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="heading-tertiary mb-6">
            Follow Our Journey
          </h2>
          <p className="text-chael-brown/80 mb-8">
            Stay connected and join the conversation on social media
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white rounded-full font-semibold text-chael-brown hover:bg-chael-pink/10 transition-colors border-2 border-chael-brown/10"
            >
              Instagram
            </a>
            <a 
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white rounded-full font-semibold text-chael-brown hover:bg-chael-pink/10 transition-colors border-2 border-chael-brown/10"
            >
              Twitter
            </a>
            <a 
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white rounded-full font-semibold text-chael-brown hover:bg-chael-pink/10 transition-colors border-2 border-chael-brown/10"
            >
              Facebook
            </a>
            <a 
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white rounded-full font-semibold text-chael-brown hover:bg-chael-pink/10 transition-colors border-2 border-chael-brown/10"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
