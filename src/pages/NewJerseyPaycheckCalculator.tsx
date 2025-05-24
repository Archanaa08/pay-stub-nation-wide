
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const NewJerseyPaycheckCalculator = () => {
  return (
    <Layout 
      title="New Jersey Paycheck Calculator" 
      description="Calculate your New Jersey paycheck and take-home pay with our free New Jersey state tax calculator."
      keywords="new jersey paycheck calculator, nj paycheck calculator, new jersey tax calculator, new jersey salary calculator, new jersey take-home pay, new jersey withholding calculator, new jersey wage calculator"
    >
      <div>
        <PaycheckCalculator stateName="New Jersey" stateAbbreviation="NJ" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About New Jersey Payroll Taxes</h2>
          <p className="mb-4">New Jersey has a progressive state income tax system with rates ranging from 1.4% to 10.75%. The state does not have local income taxes.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">New Jersey State Income Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rates: 1.4% to 10.75% depending on income</li>
            <li>New Jersey offers various deductions and credits</li>
            <li>The state has its own standard deduction amounts</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other New Jersey Paycheck Information</h3>
          <p className="mb-4">In addition to state income tax, your New Jersey paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default NewJerseyPaycheckCalculator;
