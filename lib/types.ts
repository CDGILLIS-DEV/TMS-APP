export type UserRole = 'SUPER_ADMIN' | 'COMPANY_ADMIN' | 'DRIVER';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    companyId?: string; // Null for Super Admin
}

export interface Company {
    id: string;
    name: string;
    logoUrl?: string; // Optional URL for company logo
    subscriptionStatus: 'ACTIVE' | 'INACTIVE' | 'PAST_DUE';
    createdAt: string;
}

export interface Load {
    id: string;
    companyId: string;
    customerName: string;
    origin: string;
    destination: string;
    status: 'PENDING' | 'ASSIGNED' | 'IN_TRANSIT' | 'DELIVERED';
    driverId?: string;
    rate: number;
    pickupDate: string;
    deliveryDate: string;
}

export interface Customer {
    id: string;
    companyId: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    totalLoads: number;
}
