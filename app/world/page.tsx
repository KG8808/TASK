"use client";

import { useRouter } from "next/navigation";

export default function WorldPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/60 px-6 py-5 backdrop-blur-lg md:px-12">

        <h1 className="text-xl font-black tracking-widest text-blue-400">
          RAGHAV<span className="text-white">.</span>
        </h1>

        <div className="flex gap-5 text-xs text-gray-300 md:gap-8 md:text-sm">
          <a href="#about" className="transition hover:text-blue-400">
            About
          </a>

          <a href="#skills" className="transition hover:text-blue-400">
            Skills
          </a>

          <a href="#goals" className="transition hover:text-blue-400">
            Goals
          </a>

          <a href="#contact" className="transition hover:text-blue-400">
            Contact
          </a>
        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center px-5 text-center">

        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px] md:h-[500px] md:w-[500px]" />

        {/* Hero content */}
        <div className="relative z-10">

          <p className="animate-pulse text-xs font-bold tracking-[0.5em] text-blue-400 md:text-sm">
            WELCOME TO MY UNIVERSE
          </p>

          <h1 className="mt-8 bg-gradient-to-b from-white via-blue-200 to-blue-600 bg-clip-text text-6xl font-black tracking-widest text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.5)] sm:text-8xl md:text-9xl">
            RAGHAV
          </h1>

          <div className="mx-auto mt-8 h-[2px] w-40 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-gray-400 md:text-lg">
            Dream Big. Think Different. Build Something Extraordinary.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#about"
              className="rounded border border-blue-500 bg-blue-600/20 px-7 py-3 text-sm font-bold transition hover:bg-blue-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              EXPLORE MY WORLD
            </a>

            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="rounded border border-white/20 px-7 py-3 text-sm font-bold text-gray-300 transition hover:border-white hover:text-white"
            >
              BACK TO DASHBOARD
            </button>

          </div>

        </div>

        {/* Bottom scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-10 animate-bounce text-sm tracking-widest text-blue-400"
        >
          SCROLL TO EXPLORE ↓
        </a>

      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="scroll-mt-24 px-6 py-24 md:px-16"
      >

        <p className="text-sm font-bold tracking-[0.4em] text-blue-400">
          01 / ABOUT ME
        </p>

        <h2 className="mt-5 text-4xl font-black md:text-6xl">
          The Person Behind
          <span className="block text-blue-400">The Vision.</span>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-blue-500/50">

            <h3 className="text-2xl font-bold">
              Who Am I?
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              I am Raghav. I believe in continuous learning,
              creative thinking, and building meaningful things.
              My journey is about transforming ideas into reality
              through technology, discipline, and determination.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-purple-500/50">

            <h3 className="text-2xl font-bold">
              My Philosophy
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Think beyond limits. Learn from every challenge.
              Focus on progress instead of perfection.
              Every great achievement starts with the courage
              to begin.
            </p>

          </div>

        </div>

      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="scroll-mt-24 bg-white/[0.02] px-6 py-24 md:px-16"
      >

        <p className="text-sm font-bold tracking-[0.4em] text-blue-400">
          02 / MY SKILLS
        </p>

        <h2 className="mt-5 text-4xl font-black md:text-6xl">
          Building With <span className="text-blue-400">Technology.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-gray-400">
          Exploring technologies and developing practical skills
          to create modern digital experiences.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {[
            {
              name: "Python",
              description: "Programming and automation",
              number: "01",
            },
            {
              name: "JavaScript",
              description: "Interactive web experiences",
              number: "02",
            },
            {
              name: "React & Next.js",
              description: "Modern frontend development",
              number: "03",
            },
            {
              name: "Tailwind CSS",
              description: "Responsive user interfaces",
              number: "04",
            },
            {
              name: "SQL",
              description: "Database fundamentals",
              number: "05",
            },
            {
              name: "AWS & DevOps",
              description: "Cloud and deployment learning",
              number: "06",
            },
          ].map((skill) => (
            <div
              key={skill.number}
              className="group rounded-xl border border-white/10 bg-[#080d1a] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-[0_10px_40px_rgba(37,99,235,0.12)]"
            >

              <p className="text-sm text-blue-400">
                {skill.number}
              </p>

              <h3 className="mt-5 text-xl font-bold transition group-hover:text-blue-400">
                {skill.name}
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                {skill.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* GOALS SECTION */}
      <section
        id="goals"
        className="scroll-mt-24 px-6 py-24 md:px-16"
      >

        <p className="text-sm font-bold tracking-[0.4em] text-blue-400">
          03 / MY GOALS
        </p>

        <h2 className="mt-5 text-4xl font-black md:text-6xl">
          The Future Is <span className="text-blue-400">Built.</span>
        </h2>

        <div className="mt-12 space-y-5">

          {[
            {
              number: "01",
              title: "Master Development",
              text: "Build practical projects and strengthen programming fundamentals.",
            },
            {
              number: "02",
              title: "Explore Cloud Technology",
              text: "Learn cloud infrastructure, deployment, and DevOps practices.",
            },
            {
              number: "03",
              title: "Create Real-World Projects",
              text: "Turn ideas into useful applications with thoughtful design.",
            },
          ].map((goal) => (
            <div
              key={goal.number}
              className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 transition hover:border-blue-500/50 sm:flex-row sm:items-center md:p-8"
            >

              <span className="text-3xl font-black text-blue-500/70">
                {goal.number}
              </span>

              <div>
                <h3 className="text-xl font-bold">
                  {goal.title}
                </h3>

                <p className="mt-2 leading-7 text-gray-400">
                  {goal.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24 px-6 py-24 text-center md:px-16"
      >

        <p className="text-sm font-bold tracking-[0.4em] text-blue-400">
          04 / CONTACT
        </p>

        <h2 className="mt-6 text-4xl font-black md:text-6xl">
          Let&apos;s Build <span className="text-blue-400">Something.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400">
          Every journey starts with an idea.
          Every great project starts with a first step.
        </p>

        <a
          href="mailto:hello@example.com"
          className="mt-10 inline-block rounded border border-blue-500 px-8 py-4 font-bold tracking-widest transition hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          GET IN TOUCH
        </a>

        <p className="mt-3 text-xs text-gray-500">
          Replace hello@example.com with your email address.
        </p>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center">

        <h2 className="text-xl font-black tracking-widest">
          RAGHAV<span className="text-blue-400">.</span>
        </h2>

        <p className="mt-3 text-xs tracking-widest text-gray-500">
          DREAM BIG. BUILD BOLD. KEEP GOING.
        </p>

        <p className="mt-5 text-xs text-gray-600">
          © {new Date().getFullYear()} Raghav. All rights reserved.
        </p>

        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="mt-6 text-sm text-blue-400 transition hover:text-white"
        >
          ← Back to Dashboard
        </button>

      </footer>

    </main>
  );
}