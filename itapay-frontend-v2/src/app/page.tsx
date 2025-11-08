'use client';

import { Button } from '@/components/Button';
import { Card, CardContent } from '@/components/Card';
import { formatCurrency, formatDate, maskAccountNumber } from '@/lib/utils';
import { mockAccount, mockTransactions, mockCards } from '@/lib/mockData';
import { 
  Building2, 
  CreditCard, 
  Users, 
  Copy, 
  ArrowUpRight, 
  Download,
  Plus 
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar será importada no layout */}
      
      <main className="flex-1 overflow-auto">
        {/* Top Tabs */}
        <div className="bg-white border-b border-dark-100">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex gap-8">
              <button className="flex items-center gap-2 px-1 py-4 border-b-2 border-dark-900 font-medium text-sm">
                <Building2 className="h-4 w-4" />
                Accounts
              </button>
              <Link 
                href="/cards"
                className="flex items-center gap-2 px-1 py-4 text-dark-500 hover:text-dark-900 font-medium text-sm"
              >
                <CreditCard className="h-4 w-4" />
                Cards
              </Link>
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
          {/* Breadcrumb & Actions */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-dark-500">Accounts</span>
              <span className="text-dark-300">›</span>
              <button className="flex items-center gap-1 text-dark-900 font-medium">
                {mockAccount.name}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Connect to QuickBooks
              </Button>
              <Button variant="primary" size="sm" icon={Download}>
                Deposit
              </Button>
              <Button variant="primary" size="sm" icon={ArrowUpRight}>
                Transfer
              </Button>
              <Button variant="ghost" size="sm">
                •••
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Left Column - Account Details */}
            <div className="col-span-1 space-y-6">
              {/* Account Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-100">
                        <Building2 className="h-5 w-5 text-dark-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-dark-900">
                          {mockAccount.name}
                        </p>
                        <p className="text-xs text-dark-500">
                          {mockAccount.type} • {mockAccount.accountNumber.slice(-4)}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700">
                      {mockAccount.status}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-dark-500 mb-1">Available Balance</p>
                      <p className="text-3xl font-bold text-dark-900">
                        {formatCurrency(mockAccount.balance.available)}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-dark-100 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-dark-500">Routing Number</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-mono text-dark-900">
                            {mockAccount.routingNumber}
                          </span>
                          <button className="text-dark-400 hover:text-dark-600">
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-dark-500">Account Number</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-mono text-dark-900">
                            {mockAccount.accountNumber}
                          </span>
                          <button className="text-dark-400 hover:text-dark-600">
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cards Section */}
              <Card>
                <div className="flex items-center justify-between px-6 py-4 border-b border-dark-100">
                  <h3 className="font-semibold text-dark-900">Cards ({mockCards.length})</h3>
                  <Button variant="ghost" size="sm" icon={Plus}>
                    New Card
                  </Button>
                </div>
                <CardContent className="p-6 space-y-3">
                  {mockCards.map((card) => (
                    <div key={card.id} className="flex items-center gap-3">
                      <div className="flex h-10 w-14 items-center justify-center rounded bg-blue-600">
                        <span className="text-xs font-bold text-white">VISA</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-dark-900">
                          Debit ••{card.number}
                        </p>
                        <p className="text-xs text-dark-500">
                          {card.holder} • {card.type}
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700">
                        {card.status}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Activity */}
            <div className="col-span-2">
              <Card>
                <div className="px-6 py-4 border-b border-dark-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-dark-900">Account Activity</h3>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                        </svg>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 text-sm">
                    <button className="pb-2 border-b-2 border-dark-900 font-medium">
                      Recent
                    </button>
                    <button className="pb-2 text-dark-500 hover:text-dark-900">
                      Declined
                    </button>
                    <button className="pb-2 text-dark-500 hover:text-dark-900">
                      Scheduled
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-dark-100">
                  <div className="px-6 py-3 bg-dark-50 grid grid-cols-12 gap-4 text-xs font-medium text-dark-500 uppercase tracking-wider">
                    <div className="col-span-5">Description</div>
                    <div className="col-span-3">Type</div>
                    <div className="col-span-4 text-right">Amount</div>
                  </div>
                  
                  {mockTransactions.map((tx) => (
                    <div key={tx.id} className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-dark-50 transition-colors">
                      <div className="col-span-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-100 text-lg">
                          {tx.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-dark-900 truncate">
                            {tx.description}
                          </p>
                          <p className="text-xs text-dark-500">
                            {tx.date} • {tx.time}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <div className="flex items-center gap-2 text-xs text-dark-600">
                          <CreditCard className="h-3 w-3" />
                          {tx.type}
                        </div>
                      </div>
                      <div className="col-span-4 text-right">
                        <p className={`text-sm font-semibold ${
                          tx.amount < 0 ? 'text-dark-900' : 'text-primary-600'
                        }`}>
                          {tx.amount < 0 ? '-' : '+'}
                          {formatCurrency(Math.abs(tx.amount))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
