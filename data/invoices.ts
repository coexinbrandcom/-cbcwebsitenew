export interface Invoice {
  invoiceNumber: string;
  clientName: string;
  description: string;
  amount: number;
  currency: 'USD' | 'EUR' | 'GBP' | 'AUD';
  dueDate: string;
  isPaid: boolean;
}

// Add your invoices here. Set isPaid: true once payment is confirmed in your PayPal account.
export const invoices: Invoice[] = [
  {
    invoiceNumber: 'CBC-2025-001',
    clientName: 'Sample Client',
    description: 'Brand Strategy & Identity Package — Phase 1',
    amount: 1.00,
    currency: 'USD',
    dueDate: '2025-06-30',
    isPaid: false,
  },
  {
    invoiceNumber: 'CBC-2025-002',
    clientName: 'Demo Client',
    description: 'Website Design & Development',
    amount: 4800.00,
    currency: 'USD',
    dueDate: '2025-07-15',
    isPaid: false,
  },
];
