import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-6xl font-bold text-neutral-800">404</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Pagina pe care o cauți nu există.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-neutral-900 px-6 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
      >
        Înapoi acasă
      </Link>
    </div>
  );
}
