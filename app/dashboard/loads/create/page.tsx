'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CreateLoadPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would submit to API
        router.push('/dashboard/loads');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-4">
                <Link href="/dashboard/loads" className="text-gray-500 hover:text-gray-700">
                    <ArrowLeft className="h-6 w-6" />
                </Link>
                <h1 className="text-2xl font-semibold text-gray-900">Create New Load</h1>
            </div>

            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="customer" className="block text-sm font-medium text-gray-700">
                                Customer
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="customer"
                                    id="customer"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                                    placeholder="e.g. Acme Corp"
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="rate" className="block text-sm font-medium text-gray-700">
                                Rate ($)
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="rate"
                                    id="rate"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                                    placeholder="0.00"
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
                                Origin
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="origin"
                                    id="origin"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                                    placeholder="City, State"
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                                Destination
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="destination"
                                    id="destination"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                                    placeholder="City, State"
                                    required
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">
                                Pickup Date
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    name="pickupDate"
                                    id="pickupDate"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">
                                Delivery Date
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    name="deliveryDate"
                                    id="deliveryDate"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Link
                            href="/dashboard/loads"
                            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Save Load
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
