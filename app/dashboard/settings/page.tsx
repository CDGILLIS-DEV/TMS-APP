import { CreditCard, CheckCircle } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-900">Company Settings</h1>

            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Subscription</h3>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p>Manage your billing and subscription plan.</p>
                    </div>
                    <div className="mt-5 border-t border-gray-200 pt-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-900">Current Plan: <span className="text-blue-600 font-bold">Pro</span></p>
                                <p className="text-sm text-gray-500">$99/month</p>
                            </div>
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                <CheckCircle className="mr-1 h-3 w-3" />
                                Active
                            </span>
                        </div>
                        <div className="mt-4">
                            <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Manage Billing
                            </button>
                            <button
                                type="button"
                                className="ml-3 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Upgrade Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Payment Method</h3>
                    <div className="mt-5 border-t border-gray-200 pt-5">
                        <div className="flex items-center">
                            <CreditCard className="h-8 w-8 text-gray-400" />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">Visa ending in 4242</p>
                                <p className="text-sm text-gray-500">Expires 12/2026</p>
                            </div>
                            <button className="ml-auto text-sm font-medium text-blue-600 hover:text-blue-500">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
