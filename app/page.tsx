"use client";

import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-8 text-center max-w-md">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Let's Go Team</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to the ultimate team collaboration platform. Join us and boost your productivity!
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
