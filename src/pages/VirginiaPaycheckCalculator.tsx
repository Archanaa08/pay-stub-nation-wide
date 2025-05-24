
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const VirginiaPaycheckCalculator = () => {
  return (
    <Layout 
      title="Virginia Paycheck Calculator" 
      description="Free Virginia paycheck calculator to estimate your take-home pay with accurate Virginia state tax calculations."
      keywords="virginia paycheck calculator, virginia tax calculator, virginia salary calculator, virginia take-home pay, virginia withholding calculator, virginia wage calculator"
    >
      <div>
        <PaycheckCalculator stateName="Virginia" stateAbbreviation="VA" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Virginia Payroll Taxes</h2>
          <p className="mb-4">Virginia has a progressive state income tax system with rates ranging from 2% to 5.75%. The state does not have local income taxes.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Virginia State Income Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rates: 2% to 5.75% depending on income</li>
            <li>Virginia offers a standard deduction that varies by filing status</li>
            <li>The state offers various tax credits and deductions</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Virginia Paycheck Information</h3>
          <p className="mb-4">In addition to state income tax, your Virginia paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default VirginiaPaycheckCalculator;
