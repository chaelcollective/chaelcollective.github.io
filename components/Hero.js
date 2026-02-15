import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-br from-chael-bg to-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-chael-pink bg-opacity-20 rounded-full mb-6">
            <span className="text-chael-brown font-semibold text-sm md:text-base">
              🌸 Join 10,000+ Community Members
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chael-brown mb-6 leading-tight">
            Breaking the Stigma Around Acne, Together
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10 max-w-2xl">
            A safe, supportive space where real stories meet expert knowledge. Connect with others who understand your journey, celebrate your skin, and find empowerment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#join"
              className="btn-primary text-center text-base md:text-lg"
            >
              Join the Community
            </a>
            <a
              href="#newsletter"
              className="btn-secondary text-center text-base md:text-lg"
            >
              Subscribe for Updates
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-16 w-full max-w-2xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chael-brown mb-2">10K+</div>
              <div className="text-sm md:text-base text-gray-600">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chael-brown mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-600">Stories Shared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chael-brown mb-2">50+</div>
              <div className="text-sm md:text-base text-gray-600">Challenges Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
