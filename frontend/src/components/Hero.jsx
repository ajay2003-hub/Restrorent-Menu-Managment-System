export default function Hero() {
  return (
    <div className="w-full min-h-[80vh] bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500 text-white px-4 md:px-16 py-20 flex flex-col md:flex-row items-center justify-center gap-12 animate-fade-in-down">
      {/* LEFT CONTENT */}
      <div className="max-w-xl w-full flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Welcome to{" "}
          <span className="text-orange-400">The RestroFlow</span>
        </h1>
        <p className="mt-6 text-lg text-gray-200">
          Experience authentic North Indian cuisine with our carefully curated
          menu featuring traditional flavors, aromatic spices, and time-honored
          recipes from the heart of India.
        </p>
        {/* FEATURES */}
        <div className="flex gap-8 mt-8">
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-2xl">⭐</span>
            <div>
              <p className="font-semibold">5-Star</p>
              <p className="text-sm text-gray-300">Dining</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-2xl">🌶</span>
            <div>
              <p className="font-semibold">Authentic</p>
              <p className="text-sm text-gray-300">Spices</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-2xl">👨‍🍳</span>
            <div>
              <p className="font-semibold">Expert</p>
              <p className="text-sm text-gray-300">Chefs</p>
            </div>
          </div>
        </div>
        {/* BUTTON */}
        <button
          onClick={() => {
            document.getElementById("menu")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 m-8 rounded-full shadow-lg animate-pulse-scale"
        >
          View Menu
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-10 md:mt-0 flex justify-center items-center w-full max-w-lg">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="restaurant"
          className="w-full max-w-[450px] rounded-2xl border-4 border-white shadow-xl animate-hero-img-pop"
        />
      </div>

    </div>
  );
}