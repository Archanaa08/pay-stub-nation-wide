
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
          
          <div className="mt-12 max-w-4xl mx-auto space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">About Texas Payroll Taxes</h2>
              <p className="mb-4 text-gray-700">Texas is one of the few states that does not collect income tax on wages and salaries. This means your take-home pay will be higher in Texas compared to most other states.</p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">🤠 Texas Tax Benefits</h3>
                <p className="text-blue-700">Texas residents enjoy significant tax savings with no state income tax. The state constitution actually prohibits personal income taxes, making this benefit permanent!</p>
              </div>

              <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Texas State Tax Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-finance-primary mb-2">What Texas DOESN'T Tax:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Wages and salaries (0% income tax)</li>
                    <li>Retirement income</li>
                    <li>Social Security benefits</li>
                    <li>Military retirement pay</li>
                    <li>Inheritance</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-finance-primary mb-2">Revenue Sources:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Sales tax (6.25% state + local)</li>
                    <li>Property taxes</li>
                    <li>Business franchise tax</li>
                    <li>Motor vehicle taxes</li>
                    <li>Oil and gas severance taxes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">Step-by-Step Texas Paycheck Calculation</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-finance-accent pl-6">
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 1: Start with Gross Pay</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-finance-primary">For Hourly Employees:</h4>
                      <p className="text-gray-700">Regular hours × Hourly rate + Overtime hours × (Hourly rate × 1.5)</p>
                      <div className="bg-gray-50 p-3 rounded mt-2">
                        <p className="text-sm text-gray-600"><strong>Example:</strong> 40 hours × $20/hour + 5 overtime hours × $30/hour = $950</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-finance-primary">For Salaried Employees:</h4>
                      <p className="text-gray-700">Annual salary ÷ Number of pay periods per year</p>
                      <div className="bg-gray-50 p-3 rounded mt-2">
                        <p className="text-sm text-gray-600"><strong>Example:</strong> $60,000 ÷ 26 pay periods = $2,307.69 per paycheck</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-finance-accent pl-6">
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 2: Subtract Pre-Tax Deductions</h3>
                  <p className="text-gray-700 mb-3">These deductions reduce your taxable income:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-finance-primary mb-2">Retirement Contributions:</h4>
                      <ul className="list-disc pl-5 text-gray-700 text-sm">
                        <li>401(k) contributions</li>
                        <li>403(b) contributions</li>
                        <li>457 plan contributions</li>
                        <li>SIMPLE IRA contributions</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-finance-primary mb-2">Health & Insurance:</h4>
                      <ul className="list-disc pl-5 text-gray-700 text-sm">
                        <li>Health insurance premiums</li>
                        <li>HSA contributions</li>
                        <li>FSA contributions</li>
                        <li>Dental/Vision insurance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-finance-accent pl-6">
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 3: Calculate Federal Taxes</h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">Federal Income Tax</h4>
                      <p className="text-red-700 text-sm">Based on your W-4 form and federal tax brackets (2024 rates: 10%, 12%, 22%, 24%, 32%, 35%, 37%)</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">FICA Taxes (Social Security & Medicare)</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li><strong>Social Security:</strong> 6.2% on wages up to $160,200 (2023)</li>
                        <li><strong>Medicare:</strong> 1.45% on all wages</li>
                        <li><strong>Additional Medicare:</strong> 0.9% on wages over $200,000</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">Texas State Income Tax</h4>
                      <p className="text-green-700 font-semibold">$0 - No state income tax! 🎉</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-finance-accent pl-6">
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 4: Post-Tax Deductions</h3>
                  <p className="text-gray-700 mb-2">Deductions taken after taxes:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Roth 401(k)/IRA contributions</li>
                    <li>After-tax insurance premiums</li>
                    <li>Union dues</li>
                    <li>Charitable payroll deductions</li>
                    <li>Employee stock purchase plans</li>
                  </ul>
                </div>

                <div className="bg-finance-light p-6 rounded-lg border-2 border-finance-accent">
                  <h3 className="text-xl font-semibold text-finance-primary mb-3">Your Texas Net Pay</h3>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-finance-secondary mb-2">Final Calculation:</div>
                    <div className="font-mono text-lg bg-white p-4 rounded border">
                      Gross Pay - Pre-tax Deductions - Federal Taxes - Post-tax Deductions = <span className="text-green-600 font-bold">Take-Home Pay</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">Texas Tax Savings Comparison</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-finance-secondary mb-3">Annual Tax Savings vs High-Tax States</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-finance-light">
                        <th className="border border-gray-300 px-4 py-2 text-left">Annual Income</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Texas</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">California</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">New York</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Your Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">$40,000</td>
                        <td className="border border-gray-300 px-4 py-2">$0</td>
                        <td className="border border-gray-300 px-4 py-2">~$1,000</td>
                        <td className="border border-gray-300 px-4 py-2">~$1,800</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">$1,000-$1,800</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">$60,000</td>
                        <td className="border border-gray-300 px-4 py-2">$0</td>
                        <td className="border border-gray-300 px-4 py-2">~$2,400</td>
                        <td className="border border-gray-300 px-4 py-2">~$3,500</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">$2,400-$3,500</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">$80,000</td>
                        <td className="border border-gray-300 px-4 py-2">$0</td>
                        <td className="border border-gray-300 px-4 py-2">~$3,800</td>
                        <td className="border border-gray-300 px-4 py-2">~$5,200</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">$3,800-$5,200</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">$120,000</td>
                        <td className="border border-gray-300 px-4 py-2">$0</td>
                        <td className="border border-gray-300 px-4 py-2">~$7,200</td>
                        <td className="border border-gray-300 px-4 py-2">~$9,000</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">$7,200-$9,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">Maximize Your Texas Paycheck</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Federal Tax Optimization</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Maximize 401(k) contributions ($22,500 + $7,500 catch-up if 50+)</li>
                    <li>Use HSA triple tax advantage ($3,650/$7,300 limits)</li>
                    <li>Consider traditional vs. Roth retirement accounts</li>
                    <li>Optimize W-4 withholdings to avoid overpaying</li>
                    <li>Take advantage of employer benefits</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Texas-Specific Advantages</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>No tax on retirement withdrawals</li>
                    <li>No estate or inheritance taxes</li>
                    <li>Homestead exemptions reduce property taxes</li>
                    <li>No tax on capital gains (federal only)</li>
                    <li>Business-friendly tax environment</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">Texas Employment & Tax Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="https://comptroller.texas.gov/" target="_blank" rel="noopener noreferrer" 
                   className="block p-4 border border-gray-200 rounded-lg hover:bg-finance-light transition-colors">
                  <h3 className="font-semibold text-finance-accent mb-2">Texas Comptroller</h3>
                  <p className="text-gray-600 text-sm">Official Texas tax information and services</p>
                </a>
                
                <a href="https://www.twc.texas.gov/" target="_blank" rel="noopener noreferrer"
                   className="block p-4 border border-gray-200 rounded-lg hover:bg-finance-light transition-colors">
                  <h3 className="font-semibold text-finance-accent mb-2">Texas Workforce Commission</h3>
                  <p className="text-gray-600 text-sm">Employment, unemployment, and career services</p>
                </a>

                <a href="https://www.dol.gov/agencies/whd/state/minimum-wage/tipped" target="_blank" rel="noopener noreferrer"
                   className="block p-4 border border-gray-200 rounded-lg hover:bg-finance-light transition-colors">
                  <h3 className="font-semibold text-finance-accent mb-2">Minimum Wage Info</h3>
                  <p className="text-gray-600 text-sm">Current Texas minimum wage and labor standards</p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TexasPaycheckCalculator;
