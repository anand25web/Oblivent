export default function FooterMart() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Oblivent Mart</h3>
            <p className="text-green-200">Your trusted marketplace</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-green-200">
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Garden</li>
              <li>Sports</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-green-200">
              <li>Returns</li>
              <li>Shipping Info</li>
              <li>Track Order</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sell</h3>
            <ul className="space-y-2 text-green-200">
              <li>Seller Center</li>
              <li>List Products</li>
              <li>Seller Support</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}