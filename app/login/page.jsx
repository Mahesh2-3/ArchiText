"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppStore } from "../store/useAppStore";
import { login } from "../api/Auth";
import { toast, ToastContainer } from "react-toastify";
import { toastOptions } from "../Helpers/toast";
import Background from "../Components/Background";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const setSession = useAppStore((state) => state.setSession);
  const setUser = useAppStore((state) => state.setUser);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await login(email, password);

      if (res.success) {
        setUser(res.data);
        toast.success(
          "Login successful! Redirecting to home...",
          toastOptions(),
        );
        setTimeout(() => {
          router.push("/home");
        }, 2000);
      } else {
        toast.error(res.error || "Invalid credentials", toastOptions());
      }
    } catch (err) {
      toast.error("Connection error. Please try again later.", toastOptions());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center  justify-center bg-(--color-main) p-4">
      <Background />
      <ToastContainer />
      <div className="w-full max-w-md space-y-8 z-10  backdrop-blur-sm rounded-2xl border-2 border-(--color-secondary) bg-(--color-main)/50 p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(255,133,187,0.2)] ">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-(--color-last)">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-(--color-normal) font-medium">
            Log in to continue your architecture journey
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-(--color-last) mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border-2 border-(--color-secondary) bg-white/50 p-3 outline-none transition-all focus:border-(--color-normal) focus:ring-4 focus:ring-(--color-secondary)/30 dark:bg-black/20 text-(--text-normal)"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-(--color-last) mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border-2 border-(--color-secondary) bg-white/50 p-3 outline-none transition-all focus:border-(--color-normal) focus:ring-4 focus:ring-(--color-secondary)/30 dark:bg-black/20 text-(--text-normal)"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-xl bg-(--color-last) py-3 px-4 text-sm font-bold text-(--color-main) transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-(--color-normal) font-medium">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-bold text-(--color-last) hover:underline transition-all"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
