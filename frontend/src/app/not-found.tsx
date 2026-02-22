import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1628] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-cyan-400 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-cyan-400 text-[#0A1628] font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
