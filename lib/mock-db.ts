import { User, Company, Load, Customer } from './types';

// Initial Mock Data
export const mockCompanies: Company[] = [
    {
        id: 'comp_1',
        name: 'FastLane Transport',
        subscriptionStatus: 'ACTIVE',
        createdAt: '2023-01-15T10:00:00Z',
    },
    {
        id: 'comp_2',
        name: 'Global Logistics',
        subscriptionStatus: 'ACTIVE',
        createdAt: '2023-03-20T14:30:00Z',
    },
];

export const mockUsers: User[] = [
    {
        id: 'user_admin',
        name: 'Super Admin',
        email: 'admin@tms.com',
        role: 'SUPER_ADMIN',
    },
    {
        id: 'user_comp1',
        name: 'John Doe',
        email: 'john@fastlane.com',
        role: 'COMPANY_ADMIN',
        companyId: 'comp_1',
    },
    {
        id: 'driver_1',
        name: 'Mike Smith',
        email: 'mike@fastlane.com',
        role: 'DRIVER',
        companyId: 'comp_1',
    }
];

export const mockLoads: Load[] = [
    {
        id: 'load_1',
        companyId: 'comp_1',
        customerName: 'Acme Corp',
        origin: 'New York, NY',
        destination: 'Los Angeles, CA',
        status: 'IN_TRANSIT',
        rate: 3500,
        pickupDate: '2023-10-01',
        deliveryDate: '2023-10-05',
        driverId: 'driver_1'
    },
    {
        id: 'load_2',
        companyId: 'comp_1',
        customerName: 'TechFlow Inc',
        origin: 'Austin, TX',
        destination: 'Seattle, WA',
        status: 'PENDING',
        rate: 2800,
        pickupDate: '2023-10-10',
        deliveryDate: '2023-10-14',
    },
];

export const mockCustomers: Customer[] = [
    {
        id: 'cust_1',
        companyId: 'comp_1',
        name: 'Acme Corp',
        email: 'contact@acme.com',
        phone: '555-0123',
        address: '123 Industrial Pkwy, NY',
        totalLoads: 15,
    },
    {
        id: 'cust_2',
        companyId: 'comp_1',
        name: 'TechFlow Inc',
        email: 'logistics@techflow.com',
        phone: '555-9876',
        address: '456 Tech Blvd, TX',
        totalLoads: 5,
    },
];

// Helper to simulate network delay
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
