
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const NevadaPaycheckCalculator = () => {
  return (
    <Layout 
      title="Nevada Paycheck Calculator" 
      description="Calculate your take-home pay with our Nevada paycheck calculator. Nevada has no state income tax."
      keywords="nevada paycheck calculator, nevada tax calculator, nevada salary calculator, nevada take-home pay, nevada withholding calculator, nevada wage calculator"
    >
      <div>
        <PaycheckCalculator stateName="Nevada" stateAbbreviation="NV" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Nevada Payroll Taxes</h2>
          <p className="mb-4">Nevada is one of the few states that does not collect income tax. This means your take-home pay will be higher in Nevada compared to most other states.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Nevada State Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rate: None (0%)</li>
            <li>Nevada does not have local income taxes</li>
            <li>Instead of income taxes, Nevada relies on sales tax and gaming taxes for revenue</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Nevada Paycheck Information</h3>
          <p className="mb-4">While Nevada does not collect state income tax, your Nevada paycheck will still have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default NevadaPaycheckCalculator;
