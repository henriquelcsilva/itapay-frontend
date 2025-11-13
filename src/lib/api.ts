// ============================================================================
// API CLIENT - Conexão Real com Backend
// ============================================================================

import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://itapay-backend.vercel.app';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para logs
api.interceptors.request.use((config) => {
  console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log(`[API] Response:`, response.data);
    return response;
  },
  (error) => {
    console.error(`[API] Error:`, error.response?.data || error.message);
    throw error;
  }
);

// ============================================================================
// TYPES
// ============================================================================

export interface Customer {
  id: string;
  type: 'individual' | 'business';
  first_name?: string;
  last_name?: string;
  business_name?: string;
  email: string;
  phone: string;
  date_of_birth?: string;
  tax_id: string;
  address: {
    street: string;
    street2?: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  status: string;
  created_at: string;
}

export interface Account {
  id: string;
  customer_id: string;
  type: 'checking' | 'savings';
  status: string;
  balance_available: number;
  balance_current: number;
  balance_hold: number;
  account_number: string;
  routing_number: string;
  currency: string;
  name?: string;
  created_at: string;
}

export interface CreateCustomerInput {
  type: 'individual' | 'business';
  firstName?: string;
  lastName?: string;
  businessName?: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  taxId: string;
  address: {
    street: string;
    street2?: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
}

// ============================================================================
// CUSTOMERS API
// ============================================================================

export const customersAPI = {
  create: async (data: CreateCustomerInput): Promise<Customer> => {
    const response = await api.post('/customers', data);
    return response.data;
  },

  get: async (id: string): Promise<Customer> => {
    const response = await api.get(`/customers/${id}`);
    return response.data;
  },

  list: async (): Promise<Customer[]> => {
    const response = await api.get('/customers');
    return response.data;
  },
};

// ============================================================================
// ACCOUNTS API
// ============================================================================

export const accountsAPI = {
  create: async (customerId: string): Promise<Account> => {
    const response = await api.post('/accounts', {
      customerId,
      type: 'checking',
      currency: 'USD',
    });
    return response.data;
  },

  get: async (id: string): Promise<Account> => {
    const response = await api.get(`/accounts/${id}`);
    return response.data;
  },

  list: async (customerId?: string): Promise<Account[]> => {
    const params = customerId ? { customerId } : {};
    const response = await api.get('/accounts', { params });
    return response.data;
  },

  getBalance: async (id: string) => {
    const response = await api.get(`/accounts/${id}/balance`);
    return response.data;
  },
};

export default api;
