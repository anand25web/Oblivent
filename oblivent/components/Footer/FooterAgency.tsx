export default function FooterAgency() {
  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Oblivent Agency</h3>
            <p className="text-purple-200">Creative digital solutions</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-purple-200">
              <li>Web Design</li>
              <li>Branding</li>
              <li>Digital Marketing</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-2 text-purple-200">
              <li>Case Studies</li>
              <li>Client Work</li>
              <li>Awards</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-purple-200">
              <li>Get Quote</li>
              <li>Schedule Call</li>
              <li>Office Locations</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}