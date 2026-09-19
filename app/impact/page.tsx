import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  School,
  Users,
} from 'lucide-react';
import { Footer, Header, PageIntro } from '@/components/site-shell';
import { sitePath } from '@/lib/site-path';

const stats = [
  {
    value: '6',
    label: 'listed volunteers',
    note: 'People named on the current outreach roster.',
    icon: Users,
  },
  {
    value: '23',
    label: 'classroom visits',
    note: 'Visit records currently logged in the outreach sheet.',
    icon: School,
  },
  {
    value: '5',
    label: 'school sites',
    note: 'Distinct schools represented in the current visit log.',
    icon: GraduationCap,
  },
  {
    value: '7',
    label: 'activity formats',
    note: 'Different activities recorded across the visits.',
    icon: BookOpen,
  },
];

export default function Impact() {
  return (
    <main>
      <Header />
      <PageIntro eyebrow="Our impact" title="Small lessons. Big ripples.">
        <p>
          Every hands-on visit gives a young learner a chance to ask a better
          question, try an idea, and see themselves as an engineer.
        </p>
      </PageIntro>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-red-600">
              Impact snapshot
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Curiosity is contagious.
            </h2>
          </div>
          <p className="max-w-md text-sm font-medium leading-relaxed text-zinc-600 md:text-right">
            We measure what the outreach log makes visible: the people who show
            up, the classrooms we visit, and the activities that make
            engineering feel possible.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, note, icon: Icon }, index) => (
            <article
              key={label}
              className={`flex min-h-72 flex-col justify-between rounded-[1.75rem] border-2 border-black p-7 shadow-[5px_5px_0_#171717] ${index === 1 ? 'bg-red-600 text-white' : 'bg-white'}`}
            >
              <Icon className="h-9 w-9" aria-hidden="true" />
              <div>
                <p className="text-6xl font-black tracking-[-.07em]">{value}</p>
                <h3 className="mt-2 text-lg font-black uppercase tracking-[.08em]">
                  {label}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${index === 1 ? 'text-red-50' : 'text-zinc-600'}`}
                >
                  {note}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs font-black uppercase tracking-[.16em] text-zinc-500">
          Figures reflect the current Park Village Engineering outreach log.
        </p>
      </section>

      <section className="bg-[#171717] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-red-400">
              What the numbers mean
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              One spark can travel a long way.
            </h2>
          </div>
          <div>
            <ol className="divide-y divide-white/20 border-y border-white/20">
              {[
                [
                  '01',
                  'A volunteer brings the energy.',
                  'Student leaders turn their own curiosity into a lesson they can share.',
                ],
                [
                  '02',
                  'A classroom gets to experiment.',
                  'Learners touch the materials, test a hunch, and see what changes.',
                ],
                [
                  '03',
                  'A new possibility opens up.',
                  'The next question starts before the workshop is even over.',
                ],
              ].map(([number, title, text]) => (
                <li
                  key={number}
                  className="grid gap-4 py-6 sm:grid-cols-[4rem_1fr]"
                >
                  <span className="text-sm font-black text-red-400">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-zinc-300">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <a
              href={sitePath('/contact')}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-4 font-extrabold text-white hover:bg-red-500"
            >
              Help us reach more students <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
