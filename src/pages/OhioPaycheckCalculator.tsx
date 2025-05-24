import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const OhioPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Ohio Paycheck Calculator | Free OH Tax Calculator</title>
        <meta name="description" content="Calculate your Ohio paycheck and take-home pay with our free Ohio state tax calculator. Updated for 2025 tax rates." />
        <link rel="canonical" href="https://salarycheck.me/ohio-paycheck-calculator" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Ohio Paycheck Calculator | Free OH Tax Calculator" />
        <meta property="og:description" content="Calculate your Ohio paycheck and take-home pay with our free Ohio state tax calculator." />
        <meta property="og:url" content="https://salarycheck.me/ohio-paycheck-calculator" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Ohio Paycheck Calculator",
              "description": "Calculate your Ohio paycheck and take-home pay with our free Ohio state tax calculator.",
              "url": "https://salarycheck.me/ohio-paycheck-calculator",
              "mainEntity": {
                "@type": "FinancialProduct",
                "name": "Ohio Paycheck Calculator",
                "description": "Calculate your Ohio paycheck and take-home pay with our free Ohio state tax calculator."
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="Ohio Paycheck Calculator" 
        description="Calculate your Ohio paycheck and take-home pay with our free Ohio state tax calculator."
        keywords="ohio paycheck calculator, ohio tax calculator, ohio salary calculator, ohio take-home pay, ohio withholding calculator, ohio wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Ohio" stateAbbreviation="OH" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Ohio Payroll Taxes</h2>
            <p className="mb-4">Ohio has a progressive state income tax system with rates ranging from 0% to 3.99%. Some cities and school districts in Ohio may also impose local income taxes.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Ohio State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rates: 0% to 3.99% depending on income</li>
              <li>Local income taxes vary by municipality, typically ranging from 0.5% to 3%</li>
              <li>Ohio offers various deductions and credits</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Ohio Paycheck Information</h3>
            <p className="mb-4">In addition to state and local income taxes, your Ohio paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OhioPaycheckCalculator;
