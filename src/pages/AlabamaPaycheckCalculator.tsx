import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const AlabamaPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Alabama Paycheck Calculator | Free AL Tax Calculator</title>
        <meta name="description" content="Calculate your Alabama paycheck and net pay with our free Alabama state tax calculator. Updated for 2025 tax rates." />
        <link rel="canonical" href="https://salarycheck.me/alabama-paycheck-calculator" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Alabama Paycheck Calculator | Free AL Tax Calculator" />
        <meta property="og:description" content="Calculate your Alabama paycheck and net pay with our free Alabama state tax calculator." />
        <meta property="og:url" content="https://salarycheck.me/alabama-paycheck-calculator" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Alabama Paycheck Calculator",
              "description": "Calculate your Alabama paycheck and net pay with our free Alabama state tax calculator.",
              "url": "https://salarycheck.me/alabama-paycheck-calculator",
              "mainEntity": {
                "@type": "FinancialProduct",
                "name": "Alabama Paycheck Calculator",
                "description": "Calculate your Alabama paycheck and net pay with our free Alabama state tax calculator."
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="Alabama Paycheck Calculator" 
        description="Calculate your Alabama paycheck and net pay with our free Alabama state tax calculator."
        keywords="alabama paycheck calculator, alabama tax calculator, alabama salary calculator, alabama take-home pay, alabama withholding calculator, alabama wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Alabama" stateAbbreviation="AL" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Alabama Payroll Taxes</h2>
            <p className="mb-4">Alabama has a progressive state income tax system with rates ranging from 2% to 5%. The state does not have local income taxes.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Alabama State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rates: 2% to 5% depending on income</li>
              <li>Alabama offers various deductions and exemptions</li>
              <li>The state has its own standard deduction amounts</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Alabama Paycheck Information</h3>
            <p className="mb-4">In addition to state income tax, your Alabama paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AlabamaPaycheckCalculator;
