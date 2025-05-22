
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const IndianaPaycheckCalculator = () => {
  return (
    <Layout 
      title="Indiana Paycheck Calculator" 
      description="Calculate your Indiana paycheck and take-home pay with our free Indiana state tax calculator."
    >
      <div>
        <PaycheckCalculator stateName="Indiana" stateAbbreviation="IN" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Indiana Payroll Taxes</h2>
          <p className="mb-4">Indiana has a flat state income tax rate of 3.23%. Many counties in Indiana also impose their own income taxes.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Indiana State Income Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rate: 3.23% (flat rate)</li>
            <li>County income taxes range from 0.5% to 3.38% depending on your county of residence</li>
            <li>Indiana offers various deductions, including a standard deduction of $1,000</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Indiana Paycheck Information</h3>
          <p className="mb-4">In addition to state and county income taxes, your Indiana paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default IndianaPaycheckCalculator;
