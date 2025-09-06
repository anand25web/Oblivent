import Link from 'next/link';

export default function NavbarMart() {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/platforms/mart" className="text-xl font-bold">
            Oblivent Mart
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/platforms/mart" className="hover:text-green-200">Shop</Link>
            <Link href="/dashboard" className="hover:text-green-200">Cart</Link>
            <Link href="/auth/login" className="hover:text-green-200">Account</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}