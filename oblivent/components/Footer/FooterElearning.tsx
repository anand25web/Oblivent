export default function FooterElearning() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Oblivent Learning</h3>
            <p className="text-blue-200">Empowering education through technology</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Web Development</li>
              <li>Data Science</li>
              <li>Design</li>
              <li>Business</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Student Help</li>
              <li>Instructor Resources</li>
              <li>Technical Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Forums</li>
              <li>Study Groups</li>
              <li>Events</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}