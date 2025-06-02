
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const FloridaPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Florida Paycheck Calculator | Free FL Tax Calculator</title>
        <meta name="description" content="Calculate your Florida paycheck and take-home pay with our free calculator. Florida has no state income tax." />
        <link rel="canonical" href="https://salarycheck.me/florida-paycheck-calculator" />
        
        <meta property="og:title" content="Florida Paycheck Calculator | Free FL Tax Calculator" />
        <meta property="og:description" content="Calculate your Florida paycheck and take-home pay with our free calculator. Florida has no state income tax." />
        <meta property="og:url" content="https://salarycheck.me/florida-paycheck-calculator" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Florida Paycheck Calculator",
              "description": "Calculate your Florida paycheck and take-home pay with our free calculator. Florida has no state income tax.",
              "url": "https://salarycheck.me/florida-paycheck-calculator",
              "mainEntity": {
                "@type": "FinancialProduct",
                "name": "Florida Paycheck Calculator",
                "description": "Calculate your Florida paycheck and take-home pay with our free calculator. Florida has no state income tax."
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="Florida Paycheck Calculator" 
        description="Calculate your Florida paycheck and take-home pay with our free calculator. Florida has no state income tax."
        keywords="florida paycheck calculator, florida tax calculator, florida salary calculator, florida take-home pay, florida withholding calculator, florida wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Florida" stateAbbreviation="FL" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Florida Payroll Taxes</h2>
            <p className="mb-4">Florida is one of the few states that does not collect income tax on wages and salaries. This means your take-home pay will be higher in Florida compared to most other states.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Florida State Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rate: None (0%)</li>
              <li>Florida does not have local income taxes</li>
              <li>The state relies on sales tax and tourism taxes for revenue</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Florida Paycheck Information</h3>
            <p className="mb-4">While Florida does not collect state income tax, your Florida paycheck will still have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FloridaPaycheckCalculator;
