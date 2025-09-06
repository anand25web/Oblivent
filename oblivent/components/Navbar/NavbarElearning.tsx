import Link from 'next/link';

export default function NavbarElearning() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/platforms/elearning" className="text-xl font-bold">
            Oblivent Learning
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/platforms/elearning" className="hover:text-blue-200">Courses</Link>
            <Link href="/dashboard" className="hover:text-blue-200">My Learning</Link>
            <Link href="/auth/login" className="hover:text-blue-200">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}