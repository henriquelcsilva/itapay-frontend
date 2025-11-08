'use client';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { mockPayees } from '@/lib/mockData';
import { Building2, CreditCard, Users, Plus, User } from 'lucide-react';
import Link from 'next/link';

export default function PayeesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Tabs */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8">
            <Link 
              href="/"
              className="flex items-center gap-2 px-1 py-4 text-dark-500 hover:text-dark-900 font-medium text-sm"
            >
              <Building2 className="h-4 w-4" />
              Accounts
            </Link>
            <Link 
              href="/cards"
              className="flex items-center gap-2 px-1 py-4 text-dark-500 hover:text-dark-900 font-medium text-sm"
            >
              <CreditCard className="h-4 w-4" />
              Cards
            </Link>
            <button className="flex items-center gap-2 px-1 py-4 border-b-2 border-dark-900 font-medium text-sm">
              <Users className="h-4 w-4" />
              Payees
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-dark-900">Payees</h1>
          <Button variant="primary" size="sm" icon={Plus}>
            New Payee
          </Button>
        </div>

        {/* Payees Table */}
        <Card>
          <div className="divide-y divide-dark-100">
            <div className="px-6 py-3 bg-dark-50 grid grid-cols-12 gap-4 text-xs font-medium text-dark-500 uppercase tracking-wider">
              <div className="col-span-2">Name</div>
              <div className="col-span-3">Bank</div>
              <div className="col-span-2">Routing #</div>
              <div className="col-span-2">Account #</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-1"></div>
            </div>
            
            {mockPayees.map((payee) => (
              <div key={payee.id} className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-dark-50 transition-colors">
                <div className="col-span-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-100 text-sm font-medium text-dark-700">
                    {payee.initials}
                  </div>
                  <span className="text-sm font-medium text-dark-900">{payee.name}</span>
                </div>
                <div className="col-span-3">
                  <span className="text-sm text-dark-900">{payee.bank}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm font-mono text-dark-900">{payee.routingNumber}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm font-mono text-dark-900">{payee.accountNumber}</span>
                </div>
                <div className="col-span-2 flex items-center gap-2 text-sm text-dark-900">
                  <User className="h-3 w-3" />
                  {payee.type}
                </div>
                <div className="col-span-1 text-right">
                  <button className="text-dark-400 hover:text-dark-600">
                    •••
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
