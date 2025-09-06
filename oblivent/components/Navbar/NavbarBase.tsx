import Link from 'next/link';

export default function NavbarBase() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            Oblivent
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/platforms" className="hover:text-blue-600">Platforms</Link>
            <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            <Link href="/auth/login" className="hover:text-blue-600">Login</Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}