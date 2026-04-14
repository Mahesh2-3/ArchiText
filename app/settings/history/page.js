"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "../../Helpers/icons";

const HistoryPage = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-(--color-main) flex flex-col">
      {/* Header */}
      <div className="w-full px-6 py-5 flex items-center gap-4 border-b border-gray-300 dark:border-gray-700 bg-(--color-secondary)/40">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition cursor-pointer text-(--text-normal)"
        >
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-2xl font-bold text-(--text-normal) tracking-tight">
          Settings / History
        </h1>
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl mx-auto px-6 py-8 flex flex-col gap-6">
        <p className="text-(--text-normal)/60 text-sm">
          Your conversation history will appear here. You can review past
          interactions and manage your records.
        </p>

        {/* Empty state */}
        <div className="flex flex-col items-center justify-center py-16 gap-4 rounded-sm border border-gray-300 dark:border-gray-700 bg-(--color-secondary)/20">
          <span className="text-4xl opacity-30">📜</span>
          <span className="text-(--text-normal)/40 text-sm font-medium">
            No history yet
          </span>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
