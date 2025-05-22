
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const MinnesotaPaycheckCalculator = () => {
  return (
    <Layout 
      title="Minnesota Paycheck Calculator" 
      description="Free Minnesota paycheck calculator to estimate your take-home pay with accurate Minnesota state tax withholding."
    >
      <div>
        <PaycheckCalculator stateName="Minnesota" stateAbbreviation="MN" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Minnesota Payroll Taxes</h2>
          <p className="mb-4">Minnesota has a progressive state income tax system with rates ranging from 5.35% to 9.85%. The state does not have local income taxes.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Minnesota State Income Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rates: 5.35% to 9.85% depending on income</li>
            <li>Minnesota offers various credits and deductions</li>
            <li>The state has its own standard deduction and personal exemptions</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Minnesota Paycheck Information</h3>
          <p className="mb-4">In addition to state income tax, your Minnesota paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default MinnesotaPaycheckCalculator;
