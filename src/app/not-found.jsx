'use client';
import { HomeIcon, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-10 text-center">
      <span className="pointer-events-none absolute left-[43%] top-[26%] z-0 text-[120px] text-slate-200">
        404
      </span>

      <div className="relative z-10 flex max-w-lg flex-col items-center gap-5">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 ">
          Oops! Page not found.
        </h1>

        <p className="max-w-md text-base leading-relaxed text-slate-500">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable. Don&apos;t worry, our products are still here!
        </p>

        <div className="mt-2 flex gap-3 ">
          <Link
            href="/"
            className="inline-flex  items-center justify-center gap-2 rounded-full border-2 border-blue-600 bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
          >
            <HomeIcon />
            Back to Homepage
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:opacity-90 active:translate-y-0"
          >
            <Search />
            Browse Products
          </Link>
        </div>
        <p className="text-sm text-slate-400">
          Need help?
          <Link href="/" className="font-semibold text-blue-600 hover:underline">
            Contact Support
          </Link>
        </p>
      </div>
    </main>
  );
}
