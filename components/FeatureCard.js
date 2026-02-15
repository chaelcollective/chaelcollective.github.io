export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-4xl md:text-5xl mb-4">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold text-chael-brown mb-3">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
