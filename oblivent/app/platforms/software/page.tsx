export default function SoftwarePlatform() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Software Platform</h1>
      <p className="text-lg text-gray-600 mb-8">
        Develop custom software solutions with development tools, API management, and deployment services.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Development Tools</h3>
          <p className="text-sm text-gray-600">Code editors, debugging, and version control</p>
        </div>
        <div className="bg-teal-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">API Management</h3>
          <p className="text-sm text-gray-600">RESTful APIs, documentation, and testing</p>
        </div>
        <div className="bg-lime-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Deployment</h3>
          <p className="text-sm text-gray-600">CI/CD pipelines and cloud hosting solutions</p>
        </div>
      </div>
    </div>
  );
}