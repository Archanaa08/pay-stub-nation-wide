
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
          
          <div className="mt-12 max-w-4xl mx-auto space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">About Kansas Payroll Taxes</h2>
              <p className="mb-4 text-gray-700">Kansas has a progressive state income tax system with rates ranging from 3.1% to 5.7%. Some municipalities may also impose local income taxes.</p>
              
              <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Kansas State Income Tax Details</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mb-4">
                  <thead>
                    <tr className="bg-finance-light">
                      <th className="border border-gray-300 px-4 py-2 text-left">Income Range (Single)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$0 - $15,000</td>
                      <td className="border border-gray-300 px-4 py-2">3.10%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$15,001 - $30,000</td>
                      <td className="border border-gray-300 px-4 py-2">5.25%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$30,001+</td>
                      <td className="border border-gray-300 px-4 py-2">5.70%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Standard deduction: $3,500 for single filers, $8,000 for married filing jointly (2024)</li>
                <li>Personal exemption: $2,250 per person</li>
                <li>Some cities and counties may impose local income taxes ranging from 0.5% to 1.75%</li>
                <li>Kansas offers various deductions and exemptions including retirement income exclusions</li>
              </ul>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">How Your Kansas Paycheck is Calculated</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 1: Gross Pay Calculation</h3>
                  <p className="text-gray-700 mb-2">Your gross pay depends on your payment structure:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Hourly:</strong> Hours worked × Hourly rate (+ overtime if applicable)</li>
                    <li><strong>Salary:</strong> Annual salary ÷ Number of pay periods per year</li>
                    <li><strong>Overtime:</strong> Hours over 40 × (Hourly rate × 1.5)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 2: Pre-Tax Deductions</h3>
                  <p className="text-gray-700 mb-2">Common pre-tax deductions that reduce your taxable income:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>401(k) contributions</li>
                    <li>Health insurance premiums</li>
                    <li>Dental and vision insurance</li>
                    <li>Flexible Spending Account (FSA) contributions</li>
                    <li>Health Savings Account (HSA) contributions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 3: Tax Calculations</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-finance-primary">Federal Income Tax</h4>
                      <p className="text-gray-700">Based on IRS tax brackets and your W-4 allowances</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-finance-primary">Kansas State Income Tax</h4>
                      <p className="text-gray-700">Progressive rates from 3.1% to 5.7% based on income level</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-finance-primary">FICA Taxes</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li>Social Security: 6.2% (on wages up to $160,200 in 2023)</li>
                        <li>Medicare: 1.45% (no wage limit)</li>
                        <li>Additional Medicare: 0.9% on wages over $200,000</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 4: Post-Tax Deductions</h3>
                  <p className="text-gray-700 mb-2">Deductions taken after taxes are calculated:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Roth 401(k) contributions</li>
                    <li>After-tax insurance premiums</li>
                    <li>Union dues</li>
                    <li>Charitable contributions</li>
                    <li>Garnishments or child support</li>
                  </ul>
                </div>

                <div className="bg-finance-light p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Final Result: Net Pay</h3>
                  <p className="text-gray-700 font-medium">
                    Gross Pay - Pre-tax Deductions - All Taxes - Post-tax Deductions = Take-Home Pay
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">Kansas Paycheck Tips</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Maximizing Your Take-Home Pay</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Contribute to pre-tax retirement accounts</li>
                    <li>Use pre-tax benefits like health insurance</li>
                    <li>Consider HSA contributions if eligible</li>
                    <li>Review your W-4 allowances annually</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Important Considerations</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Local taxes may apply in some Kansas municipalities</li>
                    <li>Bonus payments may be taxed differently</li>
                    <li>Kansas offers retirement income exclusions</li>
                    <li>Check for available state tax credits</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">Kansas Tax Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="https://www.ksrevenue.gov/" target="_blank" rel="noopener noreferrer" 
                   className="block p-4 border border-gray-200 rounded-lg hover:bg-finance-light transition-colors">
                  <h3 className="font-semibold text-finance-accent mb-2">Kansas Department of Revenue</h3>
                  <p className="text-gray-600 text-sm">Official state tax information and forms</p>
                </a>
                
                <a href="https://www.ksrevenue.gov/taxtypes.html" target="_blank" rel="noopener noreferrer"
                   className="block p-4 border border-gray-200 rounded-lg hover:bg-finance-light transition-colors">
                  <h3 className="font-semibold text-finance-accent mb-2">Kansas Tax Types</h3>
                  <p className="text-gray-600 text-sm">Information about different Kansas taxes</p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default KansasPaycheckCalculator;
