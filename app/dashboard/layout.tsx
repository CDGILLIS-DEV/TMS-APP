import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="flex h-16 items-center justify-between bg-white border-b border-gray-200 px-6">
                    <h2 className="text-lg font-medium text-gray-900">Company Dashboard</h2>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">FastLane Transport</span>
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                            JD
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
