
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const TennesseePaycheckCalculator = () => {
  return (
    <Layout 
      title="Tennessee Paycheck Calculator" 
      description="Free Tennessee paycheck calculator. Tennessee has no state income tax on wages and salaries."
      keywords="tennessee paycheck calculator, tennessee tax calculator, tennessee salary calculator, tennessee take-home pay, tennessee withholding calculator, tennessee wage calculator"
    >
      <div>
        <PaycheckCalculator stateName="Tennessee" stateAbbreviation="TN" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Tennessee Payroll Taxes</h2>
          <p className="mb-4">Tennessee does not impose a state income tax on wages and salaries. This makes Tennessee one of the most tax-friendly states for workers.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Tennessee State Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rate: None (0%) on wages and salaries</li>
            <li>Tennessee does not have local income taxes</li>
            <li>The state relies on sales tax and other taxes for revenue</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Tennessee Paycheck Information</h3>
          <p className="mb-4">While Tennessee does not collect state income tax on wages, your Tennessee paycheck will still have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default TennesseePaycheckCalculator;
