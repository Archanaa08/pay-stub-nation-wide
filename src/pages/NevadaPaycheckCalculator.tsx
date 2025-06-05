
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const NevadaPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Nevada Paycheck Calculator | Hourly and Salary Tax Calculator</title>
        <meta name="description" content="Free Nevada paycheck calculator for hourly and salary wages. Calculate your take-home pay with our Nevada tax calculator that accounts for no state income tax." />
        <meta name="keywords" content="nevada paycheck calculator hourly, nevada tax calculator, nevada salary calculator, nevada take-home pay, nevada withholding calculator, nevada wage calculator" />
        <link rel="canonical" href="https://salarycheck.me/nevada-paycheck-calculator" />
      </Helmet>
      
      <Layout 
        title="Nevada Paycheck Calculator" 
        description="Calculate your take-home pay with our free Nevada paycheck calculator. Nevada has no state income tax, maximizing your hourly and salary earnings."
        keywords="nevada paycheck calculator hourly, nevada tax calculator, nevada salary calculator, nevada take-home pay, nevada withholding calculator, nevada wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Nevada" stateAbbreviation="NV" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Nevada Payroll Taxes</h2>
            <p className="mb-4">Nevada is one of the few states that does not collect income tax. This means your take-home pay will be higher in Nevada compared to most other states, whether you're paid hourly or on salary.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Nevada Hourly Paycheck Calculator Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Calculate exact take-home pay for hourly workers in Nevada</li>
              <li>Account for overtime pay at 1.5x regular rate</li>
              <li>See how federal taxes affect your Nevada hourly wage</li>
              <li>Estimate weekly, bi-weekly, and monthly take-home pay from hourly rates</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Nevada State Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rate: None (0%)</li>
              <li>Nevada does not have local income taxes</li>
              <li>Instead of income taxes, Nevada relies on sales tax and gaming taxes for revenue</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Nevada Paycheck Information</h3>
            <p className="mb-4">While Nevada does not collect state income tax, your Nevada paycheck will still have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%). Our free Nevada paycheck calculator accounts for all these factors to give you an accurate estimate of your take-home pay.</p>
            
            <div className="bg-finance-light p-4 rounded-lg mt-6">
              <h4 className="font-semibold text-finance-primary">Why Use Our Nevada Hourly Paycheck Calculator?</h4>
              <p className="text-gray-700 mt-2">Our free Nevada hourly paycheck calculator provides the most accurate take-home pay estimates for Nevada workers. Whether you're paid hourly or on salary, you'll get precise calculations that account for Nevada's tax advantages.</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NevadaPaycheckCalculator;
