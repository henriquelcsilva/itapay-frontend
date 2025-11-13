// ============================================================================
// HOOK - useAccounts
// ============================================================================

'use client';

import { useState, useEffect } from 'react';
import { accountsAPI, type Account } from '@/lib/api';

export function useAccounts(customerId?: string) {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await accountsAPI.list(customerId);
      setAccounts(data);
    } catch (err: any) {
      setError(err.message || 'Erro ao carregar contas');
      console.error('Error fetching accounts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, [customerId]);

  const refreshAccounts = () => {
    fetchAccounts();
  };

  return {
    accounts,
    loading,
    error,
    refreshAccounts,
  };
}
