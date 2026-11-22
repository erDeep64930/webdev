
import  { useState } from "react";

import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const TwoWayBinding = () => {

  // 1. States
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 2. Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      isLogin ? "Login Data:" : "Signup Data:",
      formData
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#090919] via-[#17113b] to-[#30115c] p-5 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-50 top-10 left-10" />

      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-40 bottom-10 right-10" />

      {/* Glass Card */}
      <div className="relative w-full max-w-md p-8 md:p-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl shadow-black/30">

        {/* Heading */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-white">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h1>

          <p className="text-gray-300 mt-2 text-sm">
            {isLogin
              ? "Sign in to continue your journey"
              : "Join us and get started today"}
          </p>

        </div>

        {/* Toggle */}
        <div className="flex p-1 bg-black/20 rounded-xl mb-8">

          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-3 rounded-lg text-sm font-semibold transition-all ${
              isLogin
                ? "bg-white text-purple-700 shadow-lg"
                : "text-white"
            }`}
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-3 rounded-lg text-sm font-semibold transition-all ${
              !isLogin
                ? "bg-white text-purple-700 shadow-lg"
                : "text-white"
            }`}
          >
            Sign Up
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          {!isLogin && (
            <div className="relative">

              <User
                className="absolute left-4 top-4 text-gray-300"
                size={19}
              />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full py-3.5 pl-12 pr-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition"
              />

            </div>
          )}

          {/* Email */}
          <div className="relative">

            <Mail
              className="absolute left-4 top-4 text-gray-300"
              size={19}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-3.5 pl-12 pr-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition"
            />

          </div>

          {/* Password */}
          <div className="relative">

            <Lock
              className="absolute left-4 top-4 text-gray-300"
              size={19}
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full py-3.5 pl-12 pr-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-300"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>

          </div>

          {/* Forgot Password */}
          {isLogin && (
            <div className="text-right">

              <a
                href="#forgot-password"
                className="text-sm text-purple-300 hover:text-white"
              >
                Forgot Password?
              </a>

            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-900/30 hover:scale-[1.02] active:scale-95 transition-all"
          >
            {isLogin ? "Sign In" : "Create Account"}

            <ArrowRight size={19} />

          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-300 text-sm mt-8">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-300 font-semibold ml-2 hover:text-white transition"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>

        </p>

      </div>

    </div>
  );
};

export default TwoWayBinding;
