
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const ArkansasPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Arkansas Paycheck Calculator | Free AR Tax Calculator</title>
        <meta name="description" content="Free Arkansas paycheck calculator to estimate your take-home pay with accurate Arkansas state tax calculations. Updated for 2025 tax rates." />
        <link rel="canonical" href="https://salarycheck.me/arkansas-paycheck-calculator" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Arkansas Paycheck Calculator | Free AR Tax Calculator" />
        <meta property="og:description" content="Calculate your Arkansas paycheck with our free calculator. Accurate take-home pay estimation with Arkansas state taxes included." />
        <meta property="og:url" content="https://salarycheck.me/arkansas-paycheck-calculator" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Arkansas Paycheck Calculator",
              "description": "Free Arkansas paycheck calculator to estimate your take-home pay with accurate Arkansas state tax calculations.",
              "url": "https://salarycheck.me/arkansas-paycheck-calculator",
              "mainEntity": {
                "@type": "FinancialProduct",
                "name": "Arkansas Paycheck Calculator",
                "description": "Calculate your Arkansas paycheck with our free calculator. Accurate take-home pay estimation with Arkansas state taxes included."
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="Arkansas Paycheck Calculator" 
        description="Free Arkansas paycheck calculator to estimate your take-home pay with accurate Arkansas state tax calculations."
        keywords="arkansas paycheck calculator, arkansas tax calculator, arkansas salary calculator, arkansas take-home pay, arkansas withholding calculator, arkansas wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Arkansas" stateAbbreviation="AR" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Arkansas Payroll Taxes</h2>
            <p className="mb-4">Arkansas has a progressive state income tax system with rates ranging from 2% to 5.9%. The state does not have local income taxes.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Arkansas State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rates: 2% to 5.9% depending on income</li>
              <li>Arkansas offers various deductions and credits</li>
              <li>The state has its own standard deduction amounts</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Arkansas Paycheck Information</h3>
            <p className="mb-4">In addition to state income tax, your Arkansas paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ArkansasPaycheckCalculator;
