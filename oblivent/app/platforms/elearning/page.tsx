export default function ElearningPlatform() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">E-Learning Platform</h1>
      <p className="text-lg text-gray-600 mb-8">
        Build comprehensive online education platforms with course management, student tracking, and interactive learning tools.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Course Management</h3>
          <p className="text-sm text-gray-600">Create and manage courses with multimedia content</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Student Progress</h3>
          <p className="text-sm text-gray-600">Track student performance and learning analytics</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Interactive Tools</h3>
          <p className="text-sm text-gray-600">Quizzes, assignments, and discussion forums</p>
        </div>
      </div>
    </div>
  );
}