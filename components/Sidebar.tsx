'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Truck, Users, Package, Settings, LogOut } from 'lucide-react';
import clsx from 'clsx';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Loads', href: '/dashboard/loads', icon: Package },
    { name: 'Drivers', href: '/dashboard/drivers', icon: Truck },
    { name: 'Customers', href: '/dashboard/customers', icon: Users },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex bg-white h-full flex-col w-64 border-r border-gray-200">
            <div className="flex h-16 items-center justify-center border-b border-gray-200 px-4">
                <h1 className="text-xl font-bold text-gray-900">TMS Pro</h1>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                isActive
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                            )}
                        >
                            <item.icon
                                className={clsx(
                                    isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                    'mr-3 h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                            />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
            <div className="border-t border-gray-200 p-4">
                <Link
                    href="/login"
                    className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                    <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                    Sign Out
                </Link>
            </div>
        </div>
    );
}
