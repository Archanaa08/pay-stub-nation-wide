
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const KentuckyPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Kentucky Paycheck Calculator | Free KY Tax Calculator</title>
        <meta name="description" content="Calculate your Kentucky paycheck and net pay with our free Kentucky state tax calculator. Updated for 2025 tax rates." />
        <link rel="canonical" href="https://salarycheck.me/kentucky-paycheck-calculator" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Kentucky Paycheck Calculator | Free KY Tax Calculator" />
        <meta property="og:description" content="Calculate your Kentucky paycheck and net pay with our free Kentucky state tax calculator." />
        <meta property="og:url" content="https://salarycheck.me/kentucky-paycheck-calculator" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Kentucky Paycheck Calculator",
              "description": "Calculate your Kentucky paycheck and net pay with our free Kentucky state tax calculator.",
              "url": "https://salarycheck.me/kentucky-paycheck-calculator",
              "mainEntity": {
                "@type": "FinancialProduct",
                "name": "Kentucky Paycheck Calculator",
                "description": "Calculate your Kentucky paycheck and net pay with our free Kentucky state tax calculator."
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="Kentucky Paycheck Calculator" 
        description="Calculate your Kentucky paycheck and net pay with our free Kentucky state tax calculator."
        keywords="kentucky paycheck calculator, kentucky tax calculator, kentucky salary calculator, kentucky take-home pay, kentucky withholding calculator, kentucky wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Kentucky" stateAbbreviation="KY" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Kentucky Payroll Taxes</h2>
            <p className="mb-4">Kentucky has a progressive state income tax system with rates ranging from 2% to 5%. Some cities may also impose local occupational taxes.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Kentucky State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rates: 2% to 5% depending on income</li>
              <li>Many cities impose local occupational taxes on wages</li>
              <li>Kentucky offers various deductions and credits</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Kentucky Paycheck Information</h3>
            <p className="mb-4">In addition to state income tax, your Kentucky paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default KentuckyPaycheckCalculator;
