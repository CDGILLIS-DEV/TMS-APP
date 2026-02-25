import { mockUsers } from '@/lib/mock-db';

export default function DriversPage() {
    const drivers = mockUsers.filter(u => u.role === 'DRIVER');

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">Drivers</h1>
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Add Driver
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {drivers.map((driver) => (
                    <div key={driver.id} className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400">
                        <div className="flex-shrink-0">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                                <span className="font-medium leading-none text-white">{driver.name.charAt(0)}</span>
                            </span>
                        </div>
                        <div className="min-w-0 flex-1">
                            <a href="#" className="focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="text-sm font-medium text-gray-900">{driver.name}</p>
                                <p className="truncate text-sm text-gray-500">{driver.role}</p>
                            </a>
                        </div>
                    </div>
                ))}
                {/* Add a dummy driver just for visuals if list is empty or small */}
                <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400">
                    <div className="flex-shrink-0">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                            <span className="font-medium leading-none text-white">JD</span>
                        </span>
                    </div>
                    <div className="min-w-0 flex-1">
                        <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">Jane Doe</p>
                            <p className="truncate text-sm text-gray-500">DRIVER</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
