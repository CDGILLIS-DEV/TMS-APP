'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const router = useRouter();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would create a company and user
        // For prototype, we just redirect to dashboard
        router.push('/dashboard');
    };

    return (
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <div className="mb-10 sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                    Start your 14-day free trial
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                        Sign in
                    </Link>
                </p>
            </div>

            <form className="space-y-6" onSubmit={handleSignup}>
                <div>
                    <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                        Company Name
                    </label>
                    <div className="mt-1">
                        <input
                            id="company-name"
                            name="company-name"
                            type="text"
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                            placeholder="Acme Logistics"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Work Email
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                            placeholder="you@company.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Create account
                    </button>
                </div>
            </form>
        </div>
    );
}
