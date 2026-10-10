"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function login() {

    
    if (username === "RAGHAV" && password === "BALAJI") {

      // சரியாக இருந்தால் அடுத்த page-க்கு செல்லும்
      router.push("/dashboard");

    } else {

      
      setMessage("Invalid Username or Password!");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">

      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          LOGIN
        </h1>

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Username
        </label>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 w-full rounded-lg border border-gray-300 bg-white p-3 text-black placeholder:text-gray-500 outline-none focus:border-blue-5003"
        />

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border border-gray-300 bg-white p-3 text-black placeholder:text-gray-500 outline-none focus:border-blue-500"
        />

        <button
          type="button"
          onClick={login}
          className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
        >
          SUBMIT
        </button>

        
        {message !== "" && (
          <p className="mt-4 text-center font-medium text-red-600">
            {message}
          </p>
        )}

      </div>
    </div>
  );
}