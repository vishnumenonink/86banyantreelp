import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl md:text-5xl font-semibold text-amber-700">
        Thank you! We’ll get in touch soon.
      </h1>

      <Link
        href="/"
        className="mt-8 text-green-900 font-medium hover:underline text-lg"
      >
        Go back to Home
      </Link>
    </div>
  );
}
