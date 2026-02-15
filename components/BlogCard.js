import Link from 'next/link'

export default function BlogCard({ title, excerpt, slug, date, readTime, image }) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col cursor-pointer group">
        {/* Image */}
        <div className="h-48 md:h-56 bg-gradient-to-br from-chael-pink to-chael-brown overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-white text-6xl group-hover:scale-110 transition-transform duration-300">
            {image || '📰'}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{readTime} min read</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-chael-brown mb-3 group-hover:text-chael-pink transition-colors">
            {title}
          </h3>

          <p className="text-gray-700 mb-4 flex-1">
            {excerpt}
          </p>

          <div className="text-chael-brown font-semibold group-hover:text-chael-pink transition-colors">
            Read More →
          </div>
        </div>
      </div>
    </Link>
  )
}
