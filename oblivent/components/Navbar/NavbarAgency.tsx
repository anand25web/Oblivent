import Link from 'next/link';

export default function NavbarAgency() {
  return (
    <nav className="bg-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/platforms/agency" className="text-xl font-bold">
            Oblivent Agency
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/platforms/agency" className="hover:text-purple-200">Services</Link>
            <Link href="/dashboard" className="hover:text-purple-200">Projects</Link>
            <Link href="/auth/login" className="hover:text-purple-200">Client Portal</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}