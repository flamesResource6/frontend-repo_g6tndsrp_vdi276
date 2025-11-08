import { Code, PenTool, Rocket, Layers } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Brand & UI Design',
    desc: 'Identity systems, design systems, and interfaces tailored for clarity and impact.',
  },
  {
    icon: Code,
    title: 'Web & App Development',
    desc: 'Fast, scalable, and accessible experiences powered by modern stacks and best practices.',
  },
  {
    icon: Layers,
    title: '3D & Interactive',
    desc: 'Immersive Spline scenes, WebGL, and motion that elevate storytelling and engagement.',
  },
  {
    icon: Rocket,
    title: 'Growth & Performance',
    desc: 'Optimization, analytics, and SEO to launch products that convert and scale.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-white/70">Strategy, design, and engineering working as one — built for speed and excellence.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 hover:border-white/20 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-white shadow-lg shadow-fuchsia-500/20">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
