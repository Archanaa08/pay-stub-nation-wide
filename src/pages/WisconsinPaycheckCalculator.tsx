
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const WisconsinPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Wisconsin Paycheck Calculator | Free WI Tax Calculator</title>
        <meta name="description" content="Calculate your Wisconsin paycheck and take-home pay with our free Wisconsin state tax calculator. Updated for 2025 tax rates." />
        <link rel="canonical" href="https://salarycheck.me/wisconsin-paycheck-calculator" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Wisconsin Paycheck Calculator | Free WI Tax Calculator" />
        <meta property="og:description" content="Calculate your Wisconsin paycheck and take-home pay with our free Wisconsin state tax calculator." />
        <meta property="og:url" content="https://salarycheck.me/wisconsin-paycheck-calculator" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Wisconsin Paycheck Calculator",
              "description": "Calculate your Wisconsin paycheck and take-home pay with our free Wisconsin state tax calculator.",
              "url": "https://salarycheck.me/wisconsin-paycheck-calculator",
              "mainEntity": {
                "@type": "FinancialProduct",
                "name": "Wisconsin Paycheck Calculator",
                "description": "Calculate your Wisconsin paycheck and take-home pay with our free Wisconsin state tax calculator."
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="Wisconsin Paycheck Calculator" 
        description="Calculate your Wisconsin paycheck and take-home pay with our free Wisconsin state tax calculator."
        keywords="wisconsin paycheck calculator, wisconsin tax calculator, wisconsin salary calculator, wisconsin take-home pay, wisconsin withholding calculator, wisconsin wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Wisconsin" stateAbbreviation="WI" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Wisconsin Payroll Taxes</h2>
            <p className="mb-4">Wisconsin has a progressive state income tax system with rates ranging from 3.54% to 7.65%. Some counties may also impose local income taxes.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Wisconsin State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rates: 3.54% to 7.65% depending on income</li>
              <li>Some counties may impose additional local income taxes</li>
              <li>Wisconsin offers various deductions and credits</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Wisconsin Paycheck Information</h3>
            <p className="mb-4">In addition to state income tax, your Wisconsin paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WisconsinPaycheckCalculator;
