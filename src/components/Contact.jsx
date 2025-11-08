import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! We will get back to you shortly.');
    (e.target).reset();
  }

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build the future</h2>
          <p className="mt-3 text-white/70">Tell us about your goals. We’ll reach out within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required name="name" placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
          <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
          <input name="company" placeholder="Company (optional)" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 sm:col-span-2" />
          <textarea required name="message" placeholder="Tell us about your project" rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 sm:col-span-2" />
          <div className="flex items-center justify-between sm:col-span-2 mt-2">
            <p className="text-sm text-emerald-400">{status}</p>
            <button className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95 transition">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
