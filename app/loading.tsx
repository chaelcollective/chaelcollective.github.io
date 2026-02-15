export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-chael-bg">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-chael-pink border-t-transparent mb-4"></div>
        <p className="text-chael-brown/70">Loading...</p>
      </div>
    </div>
  )
}
