
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const MarylandPaycheckCalculator = () => {
  return (
    <Layout 
      title="Maryland Paycheck Calculator" 
      description="Free Maryland paycheck calculator with accurate Maryland state tax calculations to estimate your net pay."
    >
      <div>
        <PaycheckCalculator stateName="Maryland" stateAbbreviation="MD" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Maryland Payroll Taxes</h2>
          <p className="mb-4">Maryland has a progressive state income tax system with rates ranging from 2% to 5.75%. Additionally, Maryland counties and Baltimore City impose local income taxes.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Maryland State Income Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rates: 2% to 5.75% depending on income</li>
            <li>Local income taxes range from 2.25% to 3.20% depending on county</li>
            <li>Maryland offers various deductions and credits</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Maryland Paycheck Information</h3>
          <p className="mb-4">In addition to state and local income taxes, your Maryland paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default MarylandPaycheckCalculator;
