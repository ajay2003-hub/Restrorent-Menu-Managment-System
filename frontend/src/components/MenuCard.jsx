export default function MenuCard({ item, addToCart }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl opacity-0 animate-fade-in w-full max-w-xs mx-auto"
    >
      <img
        src={item.image}
        className="h-48 w-full object-cover transition duration-500 hover:scale-105"
        alt={item.name}
      />
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {item.popular && <span className="badge-yellow">⭐ POPULAR</span>}
          {item.veg && <span className="badge-green">🌱 VEG</span>}
          {item.spicy && <span className="badge-red">🌶 SPICY</span>}
        </div>
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">{item.name}</h3>
          <span className="text-orange-500 font-bold">₹{item.price}</span>
        </div>
        <p className="text-gray-500 text-sm mt-2 min-h-[40px]">{item.description}</p>
        <button
          onClick={() => addToCart(item)}
          className="mt-4 w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-2 rounded-full shadow transition duration-300 transform hover:-translate-y-1"
        >
          Add to My Dishes
        </button>
      </div>
    </div>
  );
}