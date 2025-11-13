'use client';

import { Button } from '@/components/Button';
import { Card, CardContent } from '@/components/Card';
import { formatCurrency } from '@/lib/utils';
import { useCustomers } from '@/hooks/useCustomers';
import { useAccounts } from '@/hooks/useAccounts';
import { 
  Building2, 
  CreditCard, 
  Users, 
  Plus,
  Loader2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const { customers, loading: loadingCustomers } = useCustomers();
  const { accounts, loading: loadingAccounts } = useAccounts();

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance_available, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-dark-100">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <h1 className="text-2xl font-semibold text-dark-900">Dashboard</h1>
            <p className="text-sm text-dark-500 mt-1">
              Bem-vindo ao ItaPay
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Balance */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-dark-500">Saldo Total</p>
                  <Building2 className="h-5 w-5 text-primary-600" />
                </div>
                {loadingAccounts ? (
                  <Loader2 className="h-6 w-6 animate-spin text-dark-400" />
                ) : (
                  <p className="text-3xl font-bold text-dark-900">
                    {formatCurrency(totalBalance)}
                  </p>
                )}
                <p className="text-xs text-dark-500 mt-2">
                  {accounts.length} conta(s)
                </p>
              </CardContent>
            </Card>

            {/* Total Customers */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-dark-500">Clientes</p>
                  <Users className="h-5 w-5 text-primary-600" />
                </div>
                {loadingCustomers ? (
                  <Loader2 className="h-6 w-6 animate-spin text-dark-400" />
                ) : (
                  <p className="text-3xl font-bold text-dark-900">
                    {customers.length}
                  </p>
                )}
                <p className="text-xs text-dark-500 mt-2">
                  {customers.filter(c => c.status === 'active').length} ativo(s)
                </p>
              </CardContent>
            </Card>

            {/* Accounts */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-dark-500">Contas Ativas</p>
                  <CreditCard className="h-5 w-5 text-primary-600" />
                </div>
                {loadingAccounts ? (
                  <Loader2 className="h-6 w-6 animate-spin text-dark-400" />
                ) : (
                  <p className="text-3xl font-bold text-dark-900">
                    {accounts.filter(a => a.status === 'open').length}
                  </p>
                )}
                <p className="text-xs text-dark-500 mt-2">
                  Total de {accounts.length} contas
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-lg font-semibold text-dark-900 mb-4">Ações Rápidas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/customers/new">
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-3">
                      <Plus className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-dark-900 mb-1">Novo Cliente</h3>
                    <p className="text-sm text-dark-500">Cadastrar novo cliente</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/customers">
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-dark-900 mb-1">Ver Clientes</h3>
                    <p className="text-sm text-dark-500">Lista de todos os clientes</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/accounts">
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-dark-900 mb-1">Contas</h3>
                    <p className="text-sm text-dark-500">Gerenciar contas bancárias</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Recent Customers */}
          {customers.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-dark-900">Clientes Recentes</h2>
                <Link href="/customers">
                  <Button variant="ghost" size="sm" icon={ArrowRight}>
                    Ver Todos
                  </Button>
                </Link>
              </div>
              <Card>
                <div className="divide-y divide-dark-100">
                  {customers.slice(0, 5).map((customer) => (
                    <Link
                      key={customer.id}
                      href={`/customers/${customer.id}`}
                      className="flex items-center justify-between p-4 hover:bg-dark-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                          <Users className="h-5 w-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="font-medium text-dark-900">
                            {customer.type === 'individual' 
                              ? `${customer.first_name} ${customer.last_name}`
                              : customer.business_name
                            }
                          </p>
                          <p className="text-sm text-dark-500">{customer.email}</p>
                        </div>
                      </div>
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        customer.status === 'active' 
                          ? 'bg-primary-50 text-primary-700'
                          : 'bg-accent-50 text-accent-700'
                      }`}>
                        {customer.status}
                      </span>
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Empty State */}
          {!loadingCustomers && customers.length === 0 && (
            <Card className="p-12 text-center">
              <Users className="h-16 w-16 mx-auto text-dark-300 mb-4" />
              <h3 className="text-xl font-semibold text-dark-900 mb-2">
                Comece Criando um Cliente
              </h3>
              <p className="text-dark-500 mb-6 max-w-md mx-auto">
                Você ainda não tem clientes cadastrados. Crie seu primeiro cliente para começar a usar o ItaPay.
              </p>
              <Link href="/customers/new">
                <Button size="lg" icon={Plus}>
                  Criar Primeiro Cliente
                </Button>
              </Link>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
