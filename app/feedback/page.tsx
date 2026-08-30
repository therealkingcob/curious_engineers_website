import { Quote } from 'lucide-react';
import { Footer, Header, PageIntro } from '@/components/site-shell';

const testimonial = `Rishi's and Avi's visits to my 4th grade classroom have been so valuable! The topics he presents are engaging and adapted to my students’ level of understanding, and he always comes with hands-on activities that allow the students to experience, first-hand, what he is sharing with them. The fact that he is a fellow PUSD student is so exciting for the kids and inspiring—they look forward to going to high school and doing some of the very same things he is!`;

export default function Feedback() {
  return (
    <main>
      <Header />
      <PageIntro eyebrow="Teacher feedback" title="What classrooms are saying.">
        <p>Hear from the educators who invite Curious Engineers into their classrooms—and see the excitement our student-led, hands-on lessons create.</p>
      </PageIntro>
      <section className="mx-auto max-w-5xl px-5 pb-20 md:px-10">
        <article className="relative overflow-hidden rounded-[2rem] border-2 border-black bg-white p-8 shadow-[9px_9px_0_#e21b2d] md:p-12">
          <Quote className="h-12 w-12 text-red-600" aria-hidden="true" />
          <blockquote className="mt-8 text-2xl font-bold leading-relaxed tracking-tight md:text-3xl">“{testimonial}”</blockquote>
          <div className="mt-10 border-t-2 border-black pt-6">
            <p className="font-black">4th Grade Teacher</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-[.15em] text-red-600">Poway Unified School District</p>
          </div>
        </article>
      </section>
      <section className="mx-auto max-w-4xl px-5 pb-24 text-center">
        <h2 className="text-3xl font-black">Help us make the next lesson even better.</h2>
        <a href="mailto:curiousengineerssd@gmail.com?subject=Teacher%20feedback" className="mt-6 inline-block rounded-full bg-red-600 px-6 py-4 font-extrabold text-white">Share teacher feedback</a>
      </section>
      <Footer />
    </main>
  );
}
