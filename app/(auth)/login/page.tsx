'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (role: 'admin' | 'company') => {
        // In a real app, this would validate credentials
        if (role === 'admin') {
            router.push('/admin');
        } else {
            router.push('/dashboard');
        }
    };

    return (
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <div className="mb-10 sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                    Sign in to TMS
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{' '}
                    <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                        register your company
                    </Link>
                </p>
            </div>

            <div className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                            placeholder="you@example.com"
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
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        onClick={() => handleLogin('company')}
                    >
                        Sign in
                    </button>
                </div>
            </div>

            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">Demo Quick Login</span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                        onClick={() => handleLogin('admin')}
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                        Super Admin
                    </button>
                    <button
                        onClick={() => handleLogin('company')}
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                        Company Admin
                    </button>
                </div>
            </div>
        </div>
    );
}
