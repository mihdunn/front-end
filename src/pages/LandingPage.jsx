import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col items-center text-gray-800">
      <header className="w-full bg-blue-600 text-white p-4 flex justify-center text-2xl font-semibold">
        Your Mental and Fitness Journey Starts Here
      </header>
      <main className="flex flex-col items-center px-6 py-10 space-y-8">
        <h1 className="text-4xl font-bold text-center max-w-lg">
          Track Your Wellness. Stay Focused. Stay Healthy.
        </h1>
        <p className="text-lg text-center max-w-xl">
          Our app provides you with tools to monitor your physical and mental health daily.
          Keep track of your exercise, diet, hydration, sleep, and emotions to improve your overall wellness.
        </p>
        <div className="flex space-x-4">
          <img src="https://via.placeholder.com/200" alt="App Feature 1" className="rounded-lg shadow-lg" />
          <img src="https://via.placeholder.com/200" alt="App Feature 2" className="rounded-lg shadow-lg" />
          <img src="https://via.placeholder.com/200" alt="App Feature 3" className="rounded-lg shadow-lg" />
        </div>
        <button
          onClick={() => navigate("/register")}
          className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Start Now
        </button>
      </main>
      <footer className="w-full bg-gray-100 py-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Your App Name. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
