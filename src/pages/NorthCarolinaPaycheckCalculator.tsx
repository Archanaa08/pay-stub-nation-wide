
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const NorthCarolinaPaycheckCalculator = () => {
  return (
    <Layout 
      title="North Carolina Paycheck Calculator" 
      description="Free North Carolina paycheck calculator to estimate your take-home pay with accurate North Carolina state tax withholding."
    >
      <div>
        <PaycheckCalculator stateName="North Carolina" stateAbbreviation="NC" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About North Carolina Payroll Taxes</h2>
          <p className="mb-4">North Carolina has a flat state income tax rate of 5.25%. The state does not have local income taxes.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">North Carolina State Income Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rate: 5.25% (flat rate)</li>
            <li>North Carolina offers a standard deduction that varies by filing status</li>
            <li>The state offers various tax credits</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other North Carolina Paycheck Information</h3>
          <p className="mb-4">In addition to state income tax, your North Carolina paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default NorthCarolinaPaycheckCalculator;
