import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Submission Successful!</h1>
        <p className="text-xl mb-8">Thank you for your message. We&apos;ll get back to you soon.</p>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}