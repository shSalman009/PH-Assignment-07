import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold text-emerald-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="text-gray-500">
          Oops! The URL you're looking for doesn't exist.
        </p>
      </div>

      <Link href="/" className="btn bg-emerald-900 text-white">
        Return Home
        <GiReturnArrow />
      </Link>
    </main>
  );
}
