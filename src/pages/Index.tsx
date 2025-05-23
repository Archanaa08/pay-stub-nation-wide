
import React from 'react';
import Layout from '@/components/Layout';
import StateCard from '@/components/StateCard';
import { states } from '@/utils/stateData';
import { Calculator } from 'lucide-react';
import FloatingCalculatorButton from '@/components/FloatingCalculatorButton';

const Index = () => {
  return (
    <Layout 
      title="State Paycheck Calculators" 
      description="Free paycheck calculators for all states. Calculate your take-home pay with taxes and deductions for your state."
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6 bg-finance-primary inline-flex p-3 rounded-full text-white">
            <Calculator size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-finance-primary">State Paycheck Calculators</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your take-home pay for any state with our accurate paycheck calculators.
            Our calculators include federal, state, and local taxes, as well as FICA and other deductions.
          </p>
        </div>

        <div className="p-6 bg-finance-light rounded-lg border border-gray-200 mb-12">
          <h2 className="text-2xl font-semibold text-finance-primary mb-4">What is a Paycheck Calculator?</h2>
          <div className="text-gray-700">
            <p className="mb-3">
              A paycheck calculator helps you determine your take-home pay after taxes and deductions. It's an essential tool for financial planning, helping you understand exactly how much of your salary actually ends up in your bank account.
            </p>
            <p className="mb-3">
              Our state-specific calculators account for federal income tax, state income tax, local taxes, Social Security, Medicare, and common deductions like healthcare and retirement contributions. This gives you a more accurate picture of your actual earnings.
            </p>
            <p>
              Whether you're considering a new job offer, planning a move to another state, or just want to better understand your current paycheck, our calculators provide clear, accurate estimates to help you make informed financial decisions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {states.map((state) => (
            <StateCard
              key={state.abbreviation}
              name={state.name}
              path={state.path}
              abbreviation={state.abbreviation}
            />
          ))}
        </div>

        <div className="mt-16 p-6 bg-finance-light rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-finance-primary mb-3">Why Use Our Paycheck Calculators?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-finance-secondary mb-2">State-Specific Calculations</h3>
              <p className="text-gray-600">Our calculators account for specific state tax rates, giving you accurate estimates.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-finance-secondary mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple forms with clear results make it easy to calculate your take-home pay.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-finance-secondary mb-2">Completely Free</h3>
              <p className="text-gray-600">No registration or fees required to use our paycheck calculators.</p>
            </div>
          </div>
        </div>
      </div>
      <FloatingCalculatorButton />
    </Layout>
  );
};

export default Index;
