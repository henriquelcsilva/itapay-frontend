// ============================================================================
// HOOK - useCustomers
// ============================================================================

'use client';

import { useState, useEffect } from 'react';
import { customersAPI, type Customer } from '@/lib/api';

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await customersAPI.list();
      setCustomers(data);
    } catch (err: any) {
      setError(err.message || 'Erro ao carregar clientes');
      console.error('Error fetching customers:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const refreshCustomers = () => {
    fetchCustomers();
  };

  return {
    customers,
    loading,
    error,
    refreshCustomers,
  };
}
