export default function FooterBase() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Oblivent</h3>
            <p className="text-gray-400">Building the future of digital platforms</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Platforms</h3>
            <ul className="space-y-2 text-gray-400">
              <li>E-Learning</li>
              <li>Mart</li>
              <li>Agency</li>
              <li>Software</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Documentation</li>
              <li>Contact</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2025 Oblivent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}