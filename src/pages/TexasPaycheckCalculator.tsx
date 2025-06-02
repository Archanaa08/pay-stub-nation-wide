
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const TexasPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Texas Paycheck Calculator | Free TX Tax Calculator</title>
        <meta name="description" content="Calculate your Texas paycheck and take-home pay with our free calculator. Texas has no state income tax." />
        <link rel="canonical" href="https://salarycheck.me/texas-paycheck-calculator" />
        
        <meta property="og:title" content="Texas Paycheck Calculator | Free TX Tax Calculator" />
        <meta property="og:description" content="Calculate your Texas paycheck and take-home pay with our free calculator. Texas has no state income tax." />
        <meta property="og:url" content="https://salarycheck.me/texas-paycheck-calculator" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Texas Paycheck Calculator",
              "description": "Calculate your Texas paycheck and take-home pay with our free calculator. Texas has no state income tax.",
              "url": "https://salarycheck.me/texas-paycheck-calculator",
              "mainEntity": {
                "@type": "FinancialProduct",
                "name": "Texas Paycheck Calculator",
                "description": "Calculate your Texas paycheck and take-home pay with our free calculator. Texas has no state income tax."
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="Texas Paycheck Calculator" 
        description="Calculate your Texas paycheck and take-home pay with our free calculator. Texas has no state income tax."
        keywords="texas paycheck calculator, texas tax calculator, texas salary calculator, texas take-home pay, texas withholding calculator, texas wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Texas" stateAbbreviation="TX" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Texas Payroll Taxes</h2>
            <p className="mb-4">Texas is one of the few states that does not collect income tax on wages and salaries. This means your take-home pay will be higher in Texas compared to most other states.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Texas State Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rate: None (0%)</li>
              <li>Texas does not have local income taxes</li>
              <li>The state relies on sales tax and property taxes for revenue</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Texas Paycheck Information</h3>
            <p className="mb-4">While Texas does not collect state income tax, your Texas paycheck will still have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TexasPaycheckCalculator;
