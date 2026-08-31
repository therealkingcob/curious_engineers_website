import Image from 'next/image';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { Footer, Header } from '@/components/site-shell';
import { sitePath } from '@/lib/site-path';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf8] text-[#171717]">
      <Header />

      <section className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-5 pb-16 pt-8 md:grid-cols-[1.1fr_.9fr] md:px-10 md:pb-24">
        <div className="relative z-10">
          <div className="mb-7 inline-flex rotate-[-2deg] items-center gap-2 border-2 border-[#171717] bg-white px-4 py-2 text-xs font-black uppercase tracking-[.16em] shadow-[3px_3px_0_#171717]">
            <Sparkles className="h-4 w-4 text-red-600" /> Student-led.
            Curiosity-powered.
          </div>
          <h1 className="max-w-3xl text-[clamp(3.6rem,8.4vw,7.5rem)] font-black leading-[.84] tracking-[-.07em]">
            Big ideas.
            <br />
            <span className="text-red-600">Small hands.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-zinc-700 md:text-xl">
            We bring free, hands-on engineering lessons into classrooms—turning
            gears, levers, and simple machines into unforgettable “aha!”
            moments.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={sitePath('/contact')}
              className="group inline-flex items-center gap-3 rounded-full bg-[#171717] px-6 py-4 font-extrabold text-white transition hover:bg-red-600"
            >
              Bring us to your school{' '}
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:curiousengineerssd@gmail.com"
              className="inline-flex items-center gap-3 rounded-full border-2 border-[#171717] bg-white px-6 py-4 font-extrabold"
            >
              <Mail className="h-5 w-5 text-red-600" /> Email us
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative aspect-[4/5] rotate-[2deg] overflow-hidden rounded-[2rem] border-2 border-[#171717] bg-[#f2eee5] shadow-[10px_10px_0_#e21b2d]">
            <Image
              src={sitePath('/photos/king-3.webp')}
              alt="Curious Engineers volunteers helping elementary students build a hands-on project"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 rotate-[-4deg] border-2 border-[#171717] bg-white px-5 py-4 shadow-[4px_4px_0_#171717]">
            <span className="block text-3xl font-black text-red-600">
              30 min
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">
              to spark a new interest
            </span>
          </div>
        </div>
      </section>
      <section className="bg-[#171717] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[.8fr_1.2fr] md:px-10">
          <p className="text-xs font-black uppercase tracking-[.2em] text-red-400">
            Why we show up
          </p>
          <div>
            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Engineering should feel possible.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
              A gear turning another gear. A lever lifting more than expected. A
              student realizing they can change how something works. We make
              complex ideas tangible so curiosity has somewhere to go.
            </p>
            <a
              href={sitePath('/engineering')}
              className="mt-8 inline-flex items-center gap-2 font-extrabold text-red-400"
            >
              Explore our lessons <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Hands-on', 'Students learn by touching, testing, and changing.'],
            [
              'Age-friendly',
              'We explain mechanical ideas at a level young learners can digest.',
            ],
            [
              'Student-led',
              'Young engineers model the excitement of learning by doing.',
            ],
          ].map(([title, text], i) => (
            <article
              key={title}
              className={`rounded-[1.75rem] border-2 border-black p-7 ${i === 1 ? 'bg-red-600 text-white' : 'bg-white'}`}
            >
              <span className="text-sm font-black">0{i + 1}</span>
              <h3 className="mt-12 text-2xl font-black">{title}</h3>
              <p
                className={`mt-3 leading-relaxed ${i === 1 ? 'text-red-50' : 'text-zinc-600'}`}
              >
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
