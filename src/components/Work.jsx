export default function Work() {
  const projects = [
    {
      title: 'Nebula Commerce',
      tag: 'Headless eCommerce',
      desc: 'A blazing-fast storefront with immersive product visuals and realtime inventory.',
      image:
        'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Cosmos OS',
      tag: 'Design System',
      desc: 'A cross-platform design system with tokens, components, and motion primitives.',
      image:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Orbital XR',
      tag: '3D Web',
      desc: 'Interactive product configurator with Spline + WebGL and analytics instrumentation.',
      image:
        'https://images.unsplash.com/photo-1473929731466-3fb3b8944f70?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-black via-[#05010f] to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-3 text-white/70 max-w-xl">A look into products and platforms we’ve shaped alongside ambitious teams.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/30 transition">Work with us</a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="text-[11px] uppercase tracking-wider text-white/60">{p.tag}</span>
                <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
