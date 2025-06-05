
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const MinnesotaPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Minnesota Paycheck Calculator (MN) | Free Minnesota Tax Calculator</title>
        <meta name="description" content="Free Minnesota (MN) paycheck calculator to estimate your take-home pay with accurate Minnesota state tax withholding calculations for all income levels." />
        <meta name="keywords" content="paycheck calculator mn, minnesota paycheck calculator, mn paycheck calculator, minnesota tax calculator, minnesota salary calculator, minnesota take-home pay, minnesota withholding calculator, minnesota wage calculator" />
        <link rel="canonical" href="https://salarycheck.me/minnesota-paycheck-calculator" />
      </Helmet>
      
      <Layout 
        title="Minnesota Paycheck Calculator (MN)" 
        description="Free Minnesota paycheck calculator to estimate your take-home pay with accurate Minnesota state tax withholding calculations."
        keywords="paycheck calculator mn, minnesota paycheck calculator, mn paycheck calculator, minnesota tax calculator, minnesota salary calculator, minnesota take-home pay, minnesota withholding calculator, minnesota wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Minnesota" stateAbbreviation="MN" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Minnesota Payroll Taxes</h2>
            <p className="mb-4">Minnesota has a progressive state income tax system with rates ranging from 5.35% to 9.85%. The state does not have local income taxes. Our free MN paycheck calculator accounts for these progressive tax rates.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Minnesota State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rates: 5.35% to 9.85% depending on income</li>
              <li>Minnesota offers various credits and deductions</li>
              <li>The state has its own standard deduction and personal exemptions</li>
              <li>Minnesota has one of the more complex state tax systems in the US</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Minnesota Paycheck Calculator Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Accurate calculations of Minnesota's progressive tax brackets</li>
              <li>Federal income tax calculations based on current tax brackets</li>
              <li>FICA tax calculations (Social Security and Medicare)</li>
              <li>Support for different pay frequencies (weekly, bi-weekly, monthly, etc.)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Minnesota Paycheck Information</h3>
            <p className="mb-4">In addition to state income tax, your Minnesota paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%). Our MN paycheck calculator provides a comprehensive breakdown of all these deductions.</p>
            
            <div className="bg-finance-light p-4 rounded-lg mt-6">
              <h4 className="font-semibold text-finance-primary">Why Use Our Free Minnesota Paycheck Calculator?</h4>
              <p className="text-gray-700 mt-2">Our free Minnesota (MN) paycheck calculator provides the most accurate take-home pay estimates for Minnesota workers. With Minnesota's complicated tax structure, having an accurate calculator is essential for proper financial planning.</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MinnesotaPaycheckCalculator;
