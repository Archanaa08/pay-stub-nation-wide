
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const CaliforniaPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>California Paycheck Calculator | Free CA Tax Calculator</title>
        <meta name="description" content="Calculate your California paycheck and net pay with our free California state tax calculator. Updated for 2025 tax rates." />
        <link rel="canonical" href="https://salarycheck.me/california-paycheck-calculator" />
        
        <meta property="og:title" content="California Paycheck Calculator | Free CA Tax Calculator" />
        <meta property="og:description" content="Calculate your California paycheck and net pay with our free California state tax calculator." />
        <meta property="og:url" content="https://salarycheck.me/california-paycheck-calculator" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "California Paycheck Calculator",
              "description": "Calculate your California paycheck and net pay with our free California state tax calculator.",
              "url": "https://salarycheck.me/california-paycheck-calculator",
              "mainEntity": {
                "@type": "FinancialProduct",
                "name": "California Paycheck Calculator",
                "description": "Calculate your California paycheck and net pay with our free California state tax calculator."
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="California Paycheck Calculator" 
        description="Calculate your California paycheck and net pay with our free California state tax calculator."
        keywords="california paycheck calculator, california tax calculator, california salary calculator, california take-home pay, california withholding calculator, california wage calculator"
      >
        <div>
          <PaycheckCalculator stateName="California" stateAbbreviation="CA" />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About California Payroll Taxes</h2>
            <p className="mb-4">California has a progressive state income tax system with rates ranging from 1% to 13.3%. The state also has additional taxes like State Disability Insurance (SDI).</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">California State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rates: 1% to 13.3% depending on income</li>
              <li>State Disability Insurance (SDI): 0.9% on wages up to $153,164</li>
              <li>California offers various deductions and credits</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other California Paycheck Information</h3>
            <p className="mb-4">In addition to state income tax, your California paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CaliforniaPaycheckCalculator;
