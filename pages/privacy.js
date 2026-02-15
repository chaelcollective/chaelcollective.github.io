import Head from 'next/head'
import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - Chael Collective</title>
        <meta name="description" content="Chael Collective's privacy policy and data protection practices." />
      </Head>

      <div className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-chael-brown mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: February 14, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              At Chael Collective, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              Information We Collect
            </h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and email address (for newsletter and community registration)</li>
              <li>Profile information (if you join our community platforms)</li>
              <li>Communications you send to us</li>
              <li>Survey responses and feedback</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you newsletters and updates (with your consent)</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your data</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              Cookies
            </h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              Children's Privacy
            </h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-chael-brown mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-chael-bg p-6 rounded-xl my-4">
              <p className="font-semibold text-chael-brown">Chael Collective</p>
              <p>Email: privacy@chaelcollective.com</p>
              <p>Website: <a href="/contact" className="text-chael-pink hover:underline">Contact Form</a></p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
