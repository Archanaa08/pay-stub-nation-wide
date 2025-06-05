
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
        <title>Free Paycheck Calculator | Take Home Pay Estimator for All 50 States</title>
        <meta name="description" content="Free paycheck calculator for all 50 states. Calculate your take-home pay, hourly wages, tax withholdings, and net salary with accurate federal and state tax calculations. Our free take home check calculator works for Nevada, Utah, Minnesota, Maryland and all other states." />
        <meta name="keywords" content="free paycheck calculator, take home check calculator, paycheck calculator free, nevada paycheck calculator hourly, paycheck calculator ut, paycheck calculator mn, paycheck calculator md, state tax calculator, salary calculator, take-home pay calculator, tax withholding calculator" />
        <link rel="canonical" href="https://salarycheck.me/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Paycheck Calculator | Take Home Pay Estimator for All 50 States" />
        <meta property="og:description" content="Free paycheck calculator for all 50 states. Calculate your take-home pay, hourly wages, and net salary with accurate tax calculations for Nevada, Utah, Minnesota, Maryland and all states." />
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
              "name": "Free Paycheck Calculator | Take Home Pay Estimator for All 50 States",
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
      
      <Layout>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="mb-6 bg-finance-primary inline-flex p-3 rounded-full text-white">
              <Calculator size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-finance-primary mb-4">
              Free Paycheck Calculator – Take Home Pay Estimator
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our <strong>free paycheck calculator</strong> helps you estimate your <strong>take home pay</strong> accurately. Use our <strong>take home check calculator</strong> to see exactly how much of your salary you'll receive after taxes and deductions for any state.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Updated Tax Rates</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">✓ All 50 States Supported</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">✓ 100% Free</span>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-finance-primary mb-6 text-center">Popular State Calculators</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Link to="/nevada-paycheck-calculator" className="bg-finance-light hover:bg-finance-light/80 transition-colors p-4 rounded-lg text-center">
                <h3 className="font-semibold">Nevada</h3>
                <p className="text-sm text-gray-600">Hourly & Salary</p>
              </Link>
              <Link to="/utah-paycheck-calculator" className="bg-finance-light hover:bg-finance-light/80 transition-colors p-4 rounded-lg text-center">
                <h3 className="font-semibold">Utah</h3>
                <p className="text-sm text-gray-600">UT Tax Calculator</p>
              </Link>
              <Link to="/minnesota-paycheck-calculator" className="bg-finance-light hover:bg-finance-light/80 transition-colors p-4 rounded-lg text-center">
                <h3 className="font-semibold">Minnesota</h3>
                <p className="text-sm text-gray-600">MN Tax Calculator</p>
              </Link>
              <Link to="/maryland-paycheck-calculator" className="bg-finance-light hover:bg-finance-light/80 transition-colors p-4 rounded-lg text-center">
                <h3 className="font-semibold">Maryland</h3>
                <p className="text-sm text-gray-600">MD Tax Calculator</p>
              </Link>
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
                A <strong>paycheck calculator</strong> is a <strong>free online tool</strong> that helps you determine your <strong>take-home pay</strong> after taxes and deductions. Our <strong>free take home check calculator</strong> is essential for financial planning, helping you understand exactly how much of your salary actually ends up in your bank account after all withholdings.
              </p>
              <p className="leading-relaxed">
                Our <strong>state-specific paycheck calculators</strong> account for federal income tax, state income tax, local taxes, Social Security (FICA), Medicare, and common deductions like healthcare and retirement contributions. Whether you need a <strong>Nevada paycheck calculator for hourly</strong> wages, a <strong>Utah (UT) paycheck calculator</strong>, a <strong>Minnesota (MN) paycheck calculator</strong>, or a <strong>Maryland (MD) paycheck calculator</strong>, we have you covered.
              </p>
              <p className="leading-relaxed">
                Whether you're considering a new job offer, planning a move to another state, or just want to better understand your current paycheck, our <strong>free paycheck calculator</strong> provides clear, accurate estimates to help you make informed financial decisions.
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
                <p className="text-gray-600">Our calculator applies current federal, state, and local tax rates to your income for precise withholding estimates.</p>
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
