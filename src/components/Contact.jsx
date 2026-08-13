import Input from "./UI/Input";
import { H2 } from "./UI/Header";
import Section from "./UI/Section";

import { useState } from "react";
import { trackEvent } from "../utils/analytics";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  // "idle" | "loading" | "success" | "error"

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const result = await response.json();

    if (result.success) {
      trackEvent("Contact Form Submitted", { result: "success" });
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <Section id="contact">
      <H2 className="mb-12">Contact</H2>
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-lg leading-8 text-slate-600">
            Feel free to reach out if you would like to discuss an opportunity,
            ask a question, or find out more about my work.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/MartynRoberts"
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.98] active:bg-slate-100"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/moroberts/"
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.98] active:bg-slate-100"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.69c0-3.84-2.05-5.63-4.78-5.63-2.2 0-3.19 1.21-3.74 2.06V8.25H9.23V21h3.25v-6.31c0-1.66.31-3.27 2.37-3.27 2.03 0 2.05 1.9 2.05 3.38V21H21v-7.31Z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {status !== "success" && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input type="text" id="name" label="Name" placeholder="Your name" />
            <Input
              type="email"
              id="email"
              label="Email"
              placeholder="your.email@example.com"
            />
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-lg font-semibold text-slate-900"
              >
                Message
              </label>
              <textarea
                className="w-full resize-none rounded-lg bg-slate-100 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20"
                id="message"
                name="message"
                rows="5"
                placeholder="How can I help?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:cursor-pointer hover:underline focus:outline-none focus:ring-4 focus:ring-blue-400/30"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>

            {status === "error" && (
              <p className="text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}

        {status === "success" && (
          <div className="inset-0 flex flex-col items-center justify-center bg-white/90 text-center p-6">
            <h2 className="text-xl font-bold text-green-600">
              Message sent successfully
            </h2>

            <p className="mt-2 text-slate-600">
              Thanks — I’ll get back to you soon.
            </p>

            {/* Animated tick */}
            <div className="w-10 h-10 mt-4">
              <svg viewBox="0 0 52 52" className="w-full h-full">
                <circle
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3"
                  className="opacity-0 animate-fade-in"
                />

                <path
                  d="M14 27 L22 35 L38 18"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="50"
                  strokeDashoffset="50"
                  className="animate-draw"
                />
              </svg>
            </div>

            <button
              onClick={() => setStatus("idle")}
              className="mt-6 underline hover:cursor-pointer"
            >
              Send another message
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
