
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const ColoradoPaycheckCalculator = () => {
  return (
    <Layout 
      title="Colorado Paycheck Calculator" 
      description="Free Colorado paycheck calculator to estimate your take-home pay with accurate Colorado state tax calculations."
    >
      <div>
        <PaycheckCalculator stateName="Colorado" stateAbbreviation="CO" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Colorado Payroll Taxes</h2>
          <p className="mb-4">Colorado has a flat state income tax rate of 4.40%. The state does not have local income taxes.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Colorado State Income Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rate: 4.40% (flat rate)</li>
            <li>Colorado uses federal taxable income as the starting point for state income taxes</li>
            <li>The state offers various credits and deductions</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Colorado Paycheck Information</h3>
          <p className="mb-4">In addition to state income tax, your Colorado paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default ColoradoPaycheckCalculator;
