
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const MissouriPaycheckCalculator = () => {
  return (
    <Layout 
      title="Missouri Paycheck Calculator" 
      description="Calculate your net pay with our Missouri paycheck calculator. Accurate Missouri state tax and federal tax estimations."
    >
      <div>
        <PaycheckCalculator stateName="Missouri" stateAbbreviation="MO" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Missouri Payroll Taxes</h2>
          <p className="mb-4">Missouri has a progressive state income tax with rates ranging from 1.5% to 5.4%. Some cities in Missouri may also have local income taxes.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Missouri State Income Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rates: 1.5% to 5.4% depending on income</li>
            <li>St. Louis and Kansas City have local income taxes of 1%</li>
            <li>Missouri offers various deductions and credits</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Missouri Paycheck Information</h3>
          <p className="mb-4">In addition to state and local income taxes, your Missouri paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default MissouriPaycheckCalculator;
