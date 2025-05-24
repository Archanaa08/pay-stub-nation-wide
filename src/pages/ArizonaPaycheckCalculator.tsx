
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const ArizonaPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Arizona Paycheck Calculator | Free AZ Tax Calculator</title>
        <meta name="description" content="Free Arizona paycheck calculator to estimate your take-home pay with accurate Arizona state tax calculations. Updated for 2025 tax rates." />
        <link rel="canonical" href="https://salarycheck.me/arizona-paycheck-calculator" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Arizona Paycheck Calculator | Free AZ Tax Calculator" />
        <meta property="og:description" content="Calculate your Arizona paycheck with our free calculator. Accurate take-home pay estimation with Arizona state taxes included." />
        <meta property="og:url" content="https://salarycheck.me/arizona-paycheck-calculator" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Arizona Paycheck Calculator",
              "description": "Free Arizona paycheck calculator to estimate your take-home pay with accurate Arizona state tax calculations.",
              "url": "https://salarycheck.me/arizona-paycheck-calculator",
              "mainEntity": {
                "@type": "FinancialProduct",
                "name": "Arizona Paycheck Calculator",
                "description": "Calculate your Arizona paycheck with our free calculator. Accurate take-home pay estimation with Arizona state taxes included."
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="Arizona Paycheck Calculator" 
        description="Free Arizona paycheck calculator to estimate your take-home pay with accurate Arizona state tax calculations."
        keywords="arizona paycheck calculator, arizona tax calculator, arizona salary calculator, arizona take-home pay, arizona withholding calculator, arizona wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Arizona" stateAbbreviation="AZ" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Arizona Payroll Taxes</h2>
            <p className="mb-4">Arizona has a progressive state income tax system with rates ranging from 2.59% to 4.50%. The state does not have local income taxes.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Arizona State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rates: 2.59% to 4.50% depending on income</li>
              <li>Arizona offers various deductions and credits</li>
              <li>The state has its own standard deduction amounts</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Arizona Paycheck Information</h3>
            <p className="mb-4">In addition to state income tax, your Arizona paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ArizonaPaycheckCalculator;
