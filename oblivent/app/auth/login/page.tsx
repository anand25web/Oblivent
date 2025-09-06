export default function Login() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}