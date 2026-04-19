import { useState } from "react";
import axios from "axios";

export default function AiModal({ close, setMenu }) {

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSuggest = async () => {
    if (!query) return alert("Please enter something");

    try {
      setLoading(true);

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/ai/suggest?query=${query}`
      );

      setMenu(res.data); // 🔥 update menu with AI result
      close(); // close modal

    } catch (err) {
      alert("AI failed 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white p-8 rounded-2xl w-[400px] text-center shadow-xl">

        {/* TITLE */}
        <h2 className="text-xl font-bold mb-4">
          ✨ AI Suggestions
        </h2>

        {/* INPUT */}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What are you craving...?"
          className="border p-3 w-full rounded mb-4 outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* SUGGEST BUTTON */}
        <button
          onClick={handleSuggest}
          disabled={loading}
          className="w-full bg-gray-200 py-2 rounded mb-3"
        >
          {loading ? "Thinking..." : "Suggest"}
        </button>

        {/* CLOSE BUTTON */}
        <button
          onClick={close}
          className="w-full bg-orange-500 text-white py-2 rounded"
        >
          Close
        </button>

        {/* HELP TEXT */}
        <p className="text-sm text-gray-500 mt-4">
          Try: "veg spicy", "sweet", "drinks"
        </p>

      </div>
    </div>
  );
}