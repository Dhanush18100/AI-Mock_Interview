'use client';
import React from 'react';
import plans from '@/utils/plans'; // Adjust path if needed
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="border rounded-xl p-6 shadow hover:shadow-lg transition-all"
        >
          <h2 className="text-2xl font-bold mb-2 text-blue-600">{plan.name} Plan</h2>
          <p className="text-3xl font-semibold mb-4">
            {plan.cost === 0 ? 'Free' : `₹${plan.cost}`}
          </p>
          <ul className="mb-4 space-y-2">
            {plan.offering.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-700">{item.value}</li>
            ))}
          </ul>
          <Link href={plan.cost===0?'/dashboard':'https://buy.stripe.com/test_00waEW52m6SyfcT37lfYY00'}>
          <Button className="w-full mt-4 cursor-pointer">
            {plan.cost === 0 ? 'Get Started' : 'Upgrade to Premium'}
          </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
