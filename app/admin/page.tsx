import { Building2, DollarSign } from 'lucide-react';
import StatsCard from '@/components/StatsCard';

export default function AdminDashboardPage() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-semibold text-gray-900">Super Admin Dashboard</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StatsCard title="Total Companies" value="2" icon={Building2} trend="+1" trendUp={true} />
                <StatsCard title="Total MRR" value="$198" icon={DollarSign} trend="+100%" trendUp={true} />
            </div>

            {/* Quick link to companies for demo purposes */}
            <div className="mt-8">
                <a href="/admin/companies" className="text-blue-600 hover:text-blue-500 font-medium">View All Companies &rarr;</a>
            </div>
        </div>
    );
}
