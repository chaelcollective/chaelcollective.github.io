import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import BlogCard from '../components/BlogCard'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 3000)
  }

  const features = [
    {
      icon: '🎯',
      title: 'Monthly Challenges',
      description: 'Engage in fun, supportive challenges that build confidence and celebrate your skin journey. From self-care routines to photo challenges that embrace authenticity.'
    },
    {
      icon: '💬',
      title: 'Weekly Q&A Sessions',
      description: 'Get your questions answered by dermatology experts, skincare professionals, and experienced community members in our live weekly sessions.'
    },
    {
      icon: '✨',
      title: 'Spotlight Stories',
      description: 'Real stories from real people. Share your journey, celebrate victories, and find inspiration in the experiences of others who truly understand.'
    },
    {
      icon: '📚',
      title: 'Educational Deep Dives',
      description: 'Evidence-based resources covering everything from ingredients to treatment options. Cut through the misinformation with reliable, accessible information.'
    }
  ]

  const blogPosts = [
    {
      title: 'How Acne Affects Mental Health',
      excerpt: 'Understanding the deep connection between skin health and emotional wellbeing, and how to prioritize both.',
      slug: 'acne-mental-health',
      date: 'Feb 10, 2026',
      readTime: '5',
      image: '🧠'
    },
    {
      title: 'Barrier Repair 101: Your Complete Guide',
      excerpt: 'Learn the science behind skin barrier function and discover proven strategies to repair and protect your skin.',
      slug: 'barrier-repair-guide',
      date: 'Feb 8, 2026',
      readTime: '8',
      image: '🛡️'
    },
    {
      title: 'Breaking Down Acne Myths',
      excerpt: 'Separating fact from fiction. We debunk the most common misconceptions about acne causes and treatments.',
      slug: 'acne-myths-debunked',
      date: 'Feb 5, 2026',
      readTime: '6',
      image: '🔍'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Chael Collective - Breaking the Stigma Around Acne</title>
        <meta name="description" content="Join a supportive community dedicated to breaking the stigma around acne. Connect with others, access expert resources, and celebrate your skin journey." />
        <meta name="keywords" content="acne support, skin health, acne community, skincare education, mental health, self-acceptance" />
        <meta property="og:title" content="Chael Collective - Breaking the Stigma Around Acne" />
        <meta property="og:description" content="A safe, supportive space where real stories meet expert knowledge." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* The Problem Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chael-brown mb-6">
              Why Chael Collective Exists
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Acne is more than skin deep. It affects mental health, self-esteem, and daily life for millions. Yet stigma, misinformation, and isolation continue to plague those dealing with it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-chael-bg rounded-xl p-6 md:p-8 text-center border-2 border-chael-pink">
              <div className="text-4xl md:text-5xl font-bold text-chael-brown mb-2">85%</div>
              <p className="text-gray-700">of people aged 12-24 experience acne at some point</p>
            </div>
            <div className="bg-chael-bg rounded-xl p-6 md:p-8 text-center border-2 border-chael-pink">
              <div className="text-4xl md:text-5xl font-bold text-chael-brown mb-2">63%</div>
              <p className="text-gray-700">report negative impact on self-confidence and social interactions</p>
            </div>
            <div className="bg-chael-bg rounded-xl p-6 md:p-8 text-center border-2 border-chael-pink">
              <div className="text-4xl md:text-5xl font-bold text-chael-brown mb-2">70%</div>
              <p className="text-gray-700">feel misinformed about proper treatment and care options</p>
            </div>
          </div>

          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-chael-pink to-chael-brown bg-opacity-10 rounded-2xl border-l-4 border-chael-brown">
            <p className="text-lg md:text-xl text-chael-brown font-semibold italic">
              "We believe everyone deserves to feel confident in their skin, access reliable information, and find a community that celebrates their journey—breakouts and all."
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-gradient-to-br from-chael-bg to-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chael-brown mb-6">
              What We Offer
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Our community provides practical support, expert knowledge, and genuine connection through carefully designed programs and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chael-brown mb-6">
              Community in Action
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              See the impact of connection, support, and celebration across our community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-chael-pink to-chael-brown rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center text-white text-4xl md:text-5xl"
              >
                {item % 4 === 0 ? '🌸' : item % 4 === 1 ? '💫' : item % 4 === 2 ? '✨' : '💖'}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Vision Section */}
      <section className="section-padding bg-chael-brown text-white">
        <div className="container-custom max-w-4xl text-center">
          <div className="inline-flex items-center px-4 py-2 bg-chael-pink bg-opacity-30 rounded-full mb-6">
            <span className="font-semibold">🚀 Coming Soon</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The Future of Chael Collective
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            We're building a dedicated mobile app that will bring the entire Chael Collective experience to your fingertips. Track your progress, connect with members, access resources, and celebrate your journey—all in one beautiful, intuitive platform.
          </p>

          <a href="#join" className="inline-block bg-chael-pink text-chael-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
            Be First to Know
          </a>
        </div>
      </section>

      {/* Resources/Blog Section */}
      <section className="section-padding bg-chael-bg">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chael-brown mb-6">
              Latest Resources
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Evidence-based articles, expert insights, and practical guides to help you on your skincare journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          <div className="text-center">
            <a href="/blog" className="btn-primary inline-block">
              View All Resources
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chael-brown mb-6">
            Stay Connected
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Get the latest resources, community updates, and exclusive content delivered to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-chael-brown focus:outline-none text-chael-brown"
            />
            <button
              type="submit"
              className="btn-secondary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
              ✅ Successfully subscribed! Check your inbox.
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="join" className="section-padding bg-gradient-to-br from-chael-pink to-chael-brown text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Join the Movement?
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            Become part of a community that celebrates your journey, supports your growth, and breaks down the stigma around acne—one story at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/chaelcollective"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-chael-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Join on Discord
            </a>
            <a
              href="/contact"
              className="bg-chael-brown text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-block border-2 border-white"
            >
              Get in Touch
            </a>
          </div>

          <p className="mt-8 text-gray-200 text-sm">
            100% free • No spam • Cancel anytime • Your data is safe with us
          </p>
        </div>
      </section>
    </Layout>
  )
}
