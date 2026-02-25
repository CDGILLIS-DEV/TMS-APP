import { mockCustomers } from '@/lib/mock-db';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function CustomersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Add Customer
                </button>
            </div>

            <div className="overflow-hidden bg-white shadow sm:rounded-md">
                <ul role="list" className="divide-y divide-gray-200">
                    {mockCustomers.map((customer) => (
                        <li key={customer.id}>
                            <div className="block hover:bg-gray-50">
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <p className="truncate text-sm font-medium text-blue-600">{customer.name}</p>
                                        <div className="ml-2 flex flex-shrink-0">
                                            <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                {customer.totalLoads} Loads
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">
                                                <Mail className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                {customer.email}
                                            </p>
                                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                                <Phone className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                {customer.phone}
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                            <MapPin className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                            {customer.address}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
