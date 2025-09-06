import Link from 'next/link';

export default function NavbarSoftware() {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/platforms/software" className="text-xl font-bold">
            Oblivent Dev
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/platforms/software" className="hover:text-gray-200">Tools</Link>
            <Link href="/dashboard" className="hover:text-gray-200">Projects</Link>
            <Link href="/auth/login" className="hover:text-gray-200">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}