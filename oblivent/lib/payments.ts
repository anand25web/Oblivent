export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'bank';
  last4?: string;
  brand?: string;
}

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'succeeded' | 'failed';
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: 'monthly' | 'yearly';
  features: string[];
}

/**
 * Create a payment intent
 * @param amount - Amount in smallest currency unit (e.g., cents)
 * @param currency - Currency code, default 'usd'
 */
export async function createPaymentIntent(
  amount: number,
  currency: string = 'usd'
): Promise<PaymentIntent> {
  // TODO: Replace with real payment provider integration (Stripe, etc.)
  throw new Error('Payment processing not yet implemented');
}

/**
 * Confirm a payment by its intent ID
 * @param paymentIntentId - ID of the payment intent
 */
export async function confirmPayment(
  paymentIntentId: string
): Promise<PaymentIntent> {
  // TODO: Replace with real payment confirmation logic
  throw new Error('Payment confirmation not yet implemented');
}

/**
 * Create a subscription
 * @param planId - ID of the subscription plan
 * @param paymentMethodId - ID of the payment method
 */
export async function createSubscription(
  planId: string,
  paymentMethodId: string
): Promise<{ subscriptionId: string }> {
  // TODO: Replace with real subscription creation logic
  throw new Error('Subscription creation not yet implemented');
}

/**
 * Fetch available subscription plans (mocked)
 */
export async function getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
  return [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 9.99,
      interval: 'monthly',
      features: ['Basic features', 'Email support'],
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      price: 19.99,
      interval: 'monthly',
      features: ['All basic features', 'Advanced tools', 'Priority support'],
    },
  ];
}