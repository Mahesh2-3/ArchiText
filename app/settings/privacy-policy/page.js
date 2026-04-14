"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "../../Helpers/icons";

const PrivacyPolicyPage = () => {
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
          Settings / Privacy Policy
        </h1>
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl mx-auto px-6 py-8 flex flex-col gap-6">
        <p className="text-(--text-normal)/80 text-sm leading-relaxed">
          <span className="font-semibold">Last updated:</span> April 14, 2026
        </p>

        <div className="flex flex-col gap-6 text-(--text-normal)/70 text-sm leading-relaxed">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-(--text-normal)">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly, such as your name,
              email address, and project data when you create an account and use
              ArchiText. We also collect usage data to improve our services.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-(--text-normal)">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used to provide, maintain, and improve our
              services, including personalizing your experience, processing your
              architecture requests through AI, and communicating with you about
              updates.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-(--text-normal)">
              3. Data Storage & Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              data. Your project data and conversation history are stored
              securely on our servers and encrypted in transit.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-(--text-normal)">
              4. Third-Party Services
            </h2>
            <p>
              We may share limited data with third-party AI providers to process
              your architecture generation requests. We do not sell your
              personal information to third parties.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-(--text-normal)">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal data
              at any time through the Data Controls section in your settings.
              You may also request a copy of all data we hold about you.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-(--text-normal)">
              6. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <span className="text-(--color-last) font-medium">
                support@architext.app
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
