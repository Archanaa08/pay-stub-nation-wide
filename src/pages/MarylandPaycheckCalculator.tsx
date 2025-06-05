
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const MarylandPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Maryland Paycheck Calculator (MD) | Free Maryland Tax Calculator</title>
        <meta name="description" content="Free Maryland (MD) paycheck calculator with accurate Maryland state and county tax calculations to estimate your net pay and take-home check amount." />
        <meta name="keywords" content="paycheck calculator md, maryland paycheck calculator, md paycheck calculator, maryland tax calculator, maryland salary calculator, maryland take-home pay, maryland withholding calculator, maryland wage calculator, take home check calculator" />
        <link rel="canonical" href="https://salarycheck.me/maryland-paycheck-calculator" />
      </Helmet>
      
      <Layout 
        title="Maryland Paycheck Calculator (MD)" 
        description="Free Maryland paycheck calculator with accurate Maryland state and county tax calculations to estimate your net pay."
        keywords="paycheck calculator md, maryland paycheck calculator, md paycheck calculator, maryland tax calculator, maryland salary calculator, maryland take-home pay, maryland withholding calculator, maryland wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Maryland" stateAbbreviation="MD" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Maryland Payroll Taxes</h2>
            <p className="mb-4">Maryland has a progressive state income tax system with rates ranging from 2% to 5.75%. Additionally, Maryland counties and Baltimore City impose local income taxes. Our free Maryland (MD) paycheck calculator accounts for both state and local taxes.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Maryland State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rates: 2% to 5.75% depending on income</li>
              <li>Local income taxes range from 2.25% to 3.20% depending on county</li>
              <li>Maryland offers various deductions and credits</li>
              <li>Maryland is one of the few states with both state and local income taxes</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Maryland Paycheck Calculator Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Accurate calculations of Maryland's progressive tax brackets</li>
              <li>County tax calculations based on your location</li>
              <li>Federal income tax calculations based on current tax brackets</li>
              <li>FICA tax calculations (Social Security and Medicare)</li>
              <li>Detailed breakdown of your take-home pay</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Maryland Paycheck Information</h3>
            <p className="mb-4">In addition to state and local income taxes, your Maryland paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%). Our free take home check calculator for Maryland provides a comprehensive breakdown of all these deductions.</p>
            
            <div className="bg-finance-light p-4 rounded-lg mt-6">
              <h4 className="font-semibold text-finance-primary">Why Use Our Free Maryland Paycheck Calculator?</h4>
              <p className="text-gray-700 mt-2">Our free Maryland (MD) paycheck calculator provides the most accurate take-home pay estimates for Maryland workers. With Maryland's state and local tax structure, having an accurate calculator is essential for proper financial planning.</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MarylandPaycheckCalculator;
