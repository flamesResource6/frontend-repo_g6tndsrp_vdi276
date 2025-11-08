import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0320] to-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              Futuristic Web Experiences
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Astro Digital Solutions
            </h1>
            <p className="mt-4 text-lg text-white/80">
              We craft immersive, high-performance digital products at the edge of design and technology. From 3D interfaces to headless web apps, we build what’s next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-full bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95 transition"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
    </section>
  );
}
