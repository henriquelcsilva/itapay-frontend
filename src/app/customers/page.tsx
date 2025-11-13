'use client';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { useCustomers } from '@/hooks/useCustomers';
import { Plus, Loader2, User, Building } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

export default function CustomersPage() {
  const { customers, loading, error, refreshCustomers } = useCustomers();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-dark-900">Clientes</h1>
              <p className="text-sm text-dark-500 mt-1">
                {loading ? 'Carregando...' : `${customers.length} cliente(s)`}
              </p>
            </div>
            <Link href="/customers/new">
              <Button icon={Plus}>
                Novo Cliente
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
            <Button
              variant="outline"
              size="sm"
              onClick={refreshCustomers}
              className="mt-2"
            >
              Tentar Novamente
            </Button>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
          </div>
        ) : customers.length === 0 ? (
          <Card className="p-12 text-center">
            <User className="h-12 w-12 mx-auto text-dark-300 mb-4" />
            <h3 className="text-lg font-medium text-dark-900 mb-2">
              Nenhum cliente cadastrado
            </h3>
            <p className="text-dark-500 mb-6">
              Comece criando seu primeiro cliente
            </p>
            <Link href="/customers/new">
              <Button icon={Plus}>
                Criar Primeiro Cliente
              </Button>
            </Link>
          </Card>
        ) : (
          <Card>
            <div className="divide-y divide-dark-100">
              <div className="px-6 py-3 bg-dark-50 grid grid-cols-12 gap-4 text-xs font-medium text-dark-500 uppercase tracking-wider">
                <div className="col-span-3">Cliente</div>
                <div className="col-span-3">Email</div>
                <div className="col-span-2">Tipo</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Criado em</div>
              </div>
              
              {customers.map((customer) => (
                <Link 
                  key={customer.id}
                  href={`/customers/${customer.id}`}
                  className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-dark-50 transition-colors"
                >
                  <div className="col-span-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                      {customer.type === 'individual' ? (
                        <User className="h-5 w-5 text-primary-600" />
                      ) : (
                        <Building className="h-5 w-5 text-primary-600" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-dark-900 truncate">
                        {customer.type === 'individual' 
                          ? `${customer.first_name} ${customer.last_name}`
                          : customer.business_name
                        }
                      </p>
                      <p className="text-xs text-dark-500 truncate">
                        ID: {customer.id.slice(0, 8)}...
                      </p>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <span className="text-sm text-dark-900">{customer.email}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm text-dark-600">
                      {customer.type === 'individual' ? 'Pessoa Física' : 'Pessoa Jurídica'}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      customer.status === 'active' 
                        ? 'bg-primary-50 text-primary-700'
                        : customer.status === 'pending'
                        ? 'bg-accent-50 text-accent-700'
                        : 'bg-dark-100 text-dark-700'
                    }`}>
                      {customer.status}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm text-dark-600">
                      {formatDate(customer.created_at)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
