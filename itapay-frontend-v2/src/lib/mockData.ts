// Mock data para demonstração (será substituído pelo backend real)

export const mockAccount = {
  id: '1',
  name: 'Richard Hendricks',
  status: 'Open',
  type: 'Checking',
  accountNumber: '1006311257',
  routingNumber: '812345678',
  balance: {
    available: 1148356, // em centavos = $11,483.56
    current: 1148356,
  },
};

export const mockTransactions = [
  {
    id: '1',
    description: 'Lawyer | Invoice',
    date: 'Nov 8',
    time: 'Today',
    type: 'ACH Transfer',
    amount: -80000, // -$800.00
    icon: '⚖️',
  },
  {
    id: '2',
    description: 'Apple',
    date: 'Nov 8',
    time: 'Today',
    type: 'Card 0204',
    amount: -13200, // -$132.00
    icon: '🍎',
  },
  {
    id: '3',
    description: 'Amazon',
    date: 'Nov 8',
    time: 'Today',
    type: 'Card 0204',
    amount: -8444, // -$84.44
    icon: '📦',
  },
  {
    id: '4',
    description: 'My Chase Account | Initial fun...',
    date: 'Nov 8',
    time: 'Today',
    type: 'ACH Transfer',
    amount: 1250000, // +$12,500.00
    icon: '🔍',
  },
];

export const mockCards = [
  {
    id: '1',
    number: '0204',
    holder: 'Jessie Russell',
    type: 'Virtual',
    status: 'Active',
    expiryDate: '11/29',
  },
  {
    id: '2',
    number: '0196',
    holder: 'Alice Shen',
    type: 'Physical',
    status: 'Active',
    expiryDate: '11/29',
  },
];

export const mockPayees = [
  {
    id: '1',
    name: 'Landlord',
    initials: 'L',
    bank: 'Jpmorgan Chase Bank',
    routingNumber: '021202337',
    accountNumber: '•• 3333',
    type: 'Person',
  },
  {
    id: '2',
    name: 'Lawyer',
    initials: 'L',
    bank: 'Bank of America',
    routingNumber: '026009593',
    accountNumber: '•• 4444',
    type: 'Person',
  },
  {
    id: '3',
    name: 'IRS',
    initials: 'I',
    bank: 'Citibank',
    routingNumber: '021000089',
    accountNumber: '•• 2222',
    type: 'Person',
  },
  {
    id: '4',
    name: 'My Chase Account',
    initials: 'MC',
    bank: 'Jpmorgan Chase Bank',
    routingNumber: '021000021',
    accountNumber: '•• 1111',
    type: 'Person',
  },
];
