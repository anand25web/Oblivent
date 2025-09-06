export default function AgencyPlatform() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Agency Platform</h1>
      <p className="text-lg text-gray-600 mb-8">
        Build comprehensive digital agency platforms with client management, project tracking, and service delivery.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-cyan-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Client Management</h3>
          <p className="text-sm text-gray-600">CRM tools for client relationships and communication</p>
        </div>
        <div className="bg-pink-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Project Tracking</h3>
          <p className="text-sm text-gray-600">Timeline management and milestone tracking</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Team Collaboration</h3>
          <p className="text-sm text-gray-600">Task assignment and team communication tools</p>
        </div>
      </div>
    </div>
  );
}