
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const WashingtonPaycheckCalculator = () => {
  return (
    <Layout 
      title="Washington Paycheck Calculator" 
      description="Calculate your take-home pay with our Washington paycheck calculator. Washington has no state income tax."
      keywords="washington paycheck calculator, washington tax calculator, washington salary calculator, washington take-home pay, washington withholding calculator, washington wage calculator"
    >
      <div>
        <PaycheckCalculator stateName="Washington" stateAbbreviation="WA" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Washington Payroll Taxes</h2>
          <p className="mb-4">Washington is one of the few states that does not collect income tax on wages and salaries. This means your take-home pay will be higher in Washington compared to most other states.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Washington State Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rate: None (0%)</li>
            <li>Washington does not have local income taxes</li>
            <li>The state relies on sales tax and business taxes for revenue</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Washington Paycheck Information</h3>
          <p className="mb-4">While Washington does not collect state income tax, your Washington paycheck will still have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default WashingtonPaycheckCalculator;
