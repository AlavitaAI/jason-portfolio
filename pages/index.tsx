import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your email service (Buttondown, ConvertKit, etc.)
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
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

        {submitted ? (
          <p className="text-green-600 font-medium">Thanks! You're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition"
            />
            <button type="submit" className="btn btn-primary px-6">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
