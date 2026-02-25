import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: string;
    trendUp?: boolean;
}

export default function StatsCard({ title, value, icon: Icon, trend, trendUp }: StatsCardProps) {
    return (
        <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                    <dl>
                        <dt className="truncate text-sm font-medium text-gray-500">{title}</dt>
                        <dd>
                            <div className="text-lg font-medium text-gray-900">{value}</div>
                        </dd>
                    </dl>
                </div>
            </div>
            {trend && (
                <div className="mt-4">
                    <span className={`text-sm ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
                        {trend}
                    </span>
                    <span className="text-sm text-gray-500"> vs last month</span>
                </div>
            )}
        </div>
    );
}
