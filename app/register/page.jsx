"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "../api/Auth";
import { Eye, EyeSlash } from "../Helpers/icons";
import { getPasswordStrength } from "../Helpers/getPasswordStrength";
import Background from "../Components/Background";
import { toast, ToastContainer } from "react-toastify";
import { toastOptions } from "../Helpers/toast";
import ThemeButton from "../Components/ThemeButton";

const RegisterPage = () => {
  const router = useRouter();

  // Input data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await register(name, email, password);

      if (res.success) {
        setSuccess(true);
        toast.success(
          "Registration successful! Redirecting to login...",
          toastOptions(),
        );
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        toast.error(
          "Registration failed. Please try again later",
          toastOptions(),
        );
      }
    } catch (err) {
      toast.error("Connection error. Please try again later.", toastOptions());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center p-4">
      <Background />
      <ToastContainer />
      <div className="w-full max-w-md space-y-8 z-10 bg-(--neutral)/50  backdrop-blur-sm rounded-md p-8">
        <div className="text-center relative">
          <div className="absolute -top-4 -right-4">
            <ThemeButton />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-(--text-dark)">
            Join archiText
          </h1>
          <p className="mt-2 text-sm text-(--text-dark)/70 font-medium">
            Create an account to start building architectures
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-(--text-dark) mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border-2 border-(--text-dark)/30 bg-(--primary)/30 p-3 outline-none transition-all focus:border-(--accent) focus:ring-4 focus:ring-(--accent)/30 text-(--text-light)/80"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-(--text-dark) mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border-2 border-(--text-dark)/30 bg-(--primary)/30 p-3 outline-none transition-all focus:border-(--accent) focus:ring-4 focus:ring-(--accent)/30 text-(--text-light)/80"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-(--text-dark) mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border-2 border-(--text-dark)/30 bg-(--primary)/30 p-3 pr-11 outline-none transition-all focus:border-(--accent) focus:ring-4 focus:ring-(--accent)/30 text-(--text-light)/80"
                  placeholder="password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-dark)/50 hover:text-(--text-dark) transition-colors cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            {password !== "" && (
              <div>
                Password Strength:{" "}
                <span
                  style={{ color: getPasswordStrength(password).color }}
                  className={`font-bold`}
                >
                  {getPasswordStrength(password).message}
                </span>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading || success}
              className="group relative flex w-full justify-center rounded-md bg-(--accent) py-3 px-4 text-sm font-bold text-(--text-light) transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-(--text-dark)/60 font-medium">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-(--secondary) hover:underline transition-all"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
