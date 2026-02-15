import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Community Lead',
      emoji: '👩‍💼',
      bio: 'After struggling with acne for 15 years, Sarah founded Chael Collective to create the supportive community she wished she had.'
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Medical Advisor',
      emoji: '👩‍⚕️',
      bio: 'Board-certified dermatologist with 10+ years of experience helping patients navigate acne treatment with compassion.'
    },
    {
      name: 'Marcus Williams',
      role: 'Content Director',
      emoji: '👨‍💻',
      bio: 'Passionate about making evidence-based skincare information accessible and breaking down complex science.'
    },
    {
      name: 'Priya Patel',
      role: 'Community Manager',
      emoji: '👩‍🎨',
      bio: 'Creates safe, inclusive spaces for authentic connection and ensures every voice in our community is heard.'
    }
  ]

  const milestones = [
    { year: '2024', event: 'Chael Collective founded with 100 members' },
    { year: '2024', event: 'First monthly challenge launched' },
    { year: '2025', event: 'Reached 5,000 community members' },
    { year: '2025', event: 'Launched weekly Q&A with dermatologists' },
    { year: '2026', event: 'Community grows to 10,000+ members' },
    { year: '2026', event: 'Mobile app development begins' }
  ]

  return (
    <Layout>
      <Head>
        <title>About Us - Chael Collective</title>
        <meta name="description" content="Learn about Chael Collective's mission to break the stigma around acne and create a supportive community for everyone on their skincare journey." />
        <meta property="og:title" content="About Us - Chael Collective" />
        <meta property="og:description" content="Our story, mission, and the team behind Chael Collective." />
      </Head>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-chael-bg to-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chael-brown mb-6">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Chael Collective was born from a simple truth: dealing with acne shouldn't mean dealing with shame, isolation, or misinformation. We're here to change that.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-chael-brown mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We exist to break the stigma around acne by creating a supportive community where people can share their experiences, access reliable information, and celebrate their skin journey without judgment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every person deserves to feel confident in their skin, whether they're going through a breakout or celebrating clear skin. We're building a world where acne doesn't define your worth, limit your opportunities, or silence your voice.
              </p>
            </div>
            <div className="bg-gradient-to-br from-chael-pink to-chael-brown rounded-2xl p-12 text-white text-center">
              <div className="text-6xl mb-4">🌸</div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <span className="mr-2">✨</span>
                  <span>Authenticity over perfection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💪</span>
                  <span>Empowerment through education</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🤝</span>
                  <span>Community over isolation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔬</span>
                  <span>Evidence-based information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💗</span>
                  <span>Compassion and inclusivity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-chael-bg">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-chael-brown mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 md:w-32">
                  <span className="inline-block bg-chael-brown text-white px-4 py-2 rounded-full font-bold">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1 bg-white rounded-lg p-6 shadow-md ml-4">
                  <p className="text-lg text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-chael-brown mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're a diverse group of individuals united by a shared mission: making the world more accepting of all skin types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-chael-pink to-chael-brown rounded-2xl w-40 h-40 mx-auto mb-4 flex items-center justify-center text-7xl">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-bold text-chael-brown mb-2">
                  {member.name}
                </h3>
                <p className="text-chael-pink font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-700 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-gradient-to-br from-chael-brown to-chael-pink text-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-3">10,000+</div>
              <p className="text-xl">Community Members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-3">500+</div>
              <p className="text-xl">Stories Shared</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-3">50+</div>
              <p className="text-xl">Educational Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-chael-bg">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-chael-brown mb-6">
            Join Us in Breaking the Stigma
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Whether you're dealing with acne, have experienced it in the past, or simply want to support our mission, there's a place for you in our community.
          </p>
          <a href="/#join" className="btn-primary inline-block">
            Join the Community
          </a>
        </div>
      </section>
    </Layout>
  )
}
