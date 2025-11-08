'use client';

import { Button } from '@/components/Button';
import { Card, CardContent } from '@/components/Card';
import { mockCards } from '@/lib/mockData';
import { Building2, CreditCard, Users, Plus } from 'lucide-react';
import Link from 'next/link';

export default function CardsPage() {
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
            <button className="flex items-center gap-2 px-1 py-4 border-b-2 border-dark-900 font-medium text-sm">
              <CreditCard className="h-4 w-4" />
              Cards
            </button>
            <Link 
              href="/payees"
              className="flex items-center gap-2 px-1 py-4 text-dark-500 hover:text-dark-900 font-medium text-sm"
            >
              <Users className="h-4 w-4" />
              Payees
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-dark-900">Cards</h1>
          <Button variant="primary" size="sm" icon={Plus}>
            New Card
          </Button>
        </div>

        {/* Cards Table */}
        <Card>
          <div className="divide-y divide-dark-100">
            <div className="px-6 py-3 bg-dark-50 grid grid-cols-12 gap-4 text-xs font-medium text-dark-500 uppercase tracking-wider">
              <div className="col-span-3">Card Details</div>
              <div className="col-span-2">Card Holder</div>
              <div className="col-span-2">Account</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-2">Exp. Date</div>
              <div className="col-span-1">Status</div>
            </div>
            
            {mockCards.map((card) => (
              <div key={card.id} className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-dark-50 transition-colors">
                <div className="col-span-3 flex items-center gap-3">
                  <div className="flex h-10 w-14 items-center justify-center rounded bg-blue-600">
                    <span className="text-xs font-bold text-white">VISA</span>
                  </div>
                  <span className="text-sm font-medium text-dark-900">
                    Debit ••{card.number}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm text-dark-900">{card.holder}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm text-dark-900">Checking • 1257</span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm text-dark-900">{card.type}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm text-dark-900">{card.expiryDate}</span>
                </div>
                <div className="col-span-1">
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700">
                    {card.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
