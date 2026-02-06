import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      setStatus("success");
      setEmail("");
    } catch (e) {
      console.error(e);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="container-xl py-16 md:py-24">
      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-12">
        Jason Conroy
      </h1>

      {/* Hero Image */}
      <div className="relative w-full max-w-2xl mx-auto aspect-[16/10] mb-16">
        <Image
          src="/hero.png"
          alt="The journey begins"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Email Signup */}
      <div className="max-w-md mx-auto text-center">
        <p className="text-gray-600 mb-4">
          Get notified when I post something new.
        </p>

        {status === "success" ? (
          <p className="text-green-600 font-medium">Thanks! You're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === "loading"}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition disabled:bg-gray-100"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-primary px-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
            {status === "error" && (
              <p className="absolute -bottom-6 left-0 text-red-500 text-xs">{errorMessage}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
