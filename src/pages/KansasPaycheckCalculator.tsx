
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const KansasPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Kansas Paycheck Calculator | Free KS Tax Calculator</title>
        <meta name="description" content="Free Kansas paycheck calculator to estimate your take-home pay with accurate Kansas state tax calculations. Updated for 2025 tax rates." />
        <link rel="canonical" href="https://salarycheck.me/kansas-paycheck-calculator" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Kansas Paycheck Calculator | Free KS Tax Calculator" />
        <meta property="og:description" content="Free Kansas paycheck calculator to estimate your take-home pay with accurate Kansas state tax calculations." />
        <meta property="og:url" content="https://salarycheck.me/kansas-paycheck-calculator" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Kansas Paycheck Calculator",
              "description": "Free Kansas paycheck calculator to estimate your take-home pay with accurate Kansas state tax calculations.",
              "url": "https://salarycheck.me/kansas-paycheck-calculator",
              "mainEntity": {
                "@type": "FinancialProduct",
                "name": "Kansas Paycheck Calculator",
                "description": "Free Kansas paycheck calculator to estimate your take-home pay with accurate Kansas state tax calculations."
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="Kansas Paycheck Calculator" 
        description="Free Kansas paycheck calculator to estimate your take-home pay with accurate Kansas state tax calculations."
        keywords="kansas paycheck calculator, kansas tax calculator, kansas salary calculator, kansas take-home pay, kansas withholding calculator, kansas wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="Kansas" stateAbbreviation="KS" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Kansas Payroll Taxes</h2>
            <p className="mb-4">Kansas has a progressive state income tax system with rates ranging from 3.1% to 5.7%. Some municipalities may also impose local income taxes.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Kansas State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rates: 3.1% to 5.7% depending on income</li>
              <li>Some cities and counties may impose local income taxes</li>
              <li>Kansas offers various deductions and exemptions</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Kansas Paycheck Information</h3>
            <p className="mb-4">In addition to state income tax, your Kansas paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default KansasPaycheckCalculator;
