import Head from 'next/head'
import Layout from '../components/Layout'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <Layout>
      <Head>
        <title>Contact Us - Get in Touch with Chael Collective Nigeria</title>
  <meta name="description" content="Contact Chael Collective for questions, partnerships, or support. Join our community via WhatsApp, email, or social media. Connect with Nigeria's leading acne support community." />
  <meta name="keywords" content="contact Chael Collective, acne support contact Nigeria, reach Chael Collective, join acne community" />
  
  <meta property="og:title" content="Contact Chael Collective" />
  <meta property="og:description" content="Get in touch with Nigeria's leading acne support community." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://chaelcollective.com.ng/contact" />
      </Head>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-chael-bg to-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chael-brown mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Have a question, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-chael-brown mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-chael-brown font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-chael-brown focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-chael-brown font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-chael-brown focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-chael-brown font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-chael-brown focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="join">Joining the Community</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-chael-brown font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-chael-brown focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-chael-brown mb-6">
                Other Ways to Connect
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="bg-chael-bg rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📧</div>
                    <div>
                      <h3 className="text-xl font-bold text-chael-brown mb-2">
                        Email Us
                      </h3>
                      <p className="text-gray-700 mb-2">
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
                <div className="bg-chael-bg rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">💬</div>
                    <div>
                      <h3 className="text-xl font-bold text-chael-brown mb-2">
                        Join Our Discord
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Connect with the community directly
                      </p>
                      <a
                        href="https://discord.gg/chaelcollective"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-chael-pink font-semibold hover:underline"
                      >
                        discord.gg/chaelcollective
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-chael-bg rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📱</div>
                    <div>
                      <h3 className="text-xl font-bold text-chael-brown mb-2">
                        Social Media
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Follow us for daily inspiration and updates
                      </p>
                      <div className="flex space-x-4">
                        <a
                          href="https://instagram.com/chaelcollective"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-chael-brown hover:text-chael-pink transition-colors"
                        >
                          Instagram
                        </a>
                        <a
                          href="https://twitter.com/chaelcollective"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-chael-brown hover:text-chael-pink transition-colors"
                        >
                          Twitter
                        </a>
                        <a
                          href="https://tiktok.com/@chaelcollective"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-chael-brown hover:text-chael-pink transition-colors"
                        >
                          TikTok
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-gradient-to-br from-chael-pink to-chael-brown rounded-xl p-6 text-white">
                  <div className="text-3xl mb-3">❓</div>
                  <h3 className="text-xl font-bold mb-2">
                    Have a Quick Question?
                  </h3>
                  <p className="mb-4">
                    Check out our FAQ section for instant answers to common questions about joining, participating, and navigating our community.
                  </p>
                  <a
                    href="/faq"
                    className="inline-block bg-white text-chael-brown px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                  >
                    View FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="section-padding bg-chael-bg">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-chael-brown mb-6">
            Response Times
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We typically respond to all inquiries within 24-48 hours during business days. For urgent community matters, please reach out via Discord for faster assistance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-chael-brown mb-1">Discord</div>
              <div className="text-gray-600 text-sm">Response within hours</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl mb-2">📧</div>
              <div className="font-bold text-chael-brown mb-1">Email</div>
              <div className="text-gray-600 text-sm">Response within 24-48h</div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-bold text-chael-brown mb-1">Social Media</div>
              <div className="text-gray-600 text-sm">Response within 48h</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
