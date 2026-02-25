import Link from 'next/link';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    href: '/signup',
    priceMonthly: 49,
    description: 'All the basics for starting a new transportation business.',
    features: [
      'Up to 5 drivers',
      'Unlimited loads',
      'Basic CRM',
      'Standard support',
    ],
  },
  {
    name: 'Pro',
    href: '/signup',
    priceMonthly: 99,
    description: 'Everything in Starter, plus more advanced features.',
    features: [
      'Unlimited drivers',
      'Advanced reporting',
      'API access',
      'Priority support',
      'Custom branding',
    ],
  },
];

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold text-blue-600">TMS Pro</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
            <a href="#pricing" className="text-sm font-semibold leading-6 text-gray-900">Pricing</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Manage your fleet with ease
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  The all-in-one transportation management system designed for modern logistics companies. Track loads, manage drivers, and grow your business.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/signup"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Get started
                  </Link>
                  <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div id="pricing" className="py-24 sm:pt-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Pricing plans for teams of all sizes
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
              Choose the perfect plan for your transportation business. No hidden fees.
            </p>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 hover:ring-blue-600 transition-all"
                >
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 id={tier.name} className="text-lg font-semibold leading-8 text-gray-900">
                      {tier.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.priceMonthly}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                  </p>
                  <Link
                    href={tier.href}
                    aria-describedby={tier.name}
                    className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 bg-blue-600 text-white hover:bg-blue-500 shadow-sm-light"
                  >
                    Subscribe
                  </Link>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
