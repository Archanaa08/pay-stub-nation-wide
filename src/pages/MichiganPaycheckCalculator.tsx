
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const MichiganPaycheckCalculator = () => {
  return (
    <Layout 
      title="Michigan Paycheck Calculator" 
      description="Calculate your Michigan paycheck with our free calculator. Accurate take-home pay estimation with Michigan state taxes included."
    >
      <div>
        <PaycheckCalculator stateName="Michigan" stateAbbreviation="MI" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Michigan Payroll Taxes</h2>
          <p className="mb-4">Michigan has a flat state income tax rate of 4.25%. The state does not have local income taxes except in certain cities like Detroit, Grand Rapids, and Lansing.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Michigan State Income Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rate: 4.25% (flat rate)</li>
            <li>Michigan does not have standard deductions or personal exemptions</li>
            <li>Some cities in Michigan have local income taxes ranging from 1% to 2.4%</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Michigan Paycheck Information</h3>
          <p className="mb-4">In addition to state income tax, your Michigan paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default MichiganPaycheckCalculator;
