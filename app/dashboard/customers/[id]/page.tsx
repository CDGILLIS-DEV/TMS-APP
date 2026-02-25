import { mockCustomers, mockLoads } from '@/lib/mock-db';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CustomerDetailsPage({ params }: { params: { id: string } }) {
    // In a real app we'd fetch based on params.id
    // For now, just grab the first one or find by id if we match the mock pattern
    const customer = mockCustomers.find(c => c.id === params.id) || mockCustomers[0];
    const customerLoads = mockLoads.filter(l => l.customerName === customer.name);

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-4">
                <Link href="/dashboard/customers" className="text-gray-500 hover:text-gray-700">
                    <ArrowLeft className="h-6 w-6" />
                </Link>
                <h1 className="text-2xl font-semibold text-gray-900">{customer.name}</h1>
            </div>

            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Customer Information</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 flex items-center">
                                <Mail className="mr-2 h-4 w-4 text-gray-400" />
                                {customer.email}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                            <dd className="mt-1 text-sm text-gray-900 flex items-center">
                                <Phone className="mr-2 h-4 w-4 text-gray-400" />
                                {customer.phone}
                            </dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-sm text-gray-900 flex items-center">
                                <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                                {customer.address}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Load History</h3>
                </div>
                <div className="border-t border-gray-200">
                    {customerLoads.length > 0 ? (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origin</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {customerLoads.map((load) => (
                                    <tr key={load.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{load.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{load.origin}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{load.destination}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${load.status === 'DELIVERED' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                                }`}>
                                                {load.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{load.pickupDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="p-6 text-center text-sm text-gray-500">No loads found for this customer.</div>
                    )}
                </div>
            </div>
        </div>
    );
}
