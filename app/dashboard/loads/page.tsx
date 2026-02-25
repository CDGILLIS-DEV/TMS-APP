import Link from 'next/link';
import { mockLoads } from '@/lib/mock-db';
import { Plus } from 'lucide-react';

export default function LoadsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">Loads</h1>
                <Link
                    href="/dashboard/loads/create"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    New Load
                </Link>
            </div>

            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origin</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mockLoads.map((load) => (
                            <tr key={load.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{load.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{load.customerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{load.origin}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{load.destination}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${load.status === 'DELIVERED' ? 'bg-green-100 text-green-800' :
                                            load.status === 'IN_TRANSIT' ? 'bg-blue-100 text-blue-800' :
                                                'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {load.status.replace('_', ' ')}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${load.rate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
