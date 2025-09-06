export default function MartPlatform() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Mart Platform</h1>
      <p className="text-lg text-gray-600 mb-8">
        Create powerful e-commerce marketplaces with product management, payment processing, and order fulfillment.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Product Catalog</h3>
          <p className="text-sm text-gray-600">Manage inventory, categories, and pricing</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Payment Gateway</h3>
          <p className="text-sm text-gray-600">Secure payment processing and transactions</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Order Management</h3>
          <p className="text-sm text-gray-600">Track orders, shipping, and customer service</p>
        </div>
      </div>
    </div>
  );
}