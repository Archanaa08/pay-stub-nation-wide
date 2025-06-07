
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
          
          <div className="mt-12 max-w-4xl mx-auto space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">About California Payroll Taxes</h2>
              <p className="mb-4 text-gray-700">California has one of the most complex tax systems in the United States, with progressive state income tax rates ranging from 1% to 13.3%, plus additional taxes like State Disability Insurance (SDI).</p>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">⚠️ High Tax State Alert</h3>
                <p className="text-orange-700">California has some of the highest state income tax rates in the nation. Understanding your deductions and tax planning strategies is crucial for maximizing your take-home pay.</p>
              </div>

              <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">California State Income Tax Brackets (2024)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mb-4">
                  <thead>
                    <tr className="bg-finance-light">
                      <th className="border border-gray-300 px-4 py-2 text-left">Income Range (Single)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Tax Rate</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Income Range (Married Filing Jointly)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$0 - $10,099</td>
                      <td className="border border-gray-300 px-4 py-2">1%</td>
                      <td className="border border-gray-300 px-4 py-2">$0 - $20,198</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$10,100 - $23,942</td>
                      <td className="border border-gray-300 px-4 py-2">2%</td>
                      <td className="border border-gray-300 px-4 py-2">$20,199 - $47,884</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$23,943 - $37,788</td>
                      <td className="border border-gray-300 px-4 py-2">4%</td>
                      <td className="border border-gray-300 px-4 py-2">$47,885 - $75,576</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$37,789 - $52,455</td>
                      <td className="border border-gray-300 px-4 py-2">6%</td>
                      <td className="border border-gray-300 px-4 py-2">$75,577 - $104,910</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$52,456 - $66,295</td>
                      <td className="border border-gray-300 px-4 py-2">8%</td>
                      <td className="border border-gray-300 px-4 py-2">$104,911 - $132,590</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$66,296 - $338,639</td>
                      <td className="border border-gray-300 px-4 py-2">9.3%</td>
                      <td className="border border-gray-300 px-4 py-2">$132,591 - $677,278</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$338,640 - $406,364</td>
                      <td className="border border-gray-300 px-4 py-2">10.3%</td>
                      <td className="border border-gray-300 px-4 py-2">$677,279 - $812,728</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$406,365 - $677,278</td>
                      <td className="border border-gray-300 px-4 py-2">11.3%</td>
                      <td className="border border-gray-300 px-4 py-2">$812,729 - $1,354,556</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">$677,279+</td>
                      <td className="border border-gray-300 px-4 py-2">12.3%</td>
                      <td className="border border-gray-300 px-4 py-2">$1,354,557+</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-gray-300 px-4 py-2">$1,000,000+</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>13.3%</strong></td>
                      <td className="border border-gray-300 px-4 py-2">$1,000,000+ (additional 1%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-semibold text-finance-secondary mt-6 mb-3">Additional California Taxes</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>State Disability Insurance (SDI):</strong> 0.9% on wages up to $153,164 (2024)</li>
                <li><strong>Employment Training Tax (ETT):</strong> Paid by employers, not employees</li>
                <li><strong>Standard Deduction:</strong> $5,202 (single), $10,404 (married filing jointly) for 2024</li>
                <li><strong>Mental Health Services Tax:</strong> Additional 1% on income over $1 million</li>
              </ul>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">How Your California Paycheck is Calculated</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-finance-accent pl-6">
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 1: Calculate Gross Pay</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-finance-primary">Regular Pay Calculation:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li><strong>Hourly:</strong> Hours worked × Hourly rate</li>
                        <li><strong>Salary:</strong> Annual salary ÷ Pay periods per year</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-finance-primary">California Overtime Rules:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li>Time and a half for hours over 8 in a day</li>
                        <li>Time and a half for hours over 40 in a week</li>
                        <li>Double time for hours over 12 in a day</li>
                        <li>Double time for work on the 7th consecutive day</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-finance-accent pl-6">
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 2: Pre-Tax Deductions</h3>
                  <p className="text-gray-700 mb-3">These reduce your taxable income for both federal and state taxes:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-finance-primary mb-2">Retirement Plans:</h4>
                      <ul className="list-disc pl-5 text-gray-700 text-sm">
                        <li>401(k), 403(b), 457 plans</li>
                        <li>CalPERS contributions (public employees)</li>
                        <li>CalSTRS contributions (teachers)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-finance-primary mb-2">Health & Benefits:</h4>
                      <ul className="list-disc pl-5 text-gray-700 text-sm">
                        <li>Health insurance premiums</li>
                        <li>HSA/FSA contributions</li>
                        <li>Dependent care assistance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-finance-accent pl-6">
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 3: Tax Withholdings</h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">Federal Income Tax</h4>
                      <p className="text-red-700 text-sm">Based on W-4 and federal tax brackets (10% to 37%)</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">California State Income Tax</h4>
                      <p className="text-blue-700 text-sm">Progressive rates from 1% to 13.3% based on income level</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">FICA Taxes</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li><strong>Social Security:</strong> 6.2% (up to wage base)</li>
                        <li><strong>Medicare:</strong> 1.45% (no limit)</li>
                        <li><strong>Additional Medicare:</strong> 0.9% (over $200K)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">California SDI</h4>
                      <p className="text-purple-700 text-sm">0.9% on wages up to $153,164 (provides disability and paid family leave)</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-finance-accent pl-6">
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Step 4: Post-Tax Deductions</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Roth retirement contributions</li>
                    <li>After-tax insurance premiums</li>
                    <li>Union dues</li>
                    <li>Wage garnishments</li>
                    <li>Employee stock purchase plans</li>
                  </ul>
                </div>

                <div className="bg-finance-light p-6 rounded-lg border-2 border-finance-accent">
                  <h3 className="text-xl font-semibold text-finance-primary mb-3">Your California Take-Home Pay</h3>
                  <div className="font-mono text-lg bg-white p-4 rounded border text-center">
                    Gross Pay - Pre-tax Deductions - All Taxes - Post-tax Deductions = <span className="text-green-600 font-bold">Net Pay</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">California Tax Planning Strategies</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">Minimize Tax Burden</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Maximize 401(k) contributions ($22,500 + $7,500 catch-up)</li>
                    <li>Use HSA for triple tax advantage</li>
                    <li>Consider traditional vs. Roth accounts</li>
                    <li>Take advantage of CA tax credits</li>
                    <li>Review withholdings regularly</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-finance-secondary mb-3">California-Specific Benefits</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>SDI provides paid family leave</li>
                    <li>Renter's credit for qualified taxpayers</li>
                    <li>Child and dependent care credit</li>
                    <li>Earned Income Tax Credit (CalEITC)</li>
                    <li>Young Child Tax Credit</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-4">California Employment & Tax Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="https://www.ftb.ca.gov/" target="_blank" rel="noopener noreferrer" 
                   className="block p-4 border border-gray-200 rounded-lg hover:bg-finance-light transition-colors">
                  <h3 className="font-semibold text-finance-accent mb-2">CA Franchise Tax Board</h3>
                  <p className="text-gray-600 text-sm">Official California tax information and services</p>
                </a>
                
                <a href="https://www.edd.ca.gov/" target="_blank" rel="noopener noreferrer"
                   className="block p-4 border border-gray-200 rounded-lg hover:bg-finance-light transition-colors">
                  <h3 className="font-semibold text-finance-accent mb-2">CA Employment Development</h3>
                  <p className="text-gray-600 text-sm">Unemployment, disability, and employment services</p>
                </a>

                <a href="https://www.dir.ca.gov/dlse/" target="_blank" rel="noopener noreferrer"
                   className="block p-4 border border-gray-200 rounded-lg hover:bg-finance-light transition-colors">
                  <h3 className="font-semibold text-finance-accent mb-2">Labor Standards Enforcement</h3>
                  <p className="text-gray-600 text-sm">Wage and hour laws, minimum wage information</p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CaliforniaPaycheckCalculator;
