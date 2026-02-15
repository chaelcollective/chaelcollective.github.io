import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-chael-bg px-4">
      <div className="max-w-2xl text-center">
        <div className="text-8xl md:text-9xl font-bold text-chael-pink mb-4">
          404
        </div>
        <h1 className="heading-secondary mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-chael-brown/80 mb-8">
          Oops! The page you're looking for seems to have wandered off. 
          Let's get you back to somewhere familiar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary flex items-center justify-center gap-2">
            <Home size={20} />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
