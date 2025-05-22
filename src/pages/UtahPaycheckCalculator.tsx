
import React from 'react';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const UtahPaycheckCalculator = () => {
  return (
    <Layout 
      title="Utah Paycheck Calculator" 
      description="Calculate your Utah paycheck and net pay with our free calculator that includes Utah state tax calculations."
      keywords="utah paycheck calculator, utah tax calculator, utah salary calculator, utah take-home pay, utah withholding calculator, utah wage calculator"
    >
      <div>
        <PaycheckCalculator stateName="Utah" stateAbbreviation="UT" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">About Utah Payroll Taxes</h2>
          <p className="mb-4">Utah has a flat state income tax rate of 4.95%. The state does not have local income taxes.</p>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Utah State Income Tax Details</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>State income tax rate: 4.95% (flat rate)</li>
            <li>Utah offers various credits and deductions, including a taxpayer tax credit</li>
            <li>The state uses federal adjusted gross income as the starting point for state taxes</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Utah Paycheck Information</h3>
          <p className="mb-4">In addition to state income tax, your Utah paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
        </div>
      </div>
    </Layout>
  );
};

export default UtahPaycheckCalculator;
