
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import PaycheckCalculator from '@/components/PaycheckCalculator';

const ColoradoPaycheckCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Colorado Paycheck Calculator | Free CO Tax Calculator</title>
        <meta name="description" content="Free Colorado paycheck calculator to estimate your take-home pay with accurate Colorado state tax calculations. Updated for 2025 tax rates." />
        <link rel="canonical" href="https://salarycheck.me/colorado-paycheck-calculator" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Colorado Paycheck Calculator | Free CO Tax Calculator" />
        <meta property="og:description" content="Calculate your Colorado paycheck with our free calculator. Accurate take-home pay estimation with Colorado state taxes included." />
        <meta property="og:url" content="https://salarycheck.me/colorado-paycheck-calculator" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Colorado Paycheck Calculator",
              "description": "Free Colorado paycheck calculator to estimate your take-home pay with accurate Colorado state tax calculations.",
              "url": "https://salarycheck.me/colorado-paycheck-calculator",
              "mainEntity": {
                "@type": "FinancialProduct",
                "name": "Colorado Paycheck Calculator",
                "description": "Calculate your Colorado paycheck with our free calculator. Accurate take-home pay estimation with Colorado state taxes included."
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="Colorado Paycheck Calculator" 
        description="Free Colorado paycheck calculator to estimate your take-home pay with accurate Colorado state tax calculations."
        keywords="colorado paycheck calculator, colorado tax calculator, colorado salary calculator, colorado take-home pay, colorado withholding calculator, colorado wage calculator"
      >
        <div className="w-full">
          <PaycheckCalculator stateName="Colorado" stateAbbreviation="CO" />
          
          <div className="mt-12 max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-finance-primary mb-4">About Colorado Payroll Taxes</h2>
            <p className="mb-4">Colorado has a flat state income tax rate of 4.40%. The state does not have local income taxes.</p>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Colorado State Income Tax Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>State income tax rate: 4.40% (flat rate)</li>
              <li>Colorado uses federal taxable income as the starting point for state income taxes</li>
              <li>The state offers various credits and deductions</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Other Colorado Paycheck Information</h3>
            <p className="mb-4">In addition to state income tax, your Colorado paycheck will have deductions for federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%).</p>
            
            <div className="my-8 p-4 bg-finance-light rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-finance-secondary mb-3">Colorado Tax Resources</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <a href="https://tax.colorado.gov/" target="_blank" rel="noopener noreferrer" className="text-finance-accent hover:underline">
                    Colorado Department of Revenue
                  </a>
                </li>
                <li>
                  <a href="https://tax.colorado.gov/individual-income-tax" target="_blank" rel="noopener noreferrer" className="text-finance-accent hover:underline">
                    Colorado Individual Income Tax Information
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ColoradoPaycheckCalculator;
