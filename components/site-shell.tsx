import Link from 'next/link';
import { Menu } from 'lucide-react';

export function Logo() {
  return <Link href="/" className="flex items-center gap-3" aria-label="Curious Engineers home"><span className="grid h-10 w-10 place-items-center rounded-full bg-red-600 text-lg font-black text-white shadow-[3px_3px_0_#171717]">CE</span><span className="text-sm font-black uppercase leading-none tracking-[.18em]">Curious<br/><span className="text-red-600">Engineers</span></span></Link>;
}

export function Header() {
  return <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10"><Logo/><nav className="hidden items-center gap-7 text-sm font-bold md:flex" aria-label="Primary navigation"><Link href="/engineering">What we teach</Link><Link href="/people">People</Link><Link href="/feedback">Teacher feedback</Link></nav><Link href="/contact" className="rounded-full bg-red-600 px-5 py-3 text-sm font-extrabold text-white shadow-[3px_3px_0_#171717] hover:-translate-y-0.5">Get in touch</Link><details className="relative md:hidden"><summary className="ml-2 grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full border-2 border-black bg-white" aria-label="Open menu"><Menu/></summary><nav className="absolute right-0 top-14 z-50 w-56 rounded-2xl border-2 border-black bg-white p-3 font-bold shadow-[5px_5px_0_#e21b2d]"><Link className="block rounded-xl p-3 hover:bg-red-50" href="/engineering">What we teach</Link><Link className="block rounded-xl p-3 hover:bg-red-50" href="/people">People</Link><Link className="block rounded-xl p-3 hover:bg-red-50" href="/feedback">Teacher feedback</Link></nav></details></header>;
}

export function Footer() {
  return <footer className="border-t-2 border-black bg-[#171717] text-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-10"><div><p className="text-2xl font-black">Stay curious.</p><a className="mt-2 block text-red-400 underline decoration-2 underline-offset-4" href="mailto:curiousengineerssd@gmail.com">curiousengineerssd@gmail.com</a></div><div className="flex flex-wrap gap-5 text-sm font-bold"><Link href="/">Home</Link><Link href="/engineering">Engineering</Link><Link href="/people">People</Link><Link href="/feedback">Feedback</Link><Link href="/contact">Contact</Link></div></div></footer>;
}

export function PageIntro({eyebrow,title,children}:{eyebrow:string,title:string,children:React.ReactNode}) {
  return <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 md:px-10 md:pb-20 md:pt-20"><p className="mb-5 text-xs font-black uppercase tracking-[.2em] text-red-600">{eyebrow}</p><h1 className="max-w-5xl text-[clamp(3.2rem,7vw,6.8rem)] font-black leading-[.88] tracking-[-.065em]">{title}</h1><div className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-zinc-600 md:text-xl">{children}</div></section>;
}

export function PhotoPlaceholder({label,className=''}:{label:string,className?:string}) {
  return <div className={`photo-placeholder grid min-h-72 place-items-center rounded-[2rem] border-2 border-black bg-[#f2eee5] p-8 text-center shadow-[7px_7px_0_#e21b2d] ${className}`}><div><span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full border-2 border-dashed border-red-600 text-2xl">⚙</span><p className="font-black uppercase tracking-[.13em]">{label}</p><p className="mt-2 text-sm text-zinc-500">Photo coming soon</p></div></div>;
}
