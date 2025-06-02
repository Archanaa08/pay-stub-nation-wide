
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import StateCard from '@/components/StateCard';
import { states } from '@/utils/stateData';
import { Calculator, DollarSign, Percent, Clock } from 'lucide-react';
import FloatingCalculatorButton from '@/components/FloatingCalculatorButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Free Paycheck Calculator 2025 | State Tax Calculator for All 50 States</title>
        <meta name="description" content="Free paycheck calculator for all 50 states. Calculate your take-home pay, tax withholdings, and net salary with accurate federal and state tax calculations. Updated for 2025 tax rates and completely free to use." />
        <meta name="keywords" content="free paycheck calculator, state tax calculator, salary calculator, take-home pay calculator, tax withholding calculator, net pay calculator, federal tax calculator, state income tax calculator, payroll calculator 2025" />
        <link rel="canonical" href="https://salarycheck.me/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Paycheck Calculator 2025 | State Tax Calculator for All 50 States" />
        <meta property="og:description" content="Free paycheck calculator for all 50 states. Calculate your take-home pay with accurate tax calculations. Updated for 2025." />
        <meta property="og:url" content="https://salarycheck.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://salarycheck.me/opengraph-image.png" />
        
        {/* Enhanced Schema for HomePage */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://salarycheck.me/#webpage",
              "url": "https://salarycheck.me/",
              "name": "Free Paycheck Calculator 2025 | State Tax Calculator",
              "description": "Free paycheck calculator for all 50 states. Calculate your take-home pay, tax withholdings, and net salary with accurate federal and state tax calculations.",
              "isPartOf": {
                "@id": "https://salarycheck.me/#website"
              },
              "about": {
                "@type": "Thing",
                "name": "Paycheck Calculator",
                "description": "Free tools for calculating take-home pay and tax withholdings for all US states"
              },
              "mainEntity": {
                "@type": "ItemList",
                "name": "State Paycheck Calculators",
                "description": "Free paycheck calculators for all US states with accurate tax calculations",
                "numberOfItems": ${states.length},
                "itemListElement": [
                  ${states.map((state, index) => `
                    {
                      "@type": "ListItem",
                      "position": ${index + 1},
                      "item": {
                        "@type": "SoftwareApplication",
                        "name": "${state.name} Paycheck Calculator",
                        "description": "Free ${state.name} paycheck calculator with accurate state tax calculations",
                        "url": "https://salarycheck.me${state.path}",
                        "applicationCategory": "FinanceApplication",
                        "operatingSystem": "Web Browser"
                      }
                    }`).join(',\n                  ')}
                ]
              }
            }
          `}
        </script>
      </Helmet>
      
      <Layout 
        title="Free Paycheck Calculator 2025" 
        description="Calculate your take-home pay with our free paycheck calculator. Get accurate estimates for all 50 states with federal and state tax calculations."
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="mb-6 bg-finance-primary inline-flex p-3 rounded-full text-white">
              <Calculator size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-finance-primary mb-4">
              Free Paycheck Calculator for All States
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Calculate your take-home pay with our free paycheck calculator. Get accurate estimates for any state with federal, state, and local tax calculations. Our calculator includes FICA taxes and other deductions to give you precise results for financial planning.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Updated for 2025 Tax Rates</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">✓ All 50 States Supported</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">✓ 100% Free</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
            {states.map((state) => (
              <StateCard
                key={state.abbreviation}
                name={state.name}
                path={state.path}
                abbreviation={state.abbreviation}
              />
            ))}
          </div>

          <div className="p-6 md:p-8 bg-finance-light rounded-lg border border-gray-200 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-finance-primary mb-4">What is a Paycheck Calculator?</h2>
            <div className="text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                A <strong>paycheck calculator</strong> is a free online tool that helps you determine your <strong>take-home pay</strong> after taxes and deductions. Our paycheck calculator is essential for financial planning, helping you understand exactly how much of your salary actually ends up in your bank account after all withholdings.
              </p>
              <p className="leading-relaxed">
                Our <strong>state-specific paycheck calculators</strong> account for federal income tax, state income tax, local taxes, Social Security (FICA), Medicare, and common deductions like healthcare and retirement contributions. This comprehensive approach gives you a more accurate picture of your actual earnings compared to basic calculators.
              </p>
              <p className="leading-relaxed">
                Whether you're considering a new job offer, planning a move to another state, or just want to better understand your current paycheck, our <strong>free tax calculator</strong> provides clear, accurate estimates to help you make informed financial decisions for 2025 and beyond.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-finance-primary mb-6 text-center">How Our Paycheck Calculator Works</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="mb-4 bg-finance-light inline-flex p-3 rounded-full text-finance-primary">
                  <DollarSign size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Enter Your Income</h3>
                <p className="text-gray-600">Enter your gross salary, hourly wage, or annual income to start calculating your take-home pay with our free calculator.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="mb-4 bg-finance-light inline-flex p-3 rounded-full text-finance-primary">
                  <Percent size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Accurate Tax Calculations</h3>
                <p className="text-gray-600">Our calculator applies current 2025 federal, state, and local tax rates to your income for precise withholding estimates.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="mb-4 bg-finance-light inline-flex p-3 rounded-full text-finance-primary">
                  <Clock size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Instant Results</h3>
                <p className="text-gray-600">Get immediate estimates of your net pay per paycheck, monthly, and annually with detailed breakdowns.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 p-6 md:p-8 bg-finance-light rounded-lg border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-finance-primary mb-4 text-center">Why Use Our Free Paycheck Calculator?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold text-finance-secondary mb-3">State-Specific Tax Calculations</h3>
                <p className="text-gray-600">Our paycheck calculator accounts for specific state tax rates and local taxes, giving you the most accurate take-home pay estimates available.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold text-finance-secondary mb-3">Easy to Use & Mobile-Friendly</h3>
                <p className="text-gray-600">Simple forms with clear results make it easy to calculate your salary on any device. Fully responsive design works perfectly on mobile phones and tablets.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold text-finance-secondary mb-3">Completely Free Forever</h3>
                <p className="text-gray-600">No registration, no fees, no hidden costs. Use our paycheck calculator as many times as you need for all your financial planning.</p>
              </div>
            </div>
          </div>
        </div>
        <FloatingCalculatorButton />
      </Layout>
    </>
  );
};

export default Index;
