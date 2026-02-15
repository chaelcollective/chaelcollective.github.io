import Head from 'next/head'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query

  // Sample blog post data - in a real app, this would come from a CMS or API
  const posts = {
    'acne-mental-health': {
      title: 'How Acne Affects Mental Health',
      date: 'February 10, 2026',
      readTime: '5',
      author: 'Dr. Emily Chen',
      image: '🧠',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          The relationship between acne and mental health is profound and often underestimated. While acne is commonly viewed as a purely physical condition, its psychological impact can be just as significant—and sometimes even more challenging to address.
        </p>

        <h2 class="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">The Emotional Toll</h2>
        <p class="leading-relaxed mb-6">
          Research consistently shows that people with acne experience higher rates of anxiety, depression, and social withdrawal. A study published in the British Journal of Dermatology found that individuals with acne are 63% more likely to experience depression compared to those without.
        </p>

        <div class="bg-chael-bg border-l-4 border-chael-pink p-6 my-8 rounded-r-lg">
          <p class="italic text-chael-brown font-semibold">
            "The visible nature of acne means that people carry their struggle on their face, making it impossible to hide. This constant visibility can create a cycle of stress and anxiety that actually worsens breakouts."
          </p>
        </div>

        <h2 class="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">Common Psychological Effects</h2>
        <ul class="list-disc list-inside space-y-3 mb-6 text-gray-700">
          <li><strong>Low self-esteem:</strong> Negative self-perception and reduced confidence in appearance</li>
          <li><strong>Social anxiety:</strong> Fear of judgment, avoidance of social situations, difficulty making eye contact</li>
          <li><strong>Depression:</strong> Persistent sadness, loss of interest in activities, feelings of hopelessness</li>
          <li><strong>Body dysmorphia:</strong> Obsessive focus on perceived flaws, excessive mirror checking or mirror avoidance</li>
          <li><strong>Academic/career impact:</strong> Reduced participation, missed opportunities due to appearance concerns</li>
        </ul>

        <h2 class="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">Breaking the Cycle</h2>
        <p class="leading-relaxed mb-6">
          Understanding that acne affects mental health is the first step. Here are evidence-based strategies that can help:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="bg-white p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-bold text-chael-brown mb-3">1. Seek Support</h3>
            <p class="text-gray-700">
              Connect with others who understand. Communities like Chael Collective provide safe spaces to share experiences without judgment.
            </p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-bold text-chael-brown mb-3">2. Professional Help</h3>
            <p class="text-gray-700">
              Don't hesitate to speak with a therapist, especially one familiar with dermatological conditions.
            </p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-bold text-chael-brown mb-3">3. Mindfulness Practice</h3>
            <p class="text-gray-700">
              Meditation and mindfulness can help manage anxiety and break negative thought patterns.
            </p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-bold text-chael-brown mb-3">4. Holistic Treatment</h3>
            <p class="text-gray-700">
              Address both skin and mental health simultaneously for best outcomes.
            </p>
          </div>
        </div>

        <h2 class="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">You're Not Alone</h2>
        <p class="leading-relaxed mb-6">
          If you're struggling with the emotional impact of acne, please know that your feelings are valid and you're not alone. Millions of people experience the same challenges, and there is support available.
        </p>

        <p class="leading-relaxed mb-6">
          The journey to healthier skin and improved mental wellbeing is deeply personal, but it doesn't have to be lonely. Whether through professional support, community connection, or self-care practices, taking steps to address the psychological impact of acne is just as important as treating the physical symptoms.
        </p>
      `
    },
    'barrier-repair-guide': {
      title: 'Barrier Repair 101: Your Complete Guide',
      date: 'February 8, 2026',
      readTime: '8',
      author: 'Sarah Johnson',
      image: '🛡️',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          Your skin barrier is your body's first line of defense against the outside world. When compromised, it can lead to increased sensitivity, breakouts, dehydration, and a host of other skin concerns. Understanding how to protect and repair your barrier is fundamental to achieving healthy, resilient skin.
        </p>

        <h2 class="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">What Is the Skin Barrier?</h2>
        <p class="leading-relaxed mb-6">
          The skin barrier, also known as the stratum corneum, is the outermost layer of your skin. Think of it as a brick wall: the "bricks" are dead skin cells (corneocytes), and the "mortar" is made up of lipids including ceramides, cholesterol, and fatty acids. This structure keeps moisture in and irritants out.
        </p>

        <div class="bg-chael-bg p-6 rounded-xl my-8">
          <h3 class="text-xl font-bold text-chael-brown mb-4">Signs of a Damaged Barrier:</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Persistent dryness and flaking</li>
            <li>Increased sensitivity to products</li>
            <li>Redness and inflammation</li>
            <li>Rough, uneven texture</li>
            <li>Increased breakouts</li>
            <li>Itching or burning sensations</li>
          </ul>
        </div>

        <h2 class="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">Common Causes of Barrier Damage</h2>
        <p class="leading-relaxed mb-4">Understanding what damages your barrier helps you avoid these triggers:</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Over-exfoliation (chemical or physical)</li>
          <li>Harsh cleansers that strip natural oils</li>
          <li>Environmental stressors (pollution, extreme weather)</li>
          <li>Hot water and long showers</li>
          <li>Using too many active ingredients at once</li>
          <li>Skipping moisturizer</li>
        </ul>

        <h2 class="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">The Repair Protocol</h2>
        <p class="leading-relaxed mb-6">
          Repairing your barrier takes patience and consistency. Here's a step-by-step approach:
        </p>

        <div class="space-y-6 my-8">
          <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-chael-pink">
            <h3 class="text-xl font-bold text-chael-brown mb-3">Step 1: Simplify Your Routine</h3>
            <p class="text-gray-700">
              Strip back to basics: gentle cleanser, hydrating toner (optional), moisturizer, and SPF during the day. Remove all actives temporarily.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-chael-pink">
            <h3 class="text-xl font-bold text-chael-brown mb-3">Step 2: Focus on Hydration</h3>
            <p class="text-gray-700">
              Layer hydrating products with humectants like hyaluronic acid and glycerin to draw water into the skin.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-chael-pink">
            <h3 class="text-xl font-bold text-chael-brown mb-3">Step 3: Lock in Moisture</h3>
            <p class="text-gray-700">
              Use an occlusive moisturizer with ceramides, cholesterol, and fatty acids to rebuild the lipid barrier.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-chael-pink">
            <h3 class="text-xl font-bold text-chael-brown mb-3">Step 4: Protect</h3>
            <p class="text-gray-700">
              Daily SPF is non-negotiable. UV damage further compromises barrier function.
            </p>
          </div>
        </div>

        <h2 class="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">Key Ingredients for Barrier Repair</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div class="bg-chael-bg p-4 rounded-lg">
            <div class="font-bold text-chael-brown mb-2">Ceramides</div>
            <div class="text-sm text-gray-700">Restore lipid layers</div>
          </div>
          <div class="bg-chael-bg p-4 rounded-lg">
            <div class="font-bold text-chael-brown mb-2">Niacinamide</div>
            <div class="text-sm text-gray-700">Boosts ceramide production</div>
          </div>
          <div class="bg-chael-bg p-4 rounded-lg">
            <div class="font-bold text-chael-brown mb-2">Centella Asiatica</div>
            <div class="text-sm text-gray-700">Soothes inflammation</div>
          </div>
          <div class="bg-chael-bg p-4 rounded-lg">
            <div class="font-bold text-chael-brown mb-2">Hyaluronic Acid</div>
            <div class="text-sm text-gray-700">Attracts moisture</div>
          </div>
          <div class="bg-chael-bg p-4 rounded-lg">
            <div class="font-bold text-chael-brown mb-2">Squalane</div>
            <div class="text-sm text-gray-700">Mimics natural oils</div>
          </div>
          <div class="bg-chael-bg p-4 rounded-lg">
            <div class="font-bold text-chael-brown mb-2">Cholesterol</div>
            <div class="text-sm text-gray-700">Essential lipid component</div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-chael-pink to-chael-brown p-6 rounded-xl my-8 text-white">
          <h3 class="text-xl font-bold mb-3">💡 Pro Tip</h3>
          <p>
            Barrier repair typically takes 2-4 weeks of consistent care. Be patient and resist the urge to add back actives too quickly. Your skin will tell you when it's ready.
          </p>
        </div>

        <h2 class="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">Maintaining a Healthy Barrier</h2>
        <p class="leading-relaxed mb-6">
          Once your barrier is repaired, maintain it with these habits:
        </p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Use lukewarm water instead of hot</li>
          <li>Pat skin dry gently instead of rubbing</li>
          <li>Always follow actives with moisturizer</li>
          <li>Don't skip SPF, even on cloudy days</li>
          <li>Listen to your skin and adjust accordingly</li>
        </ul>

        <p class="leading-relaxed">
          Remember, healthy skin starts with a healthy barrier. Taking the time to repair and maintain this crucial protective layer will pay dividends in your overall skin health and appearance.
        </p>
      `
    }
  }

  const post = slug ? posts[slug] : null

  if (!post) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-4xl font-bold text-chael-brown mb-4">Post Not Found</h1>
          <p className="text-gray-700 mb-8">Sorry, this blog post doesn't exist yet.</p>
          <a href="/blog" className="btn-primary inline-block">
            Back to Resources
          </a>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <Head>
        <title>{post.title} - Chael Collective</title>
        <meta name="description" content={post.title} />
        <meta property="og:title" content={post.title} />
      </Head>

      {/* Hero */}
      <article className="section-padding bg-gradient-to-br from-chael-bg to-white">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl md:text-7xl mb-6">{post.image}</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chael-brown mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-gray-600 space-x-4 flex-wrap">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share & CTA */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <div className="bg-gradient-to-br from-chael-pink to-chael-brown rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Found This Helpful?
              </h3>
              <p className="mb-6 text-lg">
                Join our community to access more resources, connect with others, and get support on your skincare journey.
              </p>
              <a href="/#join" className="bg-white text-chael-brown px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all inline-block">
                Join Chael Collective
              </a>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <a href="/blog" className="text-chael-brown hover:text-chael-pink font-semibold inline-flex items-center">
              ← Back to All Resources
            </a>
          </div>
        </div>
      </article>
    </Layout>
  )
}
