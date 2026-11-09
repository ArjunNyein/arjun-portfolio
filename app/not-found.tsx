import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell py-14">
      <p className="eyebrow text-teal">404</p>
      <h1 className="mt-2 text-4xl">Page not found</h1>
      <Link href="/" className="inline-link mt-3">Back to home</Link>
    </section>
  );
}
