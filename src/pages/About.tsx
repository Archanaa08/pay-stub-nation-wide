
import React from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  return (
    <Layout 
      title="About Paycheck Calculator" 
      description="Learn how our paycheck calculator works and get information on taxes, deductions, and paycheck terminology."
      keywords="paycheck calculator, how paycheck calculator works, salary calculator, tax glossary, paycheck terms"
    >
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="how-it-works" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
            <TabsTrigger value="about-taxes">About Taxes</TabsTrigger>
            <TabsTrigger value="glossary">Glossary</TabsTrigger>
          </TabsList>
          
          <TabsContent value="how-it-works" className="animate-fade-in">
            <div className="space-y-8">
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-finance-primary mb-4">How Our Paycheck Calculator Works</h2>
                <p className="mb-4">Our paycheck calculator provides an estimate of your take-home pay based on your salary, tax withholding, and other deductions. Here's how we determine your net pay:</p>
                
                <div className="space-y-6 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-finance-light text-finance-primary flex items-center justify-center font-bold text-xl">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-finance-secondary">Calculate Gross Pay</h3>
                      <p className="text-gray-600 mt-1">We determine your gross pay based on your hourly rate or salary and pay frequency. For hourly workers, we multiply your hourly rate by the hours worked.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-finance-light text-finance-primary flex items-center justify-center font-bold text-xl">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-finance-secondary">Apply Federal Taxes</h3>
                      <p className="text-gray-600 mt-1">We calculate federal income tax withholding based on your filing status, pay frequency, and allowances. We also calculate Social Security tax (6.2%) and Medicare tax (1.45%).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-finance-light text-finance-primary flex items-center justify-center font-bold text-xl">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-finance-secondary">Apply State Taxes</h3>
                      <p className="text-gray-600 mt-1">We calculate state income tax based on your selected state's tax rates and rules. Some states have flat rates, while others have progressive tax brackets.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-finance-light text-finance-primary flex items-center justify-center font-bold text-xl">4</div>
                    <div>
                      <h3 className="text-xl font-semibold text-finance-secondary">Calculate Net Pay</h3>
                      <p className="text-gray-600 mt-1">Finally, we subtract all taxes and deductions from your gross pay to determine your estimated take-home pay.</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-finance-primary mb-4">Important Notes About Our Calculations</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Our calculator provides estimates only and should not be used for tax filing purposes.</li>
                  <li>Tax laws and withholding tables change regularly. We strive to keep our calculator updated with the latest information.</li>
                  <li>The calculator does not account for all possible deductions and credits.</li>
                  <li>For the most accurate paycheck calculation, consult with a tax professional.</li>
                </ul>
              </section>
            </div>
          </TabsContent>
          
          <TabsContent value="about-taxes" className="animate-fade-in">
            <div className="space-y-8">
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-finance-primary mb-4">Understanding Paycheck Taxes</h2>
                <p className="mb-6">Several types of taxes may be withheld from your paycheck. Here's a breakdown of the main taxes affecting your take-home pay:</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-finance-secondary mb-2">Federal Income Tax</h3>
                    <p className="text-gray-600">Federal income tax is a progressive tax system with rates ranging from 10% to 37%. Your withholding depends on your income, filing status, and allowances claimed on your W-4 form.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-finance-secondary mb-2">State Income Tax</h3>
                    <p className="text-gray-600">Most states have their own income tax, with rates and rules varying by state. Some states have a flat tax rate, while others have progressive tax brackets. A few states (Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, and Wyoming) do not have state income tax.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-finance-secondary mb-2">Local Income Tax</h3>
                    <p className="text-gray-600">Some cities, counties, and municipalities levy their own income taxes. These are typically a percentage of your income or a flat fee.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-finance-secondary mb-2">FICA Taxes (Social Security and Medicare)</h3>
                    <p className="text-gray-600">The Federal Insurance Contributions Act (FICA) requires these two taxes:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>Social Security tax:</strong> 6.2% of your wages up to the annual wage base limit ($147,000 in 2022)</li>
                      <li><strong>Medicare tax:</strong> 1.45% of all your wages, with an additional 0.9% for high-income earners</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-finance-primary mb-4">Other Paycheck Deductions</h2>
                <p className="mb-4">Beyond taxes, other deductions may affect your take-home pay:</p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="retirement">
                    <AccordionTrigger>Retirement Contributions</AccordionTrigger>
                    <AccordionContent>
                      Contributions to 401(k), 403(b), or similar employer-sponsored retirement plans are typically deducted pre-tax, reducing your taxable income.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="health">
                    <AccordionTrigger>Health Insurance Premiums</AccordionTrigger>
                    <AccordionContent>
                      If you participate in an employer-sponsored health insurance plan, your portion of the premium is usually deducted from your paycheck.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="fsa-hsa">
                    <AccordionTrigger>FSA/HSA Contributions</AccordionTrigger>
                    <AccordionContent>
                      Contributions to Flexible Spending Accounts (FSA) or Health Savings Accounts (HSA) are typically pre-tax deductions.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="life-disability">
                    <AccordionTrigger>Life and Disability Insurance</AccordionTrigger>
                    <AccordionContent>
                      Premiums for employer-sponsored life or disability insurance may be deducted from your paycheck.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="garnishments">
                    <AccordionTrigger>Wage Garnishments</AccordionTrigger>
                    <AccordionContent>
                      Court-ordered deductions like child support, alimony, or repayment of debts may be withheld from your paycheck.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
            </div>
          </TabsContent>
          
          <TabsContent value="glossary" className="animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-finance-primary mb-6">Paycheck and Tax Terminology</h2>
              
              <div className="divide-y divide-gray-200">
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">Gross Pay</h3>
                  <p className="text-gray-600 mt-1">The total amount of money you earn before taxes and deductions are withheld.</p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">Net Pay</h3>
                  <p className="text-gray-600 mt-1">The amount of money you take home after all taxes and deductions are withheld, also known as "take-home pay."</p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">W-4 Form</h3>
                  <p className="text-gray-600 mt-1">The IRS form that employees fill out to determine federal income tax withholding.</p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">Withholding Allowance</h3>
                  <p className="text-gray-600 mt-1">A value that determines how much income tax is withheld from your paycheck. More allowances mean less tax withheld.</p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">FICA (Federal Insurance Contributions Act)</h3>
                  <p className="text-gray-600 mt-1">The federal law that requires employers to withhold Social Security and Medicare taxes from employees' wages.</p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">Wage Base Limit</h3>
                  <p className="text-gray-600 mt-1">The maximum amount of earnings subject to Social Security tax for a given year.</p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">Tax Bracket</h3>
                  <p className="text-gray-600 mt-1">The range of incomes taxed at a specific rate. The U.S. has a progressive tax system with higher incomes taxed at higher rates.</p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">Standard Deduction</h3>
                  <p className="text-gray-600 mt-1">A fixed amount that reduces your taxable income, set by the federal government and varying by filing status.</p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">Marginal Tax Rate</h3>
                  <p className="text-gray-600 mt-1">The percentage of tax applied to your income for each tax bracket in which you qualify.</p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">Effective Tax Rate</h3>
                  <p className="text-gray-600 mt-1">The percentage of your total income that you actually pay in taxes after deductions and credits.</p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">Pre-tax Deduction</h3>
                  <p className="text-gray-600 mt-1">Money taken from your gross pay before taxes are calculated, reducing your taxable income.</p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-semibold text-finance-secondary">Post-tax Deduction</h3>
                  <p className="text-gray-600 mt-1">Money taken from your pay after taxes have been calculated and withheld.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default About;
