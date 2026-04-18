import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [message, setMessage] = useState("");

  // ✅ WhatsApp
  const handleWhatsApp = () => {
    if (!message.trim()) {
      alert("Please enter a message!");
      return;
    }

    const phone = "917023491946"; // your number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // ✅ Email (save to MongoDB)
  const handleEmail = async () => {
    try {
      if (!message.trim()) {
        alert("Please enter a message!");
        return;
      }

      await axios.post("http://localhost:8080/api/contact", {
        message: message,
      });

      alert("✅ Message sent successfully!");
      setMessage("");

    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message");
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full py-16 px-10 flex justify-center items-center min-h-[50vh]  bg-gradient-to-br from-blue-100 via-purple-100 to-orange-50 overflow-hidden"
    >
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(circle at 70% 30%, #a5b4fc55 0%, #fbc2eb33 60%, transparent 100%)'}} />
      <div className="relative z-10 bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-6 w-full max-w-md text-center animate-contact-pop border border-gray-100">

        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-orange-400 to-pink-500 mb-2 drop-shadow">
          Partner With Us
        </h2>
        <h3 className="text-xl font-semibold text-orange-500 mb-3 animate-pulse">
          Love our menu?
        </h3>

        <p className="text-gray-500 mb-4">
          Send us your message and let's collaborate!
        </p>

        {/* TEXTAREA */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your restaurant..., your vision, or just say hi! 👋"
          className="w-full border-2 border-purple-200 focus:border-orange-400 rounded-lg p-3 mb-4 h-24 transition duration-300 shadow-sm focus:shadow-lg resize-none"
        />

        {/* BUTTONS */}
        <div className="space-y-2">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white py-3 rounded-full font-semibold shadow transition duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            💬 Chat on WhatsApp
          </button>
          {/* Email */}
          <button
            onClick={handleEmail}
            className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white py-3 rounded-full font-semibold shadow transition duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            ✉️ Send Message
          </button>
        </div>
        <p className="text-gray-500 text-xs mt-3">
          Or email us directly at{' '}
          <span className="font-semibold">ajykumar284@gmail.com</span>
        </p>
      </div>
    </div>
  );
}