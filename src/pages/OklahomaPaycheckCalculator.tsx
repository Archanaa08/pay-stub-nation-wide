
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const OklahomaPaycheckCalculator = () => {
  return (
    <Layout 
      title="Oklahoma Paycheck Calculator" 
      description="Free Oklahoma paycheck calculator to estimate your take-home pay with accurate Oklahoma state tax withholding."
      keywords="oklahoma paycheck calculator, oklahoma tax calculator, oklahoma salary calculator, oklahoma take-home pay, oklahoma withholding calculator, oklahoma wage calculator"
    >
      <div>
        <PaycheckCalculator stateName="Oklahoma" stateAbbreviation="OK" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Oklahoma Payroll Taxes</h2>
          <p className="mb-4">Oklahoma has a progressive state income tax system with rates ranging from 0.25% to 5%. The state does not have local income taxes.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Oklahoma State Income Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rates: 0.25% to 5% depending on income</li>
            <li>Oklahoma offers various deductions and credits</li>
            <li>The state has its own standard deduction amounts</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Oklahoma Paycheck Information</h3>
          <p className="mb-4">In addition to state income tax, your Oklahoma paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default OklahomaPaycheckCalculator;
