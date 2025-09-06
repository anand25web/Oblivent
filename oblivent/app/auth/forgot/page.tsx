export default function Forgot() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
          Reset Password
        </button>
      </form>
    </div>
  );
}