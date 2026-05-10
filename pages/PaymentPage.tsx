
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, AlertCircle, CreditCard, ArrowRight, Search, RefreshCw } from 'lucide-react';
import { useSEO } from '@/src/hooks/useSEO';
import { invoices, Invoice } from '../data/invoices';

declare global {
  interface Window {
    paypal?: any;
  }
}

type Step = 'lookup' | 'confirm' | 'pay' | 'success' | 'error';

const PAYPAL_ENV = (import.meta.env.VITE_PAYPAL_ENV as string) || 'live';
const PAYPAL_CLIENT_ID = PAYPAL_ENV === 'sandbox'
  ? import.meta.env.VITE_PAYPAL_SANDBOX_CLIENT_ID as string
  : import.meta.env.VITE_PAYPAL_LIVE_CLIENT_ID as string;

const PaymentPage: React.FC = () => {
  useSEO({
    title: 'Pay Invoice | Coexin Brandcom',
    description: 'Securely pay your Coexin Brandcom invoice online via PayPal.',
  });

  const [step, setStep] = useState<Step>('lookup');
  const [invoiceInput, setInvoiceInput] = useState('');
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [lookupError, setLookupError] = useState('');
  const [paypalReady, setPaypalReady] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [orderID, setOrderID] = useState('');
  const paypalContainerRef = useRef<HTMLDivElement>(null);
  const paypalRendered = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load PayPal SDK when entering payment step
  useEffect(() => {
    if (step !== 'pay' || !invoice) return;

    const existingScript = document.getElementById('paypal-sdk');
    if (existingScript && window.paypal) {
      setPaypalReady(true);
      return;
    }

    const script = document.createElement('script');
    script.id = 'paypal-sdk';
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=${invoice.currency}&intent=capture&components=buttons`;
    script.async = true;
    script.onload = () => setPaypalReady(true);
    script.onerror = () => {
      setPaymentError('Failed to load PayPal. Please refresh and try again.');
      setStep('error');
    };
    document.body.appendChild(script);
  }, [step, invoice]);

  // Render PayPal buttons once SDK is ready
  useEffect(() => {
    if (!paypalReady || !invoice || !paypalContainerRef.current || paypalRendered.current) return;
    paypalRendered.current = true;

    window.paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'rect',
        label: 'pay',
        height: 50,
      },
      createOrder: (_data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            reference_id: invoice.invoiceNumber,
            description: `${invoice.description} (Invoice: ${invoice.invoiceNumber})`,
            custom_id: invoice.invoiceNumber,
            amount: {
              currency_code: invoice.currency,
              value: invoice.amount.toFixed(2),
            },
          }],
          application_context: {
            brand_name: 'Coexin Brandcom',
            shipping_preference: 'NO_SHIPPING',
          },
        });
      },
      onApprove: async (_data: any, actions: any) => {
        const details = await actions.order.capture();
        setOrderID(details.id);
        setStep('success');
      },
      onError: (err: any) => {
        console.error('PayPal error:', err);
        setPaymentError('Payment could not be completed. Please try again or contact us.');
        setStep('error');
      },
      onCancel: () => {
        setPaymentError('Payment was cancelled. You can try again below.');
        setStep('error');
      },
    }).render(paypalContainerRef.current);
  }, [paypalReady, invoice]);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupError('');
    const found = invoices.find(
      inv =>
        inv.invoiceNumber.toLowerCase() === invoiceInput.trim().toLowerCase() &&
        !inv.isPaid,
    );
    if (!found) {
      setLookupError(
        'Invoice not found or already paid. Please check the number or contact us at iroshan@coexinbrand.com',
      );
      return;
    }
    setInvoice(found);
    setStep('confirm');
  };

  const handleConfirm = () => {
    paypalRendered.current = false;
    setPaypalReady(false);
    setStep('pay');
  };

  const handleRetry = () => {
    paypalRendered.current = false;
    setPaymentError('');
    setStep('confirm');
  };

  const formatCurrency = (amount: number, currency: string) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);

  return (
    <div className="bg-[#050505] min-h-screen pt-36 pb-24">
      <div className="max-w-2xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 mb-6 text-[10px] uppercase tracking-[0.3em] text-cyan-500 font-space font-bold">
            <CreditCard size={14} />
            <span>Secure Payment Portal</span>
          </div>
          <h1 className="font-space text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Pay Your Invoice
          </h1>
          <p className="text-zinc-400 text-lg">
            Enter your invoice number to proceed with secure online payment.
          </p>
        </div>

        {/* Step: Lookup */}
        {step === 'lookup' && (
          <div className="animate-fade-in">
            <form onSubmit={handleLookup} className="bg-white/5 border border-white/10 p-8">
              <label
                htmlFor="invoice-number"
                className="block font-space text-sm font-bold text-zinc-400 tracking-widest uppercase mb-3"
              >
                Invoice Number
              </label>
              <input
                id="invoice-number"
                type="text"
                value={invoiceInput}
                onChange={e => setInvoiceInput(e.target.value)}
                placeholder="e.g. CBC-2025-001"
                className="w-full p-4 bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all text-lg font-space tracking-wider"
                autoFocus
              />
              {lookupError && (
                <div className="mt-4 flex items-start space-x-3 p-4 bg-red-500/10 border border-red-500/30">
                  <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-400 text-sm">{lookupError}</p>
                </div>
              )}
              <button
                type="submit"
                disabled={!invoiceInput.trim()}
                className="mt-6 w-full flex items-center justify-center space-x-2 bg-cyan-500 text-black font-bold py-4 font-space uppercase tracking-widest text-sm hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <Search size={16} />
                <span>Find Invoice</span>
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-zinc-600 text-sm">
                Don't have an invoice number?{' '}
                <a
                  href="mailto:iroshan@coexinbrand.com"
                  className="text-cyan-500 hover:text-white transition-colors"
                >
                  Contact us
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Step: Confirm */}
        {step === 'confirm' && invoice && (
          <div className="animate-fade-in">
            <div className="bg-white/5 border border-white/10 p-8 mb-6">
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-6">Invoice Details</p>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-zinc-400 text-sm font-space uppercase tracking-widest text-[11px]">Invoice No.</span>
                  <span className="font-space font-bold text-cyan-400 tracking-widest">{invoice.invoiceNumber}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-zinc-400 text-sm font-space uppercase tracking-widest text-[11px]">Description</span>
                  <span className="text-white text-sm text-right max-w-xs">{invoice.description}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-zinc-400 text-sm font-space uppercase tracking-widest text-[11px]">Due Date</span>
                  <span className="text-white text-sm">
                    {new Date(invoice.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-space font-bold text-white uppercase tracking-widest text-sm">Total Due</span>
                  <span className="font-space font-bold text-3xl text-white">
                    {formatCurrency(invoice.amount, invoice.currency)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => { setStep('lookup'); setInvoice(null); }}
                className="flex-1 py-4 border border-white/20 text-zinc-400 font-space font-bold uppercase tracking-widest text-sm hover:border-white/40 hover:text-white transition-all"
              >
                Back
              </button>
              <button
                onClick={handleConfirm}
                className="flex-2 flex-grow flex items-center justify-center space-x-2 bg-cyan-500 text-black font-bold py-4 px-8 font-space uppercase tracking-widest text-sm hover:bg-white transition-all"
              >
                <span>Proceed to Payment</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center space-x-2 text-zinc-600 text-xs">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.067 8.478c.492.315.844.825.983 1.39l.01.038c.046.19.07.386.07.583 0 1.83-1.49 3.32-3.32 3.32h-1.11c-.14 0-.26.1-.29.24l-.37 2.35c-.03.19-.19.32-.38.32H13.5c-.14 0-.24-.13-.22-.27l.87-5.53c.02-.14.14-.24.28-.24h3.68c.89 0 1.65-.33 2.17-.93.18-.2.34-.43.46-.67.12-.24.22-.5.27-.77zm-10.04-.26c.08-.01.14.04.14.12l.01.04-.79 5.01c-.02.14-.14.24-.28.24H7.94c-.14 0-.24-.13-.22-.27l1.04-6.6a.27.27 0 0 1 .27-.24h1.43c.05 0 .09.0.09.0z"/>
              </svg>
              <span>Secured by PayPal</span>
            </div>
          </div>
        )}

        {/* Step: Pay (PayPal Buttons) */}
        {step === 'pay' && invoice && (
          <div className="animate-fade-in">
            <div className="bg-white/5 border border-white/10 p-6 mb-6 flex items-center justify-between">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-space mb-1">{invoice.invoiceNumber}</p>
                <p className="text-white font-space font-bold text-2xl">{formatCurrency(invoice.amount, invoice.currency)}</p>
              </div>
              <div className="text-right">
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-space mb-1">Payable To</p>
                <p className="text-white text-sm">Coexin Brandcom</p>
              </div>
            </div>

            {!paypalReady && (
              <div className="flex flex-col items-center justify-center py-16 space-y-4">
                <div className="w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-zinc-500 text-sm font-space tracking-widest">Loading Payment Options...</p>
              </div>
            )}

            <div
              ref={paypalContainerRef}
              className={paypalReady ? 'block' : 'hidden'}
              id="paypal-button-container"
            />

            {paypalReady && (
              <p className="mt-4 text-center text-zinc-600 text-xs">
                You can pay with your PayPal account or a credit/debit card.
              </p>
            )}

            <button
              onClick={() => { setStep('confirm'); paypalRendered.current = false; setPaypalReady(false); }}
              className="mt-6 w-full py-3 text-zinc-500 font-space text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              ← Back to Invoice
            </button>
          </div>
        )}

        {/* Step: Success */}
        {step === 'success' && invoice && (
          <div className="animate-fade-in text-center">
            <div className="w-24 h-24 mx-auto mb-8 bg-cyan-500/10 border-2 border-cyan-500 rounded-full flex items-center justify-center">
              <CheckCircle size={44} className="text-cyan-500" />
            </div>
            <h2 className="font-space text-4xl font-bold text-white mb-4">Payment Received</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto">
              Thank you! Your payment of{' '}
              <span className="text-white font-bold">{formatCurrency(invoice.amount, invoice.currency)}</span>{' '}
              for invoice <span className="text-cyan-400 font-bold">{invoice.invoiceNumber}</span> has been processed successfully.
            </p>
            <div className="bg-white/5 border border-white/10 p-6 text-left max-w-sm mx-auto mb-10">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-space mb-4">Receipt Summary</p>
              {orderID && (
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/10">
                  <span className="text-zinc-500 text-sm">Order ID</span>
                  <span className="text-white text-xs font-mono">{orderID}</span>
                </div>
              )}
              <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/10">
                <span className="text-zinc-500 text-sm">Invoice</span>
                <span className="text-cyan-400 font-space font-bold text-sm">{invoice.invoiceNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500 text-sm">Amount Paid</span>
                <span className="text-white font-bold">{formatCurrency(invoice.amount, invoice.currency)}</span>
              </div>
            </div>
            <p className="text-zinc-600 text-sm">
              A confirmation will be sent to your PayPal email. Questions?{' '}
              <a href="mailto:iroshan@coexinbrand.com" className="text-cyan-500 hover:text-white transition-colors">
                Contact us
              </a>
            </p>
          </div>
        )}

        {/* Step: Error */}
        {step === 'error' && (
          <div className="animate-fade-in text-center">
            <div className="w-24 h-24 mx-auto mb-8 bg-red-500/10 border-2 border-red-500/50 rounded-full flex items-center justify-center">
              <AlertCircle size={44} className="text-red-400" />
            </div>
            <h2 className="font-space text-4xl font-bold text-white mb-4">Payment Unsuccessful</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto">{paymentError}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleRetry}
                className="flex items-center space-x-2 bg-cyan-500 text-black font-bold py-4 px-8 font-space uppercase tracking-widest text-sm hover:bg-white transition-all"
              >
                <RefreshCw size={16} />
                <span>Try Again</span>
              </button>
              <a
                href="mailto:iroshan@coexinbrand.com"
                className="flex items-center space-x-2 border border-white/20 text-zinc-300 font-bold py-4 px-8 font-space uppercase tracking-widest text-sm hover:border-white/40 hover:text-white transition-all"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default PaymentPage;
