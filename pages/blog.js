import Head from 'next/head'
import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'
import { useState } from 'react'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'mental-health', name: 'Mental Health' },
    { id: 'skincare', name: 'Skincare Science' },
    { id: 'community', name: 'Community Stories' },
    { id: 'lifestyle', name: 'Lifestyle & Wellness' }
  ]

  const blogPosts = [
    {
      title: 'How Acne Affects Mental Health',
      excerpt: 'Understanding the deep connection between skin health and emotional wellbeing, and how to prioritize both on your journey to clearer skin.',
      slug: 'acne-mental-health',
      date: 'Feb 10, 2026',
      readTime: '5',
      image: '🧠',
      category: 'mental-health'
    },
    {
      title: 'Barrier Repair 101: Your Complete Guide',
      excerpt: 'Learn the science behind skin barrier function and discover proven strategies to repair and protect your skin from further damage.',
      slug: 'barrier-repair-guide',
      date: 'Feb 8, 2026',
      readTime: '8',
      image: '🛡️',
      category: 'skincare'
    },
    {
      title: 'Breaking Down Acne Myths',
      excerpt: 'Separating fact from fiction. We debunk the most common misconceptions about acne causes and treatments with evidence-based insights.',
      slug: 'acne-myths-debunked',
      date: 'Feb 5, 2026',
      readTime: '6',
      image: '🔍',
      category: 'skincare'
    },
    {
      title: 'My Journey to Self-Acceptance',
      excerpt: 'A community member shares their powerful story of learning to love their skin through all its phases, breakouts included.',
      slug: 'journey-self-acceptance',
      date: 'Feb 3, 2026',
      readTime: '7',
      image: '💗',
      category: 'community'
    },
    {
      title: 'Understanding Different Acne Types',
      excerpt: 'From blackheads to cystic acne, learn to identify different acne types and understand what treatment approaches work best for each.',
      slug: 'acne-types-guide',
      date: 'Jan 30, 2026',
      readTime: '10',
      image: '📊',
      category: 'skincare'
    },
    {
      title: 'The Role of Diet in Skin Health',
      excerpt: 'Exploring the science behind nutrition and acne, and practical dietary changes that may support clearer skin.',
      slug: 'diet-skin-health',
      date: 'Jan 27, 2026',
      readTime: '9',
      image: '🥗',
      category: 'lifestyle'
    },
    {
      title: 'Managing Acne Anxiety',
      excerpt: 'Practical strategies and coping mechanisms for dealing with the anxiety and stress that often accompany acne breakouts.',
      slug: 'managing-acne-anxiety',
      date: 'Jan 24, 2026',
      readTime: '6',
      image: '🧘',
      category: 'mental-health'
    },
    {
      title: 'Building a Simple Skincare Routine',
      excerpt: 'A step-by-step guide to creating an effective, affordable skincare routine that actually works for acne-prone skin.',
      slug: 'simple-skincare-routine',
      date: 'Jan 20, 2026',
      readTime: '8',
      image: '✨',
      category: 'skincare'
    },
    {
      title: 'From Rock Bottom to Confident: Alex\'s Story',
      excerpt: 'How one community member transformed their relationship with their skin and found confidence through connection and self-compassion.',
      slug: 'alex-transformation-story',
      date: 'Jan 15, 2026',
      readTime: '5',
      image: '🌟',
      category: 'community'
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <Layout>
      <Head>
        <title>Resources & Blog - Chael Collective</title>
        <meta name="description" content="Evidence-based articles, expert insights, and community stories about acne, skincare, mental health, and self-acceptance." />
        <meta name="keywords" content="acne resources, skincare blog, mental health, acne stories, skincare science" />
        <meta property="og:title" content="Resources & Blog - Chael Collective" />
        <meta property="og:description" content="Evidence-based articles and community stories about acne and skincare." />
      </Head>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-chael-bg to-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chael-brown mb-6">
            Resources & Stories
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Evidence-based information, expert insights, and real stories from our community to support your skincare journey.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-chael-brown text-white shadow-md'
                    : 'bg-gray-100 text-chael-brown hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-chael-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No articles found in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-chael-pink to-chael-brown text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Never Miss an Update
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Get new articles, expert tips, and community stories delivered straight to your inbox.
          </p>
          <a href="/#newsletter" className="bg-white text-chael-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
            Subscribe to Newsletter
          </a>
        </div>
      </section>
    </Layout>
  )
}
