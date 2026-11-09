import Image from 'next/image';
import { sitePath } from '@/lib/site-path';
import { Footer, Header, PageIntro } from '@/components/site-shell';

const volunteerInstructors = [
  'Oliver Wang',
  'Shaan Nainani',
  'Yibin Cai',
  'Rohan Banerji',
  'Lucas Ding',
  'Mihir Pulhabhottla',
  'Pari Patel',
  'Emi Arakawa',
  'Aiden Liu',
];

export default function People() {
  return (
    <main>
      <Header />
      <PageIntro eyebrow="The people" title="Students teaching students.">
        <p>
          Curious Engineers is led by young people who know how powerful one
          hands-on project can be. We volunteer our time to pass that spark
          forward.
        </p>
      </PageIntro>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 md:grid-cols-2 md:px-10">
        <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] border-2 border-black shadow-[8px_8px_0_#171717]">
          <Image
            src={sitePath('/photos/king-2.webp')}
            alt="Rishi Shah guiding a student through a classroom engineering activity"
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover"
          />
        </div>
        <article className="flex flex-col justify-center rounded-[2rem] bg-red-600 p-8 text-white md:p-12">
          <p className="text-xs font-black uppercase tracking-[.18em] text-red-100">
            Founder
          </p>
          <h2 className="mt-3 text-4xl font-black">Rishi Shah</h2>
          <p className="mt-6 text-lg leading-relaxed text-red-50">
            Rishi founded Curious Engineers to make STEM education more
            accessible and engaging through hands-on lessons. His own interest
            in engineering began with building kits and grew into robotics,
            programming, and mechanical design.
          </p>
        </article>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[.2em] text-red-600">
            Leadership
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">
            The team behind the workshops.
          </h2>
        </div>
        <article className="rounded-[2rem] border-2 border-black bg-white p-8 shadow-[8px_8px_0_#171717] md:p-10">
          <p className="text-xs font-black uppercase tracking-[.18em] text-red-600">
            Co-Founder &amp; Vice President
          </p>
          <h3 className="mt-3 text-3xl font-black">Avi Patel</h3>
        </article>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[.2em] text-red-600">
            Our volunteers
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">
            Volunteer instructors.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {volunteerInstructors.map((name) => (
            <article
              key={name}
              className="rounded-[1.5rem] border-2 border-black bg-white p-6 shadow-[5px_5px_0_#171717]"
            >
              <h3 className="text-xl font-black">{name}</h3>
              <p className="mt-2 text-sm font-bold text-zinc-600">
                Volunteer Instructor
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <div className="rounded-[2rem] border-2 border-black bg-white p-8 shadow-[8px_8px_0_#171717] md:p-12">
          <p className="text-xs font-black uppercase tracking-[.2em] text-red-600">
            Volunteer with us
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight">
            There is a place for every kind of helper.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-600">
            Assist with workshops, help develop activities, or support design,
            social media, and coordination. It is a meaningful way to earn
            service hours, build leadership, and inspire the next generation.
          </p>
          <a
            href="mailto:curiousengineerssd@gmail.com?subject=I%20want%20to%20volunteer"
            className="mt-7 inline-block rounded-full bg-red-600 px-6 py-4 font-extrabold text-white"
          >
            Become a volunteer
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
