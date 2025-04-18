import React from 'react';
import { CheckCircle } from 'lucide-react';

interface PricingProps {
  isAnnualBilling: boolean;
  setIsAnnualBilling: (isAnnual: boolean) => void;
}

export function Pricing({ isAnnualBilling, setIsAnnualBilling }: PricingProps) {
  return (
    <section id="pricing" className="py-16 px-8 bg-[#FDFCE8]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Pricing</h2>
        <div className="flex items-center justify-center mb-8">
          <span className={!isAnnualBilling ? 'font-bold' : ''}>Monthly</span>
          <button
            onClick={() => setIsAnnualBilling(!isAnnualBilling)}
            className="mx-4 w-16 h-8 bg-[#003366]/20 rounded-full p-1 transition-colors relative"
          >
            <div
              className={`w-6 h-6 bg-[#003366] rounded-full transition-transform ${
                isAnnualBilling ? 'translate-x-8' : ''
              }`}
            />
          </button>
          <span className={isAnnualBilling ? 'font-bold' : ''}>
            Annual (20% off)
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Basic',
              price: isAnnualBilling ? 8 : 10,
              features: ['100 prompts/month', 'Basic support', 'Standard processing'],
            },
            {
              name: 'Pro',
              price: isAnnualBilling ? 24 : 30,
              features: ['500 prompts/month', 'Priority support', 'Advanced processing', 'API access'],
              recommended: true,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              features: ['Unlimited prompts', '24/7 support', 'Custom solutions', 'Dedicated manager'],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`bg-[#FDFCE8] p-8 rounded-lg ${
                plan.recommended
                  ? 'ring-2 ring-[#003366] shadow-xl'
                  : 'border border-[#003366]/20'
              }`}
            >
              {plan.recommended && (
                <span className="bg-[#003366] text-white px-4 py-1 rounded-full text-sm">
                  Recommended
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="my-4">
                {typeof plan.price === 'number' ? (
                  <>
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-[#003366]/70">/month</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold">{plan.price}</span>
                )}
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-[#003366] text-white py-2 rounded-lg hover:bg-[#003366]/90 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}