import React from 'react';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                {children}
            </div>
        </div>
    )
}
