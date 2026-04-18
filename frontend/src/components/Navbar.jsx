export default function Navbar({ setPage, cartCount }) {
  return (
    <div className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50 animate-fade-in-down rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        {/* LOGO */}
        <div className="flex items-center gap-2 select-none">
          <span className="text-2xl animate-bounce-slow bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">🍽</span>
          <span className="text-2xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">The RestroFlow</span>
        </div>
      {/* NAV LINKS */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => {
            setPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="transition text-gray-700 hover:text-orange-500 font-medium px-2 py-1 rounded"
        >
          Home
        </button>
        <button
          onClick={() => {
            setPage("home");
            setTimeout(() => {
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="transition text-gray-700 hover:text-orange-500 font-medium px-2 py-1 rounded"
        >
          Menu
        </button>
        <button
          onClick={() => {
            setPage("home");
            setTimeout(() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="transition text-gray-700 hover:text-orange-500 font-medium px-2 py-1 rounded"
        >
          Contact
        </button>
        <button
          onClick={() => setPage("orders")}
          className="transition text-gray-700 hover:text-orange-500 font-medium px-2 py-1 rounded"
        >
          Orders
        </button>
        {/* CART BUTTON */}
        <button
          onClick={() => setPage("cart")}
          className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-4 py-2 rounded-full shadow transition duration-300 animate-pulse-scale"
        >
          🍽 My Dishes ({cartCount})
        </button>
      </div>
      </div>
    </div>
  );
}