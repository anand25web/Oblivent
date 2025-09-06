import Link from 'next/link';

export default function Platforms() {
  const platforms = [
    { name: 'E-Learning', href: '/platforms/elearning', description: 'Online education platform' },
    { name: 'Mart', href: '/platforms/mart', description: 'E-commerce marketplace' },
    { name: 'Agency', href: '/platforms/agency', description: 'Digital agency services' },
    { name: 'Software', href: '/platforms/software', description: 'Software development tools' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">All Platforms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform) => (
          <Link key={platform.name} href={platform.href} className="block">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{platform.name}</h2>
              <p className="text-gray-600">{platform.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}