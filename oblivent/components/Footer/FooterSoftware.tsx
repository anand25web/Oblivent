export default function FooterSoftware() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Oblivent Dev</h3>
            <p className="text-gray-400">Developer tools and platforms</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Code Editor</li>
              <li>API Builder</li>
              <li>Database Tools</li>
              <li>Deploy Platform</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Documentation</li>
              <li>Tutorials</li>
              <li>API Reference</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li>GitHub</li>
              <li>Discord</li>
              <li>Developer Forum</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}