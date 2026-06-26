import Input from "./UI/Input";
import { H2 } from "./UI/Header";
import Section from "./UI/Section";

import { useState } from "react";

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
                className="w-full resize-none px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 text-slate-900 bg-slate-100 px-4 py-3 rounded-xl"
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
              className="w-full rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:underline focus:outline-none focus:ring-4 focus:ring-blue-400/30 hover:cursor-pointer"
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
