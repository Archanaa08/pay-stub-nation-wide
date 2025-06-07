
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
          
          <div className="mt-12 max-w-4xl mx-auto space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">About Florida Payroll Taxes</h2>
              <p className="mb-4 text-gray-700">Florida is one of the few states that does not collect income tax on wages and salaries. This means your take-home pay will be higher in Florida compared to most other states.</p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">🌴 Florida Tax Advantage</h3>
                <p className="text-green-700">With no state income tax, Florida residents keep more of their paycheck compared to residents of high-tax states. This can result in thousands of dollars in savings annually!</p>
              </div>

              <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Florida State Tax Details</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>State income tax rate:</strong> None (0%)</li>
                <li><strong>Local income taxes:</strong> None</li>
                <li><strong>Sales tax:</strong> 6% state rate (varies by county, up to 8.5% total)</li>
                <li><strong>Property tax:</strong> Varies by county and municipality</li>
                <li><strong>Unemployment tax:</strong> Paid by employers, not employees</li>
              </ul>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">How Your Florida Paycheck is Calculated</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 1: Calculate Gross Pay</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">Your gross pay calculation depends on how you're paid:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li><strong>Hourly employees:</strong> Hours worked × Hourly rate + Overtime</li>
                      <li><strong>Salaried employees:</strong> Annual salary ÷ Pay periods per year</li>
                      <li><strong>Overtime calculation:</strong> Hours over 40 × (Regular rate × 1.5)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 2: Pre-Tax Deductions</h3>
                  <p className="text-gray-700 mb-3">These reduce your taxable income:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>401(k) contributions</li>
                      <li>403(b) contributions</li>
                      <li>Traditional IRA contributions</li>
                      <li>Health insurance premiums</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dental insurance premiums</li>
                      <li>Vision insurance premiums</li>
                      <li>HSA contributions</li>
                      <li>FSA contributions</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 3: Federal Tax Withholdings</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-finance-accent pl-4">
                      <h4 className="font-medium text-finance-primary mb-2">Federal Income Tax</h4>
                      <p className="text-gray-700">Based on your W-4 form and federal tax brackets (10% to 37% for 2024)</p>
                    </div>
                    
                    <div className="border-l-4 border-finance-accent pl-4">
                      <h4 className="font-medium text-finance-primary mb-2">FICA Taxes (Mandatory)</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li><strong>Social Security:</strong> 6.2% on wages up to $160,200 (2023 limit)</li>
                        <li><strong>Medicare:</strong> 1.45% on all wages</li>
                        <li><strong>Additional Medicare:</strong> 0.9% on wages over $200,000</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 4: Post-Tax Deductions</h3>
                  <p className="text-gray-700 mb-2">Taken after taxes are calculated:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Roth IRA/401(k) contributions</li>
                    <li>Life insurance premiums (if over $50,000)</li>
                    <li>Disability insurance premiums</li>
                    <li>Union dues</li>
                    <li>Charitable contributions</li>
                    <li>Wage garnishments</li>
                  </ul>
                </div>

                <div className="bg-finance-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-finance-primary mb-3">Your Florida Take-Home Pay</h3>
                  <div className="text-lg text-gray-700">
                    <p className="mb-2"><strong>Formula:</strong></p>
                    <p className="font-mono bg-white p-3 rounded border">
                      Gross Pay - Pre-tax Deductions - Federal Taxes - Post-tax Deductions = Net Pay
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">Florida vs. Other States Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-finance-light">
                      <th className="border border-gray-300 px-4 py-2 text-left">Annual Salary</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Florida (0% tax)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">California (up to 13.3%)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">New York (up to 10.9%)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Annual Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$50,000</td>
                      <td className="border border-gray-300 px-4 py-2">$0</td>
                      <td className="border border-gray-300 px-4 py-2">~$1,500</td>
                      <td className="border border-gray-300 px-4 py-2">~$2,200</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">$1,500-$2,200</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$75,000</td>
                      <td className="border border-gray-300 px-4 py-2">$0</td>
                      <td className="border border-gray-300 px-4 py-2">~$3,000</td>
                      <td className="border border-gray-300 px-4 py-2">~$4,100</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">$3,000-$4,100</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$100,000</td>
                      <td className="border border-gray-300 px-4 py-2">$0</td>
                      <td className="border border-gray-300 px-4 py-2">~$4,500</td>
                      <td className="border border-gray-300 px-4 py-2">~$6,200</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">$4,500-$6,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-2">*Estimates based on state income tax only, actual savings may vary</p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">Maximizing Your Florida Paycheck</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Smart Tax Strategies</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Maximize 401(k) contributions ($22,500 limit in 2023)</li>
                    <li>Use HSA if eligible ($3,650 individual/$7,300 family in 2023)</li>
                    <li>Consider Roth IRA for tax-free retirement growth</li>
                    <li>Take advantage of pre-tax insurance premiums</li>
                    <li>Optimize your federal W-4 allowances</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Florida-Specific Benefits</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>No state tax on retirement income</li>
                    <li>No inheritance or estate tax</li>
                    <li>Homestead exemption reduces property taxes</li>
                    <li>No tax on 401(k) or IRA withdrawals</li>
                    <li>Lower overall tax burden vs. most states</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">Florida Tax and Employment Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="https://floridarevenue.com/" target="_blank" rel="noopener noreferrer" 
                   className="block p-4 border border-gray-200 rounded-lg hover:bg-finance-light transition-colors">
                  <h3 className="font-semibold text-finance-accent mb-2">FL Dept of Revenue</h3>
                  <p className="text-gray-600 text-sm">Official Florida tax information</p>
                </a>
                
                <a href="https://www.floridajobs.org/" target="_blank" rel="noopener noreferrer"
                   className="block p-4 border border-gray-200 rounded-lg hover:bg-finance-light transition-colors">
                  <h3 className="font-semibold text-finance-accent mb-2">FloridaJobs.org</h3>
                  <p className="text-gray-600 text-sm">Employment and career resources</p>
                </a>

                <a href="https://www.dol.gov/agencies/whd/minimum-wage/state" target="_blank" rel="noopener noreferrer"
                   className="block p-4 border border-gray-200 rounded-lg hover:bg-finance-light transition-colors">
                  <h3 className="font-semibold text-finance-accent mb-2">Federal Labor Standards</h3>
                  <p className="text-gray-600 text-sm">Minimum wage and overtime rules</p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FloridaPaycheckCalculator;
