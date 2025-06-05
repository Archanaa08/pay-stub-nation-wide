
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const UtahPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Utah Paycheck Calculator (UT) | Free Utah Tax Calculator</title>
        <meta name="description" content="Free Utah (UT) paycheck calculator to estimate your take-home pay. Our Utah tax calculator includes state flat tax calculations for accurate net pay estimates." />
        <meta name="keywords" content="paycheck calculator ut, utah paycheck calculator, utah tax calculator, utah salary calculator, utah take-home pay, utah withholding calculator, utah wage calculator" />
        <link rel="canonical" href="https://salarycheck.me/utah-paycheck-calculator" />
      </Helmet>
      
      <Layout 
        title="Utah Paycheck Calculator (UT)" 
        description="Calculate your Utah paycheck and net pay with our free UT tax calculator that includes Utah state tax calculations."
        keywords="paycheck calculator ut, utah paycheck calculator, utah tax calculator, utah salary calculator, utah take-home pay, utah withholding calculator, utah wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Utah" stateAbbreviation="UT" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Utah Payroll Taxes</h2>
            <p className="mb-4">Utah has a flat state income tax rate of 4.95%. The state does not have local income taxes. Our free Utah (UT) paycheck calculator accounts for this flat tax rate to provide accurate take-home pay estimates.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Utah State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rate: 4.95% (flat rate)</li>
              <li>Utah offers various credits and deductions, including a taxpayer tax credit</li>
              <li>The state uses federal adjusted gross income as the starting point for state taxes</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Utah Paycheck Calculator Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Accurate calculations of Utah's 4.95% flat tax rate</li>
              <li>Federal income tax calculations based on current tax brackets</li>
              <li>FICA tax calculations (Social Security and Medicare)</li>
              <li>Support for different pay frequencies (weekly, bi-weekly, monthly, etc.)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Utah Paycheck Information</h3>
            <p className="mb-4">In addition to state income tax, your Utah paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%). Our UT paycheck calculator takes all these factors into account.</p>
            
            <div className="bg-finance-light p-4 rounded-lg mt-6">
              <h4 className="font-semibold text-finance-primary">Why Use Our Free Utah Paycheck Calculator?</h4>
              <p className="text-gray-700 mt-2">Our free Utah (UT) paycheck calculator provides the most accurate take-home pay estimates for Utah workers. Whether you're considering a job offer, planning your budget, or just curious about your take-home pay, our calculator gives you the information you need.</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UtahPaycheckCalculator;
