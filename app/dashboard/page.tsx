import { Package, Truck, Users, DollarSign } from 'lucide-react';
import StatsCard from '@/components/StatsCard';

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StatsCard title="Active Loads" value="12" icon={Package} trend="+2" trendUp={true} />
                <StatsCard title="Total Drivers" value="8" icon={Truck} />
                <StatsCard title="Customers" value="24" icon={Users} trend="+4" trendUp={true} />
                <StatsCard title="Revenue (MTD)" value="$45,231" icon={DollarSign} trend="+12.5%" trendUp={true} />
            </div>

            <div className="rounded-lg bg-white shadow">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Recent Activity</h3>
                </div>
                <div className="border-t border-gray-200">
                    {/* Placeholder for activity list or table */}
                    <div className="p-4 text-sm text-gray-500 text-center">
                        No recent activity to display.
                    </div>
                </div>
            </div>
        </div>
    );
}
