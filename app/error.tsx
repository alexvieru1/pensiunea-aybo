"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-4xl font-bold text-neutral-800">Oops!</h1>
      <p className="mt-4 text-neutral-600">
        A apărut o eroare neașteptată.
      </p>
      <button
        onClick={reset}
        className="mt-6 rounded-md bg-neutral-900 px-6 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
      >
        Încearcă din nou
      </button>
    </div>
  );
}
