import Head from 'next/head'
import Layout from '../components/Layout'

export default function Terms() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - Chael Collective</title>
        <meta name="description" content="Terms of Service for using Chael Collective's website and services." />
      </Head>

      <div className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-chael-brown mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8">Last updated: February 14, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              Welcome to Chael Collective. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using Chael Collective's website, community platforms, and services, you accept and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              2. Description of Service
            </h2>
            <p>
              Chael Collective provides a community platform and resources focused on breaking the stigma around acne. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access to community discussions and support</li>
              <li>Educational content and resources</li>
              <li>Monthly challenges and events</li>
              <li>Newsletter and updates</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              3. User Responsibilities
            </h2>
            <p>As a user of our services, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and current information</li>
              <li>Maintain the security of your account</li>
              <li>Not impersonate others or misrepresent your identity</li>
              <li>Not post harmful, offensive, or illegal content</li>
              <li>Respect other community members</li>
              <li>Not use our services for commercial purposes without permission</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              4. Community Guidelines
            </h2>
            <p>
              Our community is built on respect, support, and authenticity. Users must:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Treat all members with kindness and respect</li>
              <li>Share experiences authentically without judgment</li>
              <li>Respect privacy and confidentiality</li>
              <li>Avoid sharing medical advice (leave that to professionals)</li>
              <li>Report inappropriate behavior to moderators</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              5. Content and Intellectual Property
            </h2>
            <p>
              All content on our website, including text, graphics, logos, and images, is the property of Chael Collective or its content suppliers and is protected by copyright laws.
            </p>
            <p>
              When you post content to our community platforms, you grant us a non-exclusive, royalty-free license to use, reproduce, and display that content in connection with our services.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              6. Medical Disclaimer
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-4">
              <p className="font-semibold text-gray-800">
                IMPORTANT: Chael Collective does not provide medical advice, diagnosis, or treatment. Our content is for informational and educational purposes only and is not a substitute for professional medical advice.
              </p>
              <p className="mt-3">
                Always consult with a qualified healthcare provider regarding any medical condition or treatment. Never disregard professional medical advice or delay seeking it because of something you read on our platform.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              Chael Collective and its team members shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              8. Account Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your account if you violate these Terms of Service or engage in behavior that we deem harmful to the community.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              9. Changes to Terms
            </h2>
            <p>
              We may modify these Terms of Service at any time. We will notify users of significant changes via email or through our website. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              10. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-chael-bg p-6 rounded-xl my-4">
              <p className="font-semibold text-chael-brown">Chael Collective</p>
              <p>Email: legal@chaelcollective.com</p>
              <p>Website: <a href="/contact" className="text-chael-pink hover:underline">Contact Form</a></p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
