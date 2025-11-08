'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Building2, CreditCard, Users, FileText, LayoutDashboard } from 'lucide-react';

const navigation = [
  { name: 'Banking', href: '/', icon: LayoutDashboard },
  { name: 'Accounts', href: '/accounts', icon: Building2 },
  { name: 'Cards', href: '/cards', icon: CreditCard },
  { name: 'Payees', href: '/payees', icon: Users },
  { name: 'Documents', href: '/documents', icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col bg-dark-800 text-white">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-dark-700">
        <h1 className="text-xl font-bold">
          Ita<span className="text-primary-400">Pay</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-dark-700 text-white'
                  : 'text-dark-300 hover:bg-dark-700 hover:text-white'
              )}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User section (mock) */}
      <div className="border-t border-dark-700 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold">
            H
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Henrique</p>
            <p className="text-xs text-dark-400 truncate">henrique@itapay.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
