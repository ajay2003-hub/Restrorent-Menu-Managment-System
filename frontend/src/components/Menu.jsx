import { useEffect, useState } from "react";
import axios from "axios";
import MenuCard from "./MenuCard";
import AiModal from "./AiModal";

export default function Menu({ addToCart }) {

  const [menu, setMenu] = useState([]);
  const [originalMenu, setOriginalMenu] = useState([]); // 🔥 store original data
  const [filter, setFilter] = useState("ALL");
  const [category, setCategory] = useState("ALL");
  const [showAI, setShowAI] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/menu")
      .then(res => {
        setMenu(res.data);
        setOriginalMenu(res.data); // 🔥 save original
      });
  }, []);

  // ✅ FILTER LOGIC
  const filteredMenu = menu.filter(item => {

    if (category !== "ALL" && item.category !== category) return false;

    if (filter === "VEG" && !item.veg) return false;
    if (filter === "SPICY" && !item.spicy) return false;
    if (filter === "POPULAR" && !item.popular) return false;

    return true;
  });

  return (
    <div id="menu" className="bg-gradient-to-br from-purple-100 via-blue-50 to-orange-50 py-16 px-10 min-h-screen">
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Menu
      </h2>

      {/* 🔥 FILTERS */}
      <h3 className="text-xl font-semibold mb-4">Filters</h3>
      <div className="flex flex-wrap gap-4 mb-10">
        {/* NORMAL FILTERS */}
        {[
          { name: "ALL", label: "🍽 All" },
          { name: "POPULAR", label: "⭐ Popular" },
          { name: "VEG", label: "🌱 Vegetarian" },
          { name: "SPICY", label: "🌶 Spicy" }
        ].map(f => (
          <button
            key={f.name}
            onClick={() => {
              setFilter(f.name);
              setMenu(originalMenu); // reset AI
            }}
            className={`chip ${filter === f.name ? "active" : ""}`}
          >
            {f.label}
          </button>
        ))}

        {/* 🔥 AI BUTTON (SPECIAL) - visually distinct */}
        <button
          onClick={() => setShowAI(true)}
          className="relative px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg hover:scale-105 hover:from-pink-400 hover:to-indigo-600 transition-all duration-300 flex items-center gap-2 border-2 border-white animate-pulse"
          style={{ boxShadow: '0 0 16px 2px #d946ef, 0 0 32px 4px #818cf8' }}
        >
          <span className="animate-spin-slow text-2xl">✨</span>
          <span>AI Suggestions</span>
        </button>

        {/* 🔥 RESET BUTTON */}
        <button
          onClick={() => {
            setMenu(originalMenu);
            setFilter("ALL");
            setCategory("ALL");
          }}
          className="chip"
        >
          🔄 Reset
        </button>
      </div>

      {/* GRID */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl px-4 animate-fade-in-slow">
          {filteredMenu.map(item => (
            <MenuCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </div>

      {/* 🔥 AI MODAL */}
      {showAI && (
        <AiModal
          close={() => setShowAI(false)}
          setMenu={setMenu}
        />
      )}
    </div>
  );
}
